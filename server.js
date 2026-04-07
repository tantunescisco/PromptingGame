/**
 * Prompt Quest — Multi-User Server
 * No npm dependencies — uses Node.js built-ins only.
 *
 * Usage:  node server.js
 * Then share the Network URL shown in the console with participants.
 *
 * Admin reset:  DELETE /api/scores  (or visit /admin)
 */

'use strict';

const http = require('http');
const fs   = require('fs');
const path = require('path');
const os   = require('os');

const PORT      = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'scores-data.json');
const ROOT      = __dirname;

// ── In-memory score store ─────────────────────────────────
// { [levelId: string]: Array<{ name, score, timeMs, date }> }
let scores = {};

function loadScores() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      scores = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    }
  } catch { scores = {}; }
}

function persistScores() {
  try { fs.writeFileSync(DATA_FILE, JSON.stringify(scores), 'utf8'); } catch {}
}

loadScores();

// ── Sorting helpers ───────────────────────────────────────
function sortLevel(entries) {
  return [...entries].sort((a, b) => b.score - a.score || a.timeMs - b.timeMs);
}

function buildOverall() {
  const bestPerKey = {};        // key = name + '_' + levelId
  const playerTotals = {};      // key = name

  Object.keys(scores).forEach(levelId => {
    (scores[levelId] || []).forEach(entry => {
      const key = entry.name + '\x00' + levelId;
      if (!bestPerKey[key] ||
          entry.score > bestPerKey[key].score ||
          (entry.score === bestPerKey[key].score && entry.timeMs < bestPerKey[key].timeMs)) {
        bestPerKey[key] = entry;
      }
    });
  });

  Object.values(bestPerKey).forEach(e => {
    if (!playerTotals[e.name]) {
      playerTotals[e.name] = { name: e.name, totalScore: 0, totalTimeMs: 0 };
    }
    playerTotals[e.name].totalScore  += e.score;
    playerTotals[e.name].totalTimeMs += e.timeMs;
  });

  return Object.values(playerTotals)
    .sort((a, b) => b.totalScore - a.totalScore || a.totalTimeMs - b.totalTimeMs);
}

// ── Static file MIME types ────────────────────────────────
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.ico':  'image/x-icon',
  '.svg':  'image/svg+xml'
};

function serveFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 10_000) { req.destroy(); reject(new Error('Body too large')); }
    });
    req.on('end', () => {
      try { resolve(JSON.parse(body)); } catch { resolve({}); }
    });
    req.on('error', reject);
  });
}

function json(res, status, data) {
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });
  res.end(JSON.stringify(data));
}

function sanitizeName(raw) {
  return String(raw || '').trim().slice(0, 32) || 'Anonymous';
}

function isValidLevelId(id) {
  return /^\d{1,2}$/.test(id);
}

// ── Admin HTML page ───────────────────────────────────────
const ADMIN_PAGE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>Prompt Quest — Admin</title>
  <style>
    body { font-family: monospace; background: #111; color: #0f0; padding: 40px; }
    h1 { color: #0f0; }
    button { background: #c00; color: #fff; border: none; padding: 12px 28px;
             font-size: 1rem; cursor: pointer; border-radius: 4px; margin: 8px; }
    button:hover { background: #f00; }
    #status { margin-top: 20px; font-size: 1.1rem; }
    pre { background: #0a0a0a; border: 1px solid #0f0; padding: 16px; border-radius: 4px;
          max-height: 400px; overflow: auto; color: #8f8; }
  </style>
</head>
<body>
  <h1>🎮 Prompt Quest — Admin Panel</h1>
  <button onclick="resetScores()">⚠️ Reset ALL Scores</button>
  <button onclick="loadData()">🔄 Refresh Data</button>
  <div id="status"></div>
  <pre id="data">Loading...</pre>
  <script>
    async function resetScores() {
      if (!confirm('Delete ALL scores? This cannot be undone.')) return;
      const r = await fetch('/api/scores', { method: 'DELETE' });
      const d = await r.json();
      document.getElementById('status').textContent = d.ok ? '✅ Scores reset.' : '❌ Error';
      loadData();
    }
    async function loadData() {
      const r = await fetch('/api/scores/overall');
      const d = await r.json();
      document.getElementById('data').textContent = JSON.stringify(d, null, 2);
    }
    loadData();
  </script>
</body>
</html>`;

// ── HTTP Server ───────────────────────────────────────────
const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  const url      = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = url.pathname;

  // ── Admin page ─────────────────────────────────────────
  if (pathname === '/admin') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(ADMIN_PAGE);
    return;
  }

  // ── API routes ─────────────────────────────────────────
  if (pathname.startsWith('/api/')) {

    // POST /api/scores/:levelId  — submit a score
    const postMatch = pathname.match(/^\/api\/scores\/(\d{1,2})$/);
    if (req.method === 'POST' && postMatch) {
      let body;
      try { body = await readBody(req); }
      catch { json(res, 400, { error: 'Bad payload' }); return; }

      const { name, score, timeMs } = body;
      if (typeof score !== 'number' || typeof timeMs !== 'number' ||
          !Number.isFinite(score) || !Number.isFinite(timeMs) ||
          score < 0 || timeMs < 0) {
        json(res, 400, { error: 'Invalid score or timeMs' }); return;
      }

      const levelId = postMatch[1];
      if (!scores[levelId]) scores[levelId] = [];
      scores[levelId].push({
        name:   sanitizeName(name),
        score:  Math.min(Math.floor(score), 1000),
        timeMs: Math.min(Math.floor(timeMs), 3_600_000),
        date:   Date.now()
      });
      scores[levelId] = sortLevel(scores[levelId]);
      persistScores();
      json(res, 200, scores[levelId]);
      return;
    }

    // GET /api/scores/overall
    if (req.method === 'GET' && pathname === '/api/scores/overall') {
      json(res, 200, buildOverall()); return;
    }

    // GET /api/scores/:levelId
    const getMatch = pathname.match(/^\/api\/scores\/(\d{1,2})$/);
    if (req.method === 'GET' && getMatch) {
      const levelId = getMatch[1];
      json(res, 200, sortLevel(scores[levelId] || [])); return;
    }

    // DELETE /api/scores  — reset all (admin)
    if (req.method === 'DELETE' && pathname === '/api/scores') {
      scores = {};
      persistScores();
      json(res, 200, { ok: true }); return;
    }

    json(res, 404, { error: 'Not found' }); return;
  }

  // ── Static files ────────────────────────────────────────
  let relPath = pathname === '/' ? 'index.html' : pathname;

  // Strip leading slash, normalize, prevent traversal
  const normalized = path.normalize(relPath.replace(/^\/+/, ''));
  if (normalized.startsWith('..') || path.isAbsolute(normalized)) {
    res.writeHead(403); res.end('Forbidden'); return;
  }

  const filePath = path.join(ROOT, normalized);
  // Double-check it's within ROOT
  if (!filePath.startsWith(ROOT + path.sep) && filePath !== ROOT) {
    res.writeHead(403); res.end('Forbidden'); return;
  }

  serveFile(res, filePath);
});

server.listen(PORT, '0.0.0.0', () => {
  const nets = os.networkInterfaces();
  const localIPs = Object.values(nets).flat()
    .filter(n => n.family === 'IPv4' && !n.internal)
    .map(n => n.address);

  console.log('\n╔══════════════════════════════════════════╗');
  console.log('║   🚀  Prompt Quest Server — RUNNING       ║');
  console.log('╠══════════════════════════════════════════╣');
  console.log(`║   Local:    http://localhost:${PORT}         ║`);
  localIPs.forEach(ip => {
    const padded = `http://${ip}:${PORT}`.padEnd(38);
    console.log(`║   Network:  ${padded} ║`);
  });
  console.log('╠══════════════════════════════════════════╣');
  console.log('║   📋 Share the Network URL above with    ║');
  console.log('║      workshop participants.               ║');
  console.log('║   🔧 Admin panel: /admin                 ║');
  console.log('╚══════════════════════════════════════════╝\n');
});

server.on('error', err => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n❌  Port ${PORT} is in use. Try:  PORT=3001 node server.js\n`);
  } else {
    console.error(err);
  }
  process.exit(1);
});
