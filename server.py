"""
Prompt Quest — Multi-User Server (Python 3)
No pip dependencies — uses stdlib only.

Usage:  python server.py
Then share the Network URL shown in the console with participants.

Admin panel: http://<ip>:3000/admin
"""

import http.server
import json
import os
import re
import socket
import threading
from pathlib import Path
from urllib.parse import urlparse

PORT     = int(os.environ.get("PORT", 3000))
ROOT     = Path(__file__).parent.resolve()
DATAFILE = ROOT / "scores-data.json"

MIME = {
    ".html": "text/html; charset=utf-8",
    ".css":  "text/css",
    ".js":   "application/javascript",
    ".json": "application/json",
    ".png":  "image/png",
    ".jpg":  "image/jpeg",
    ".ico":  "image/x-icon",
    ".svg":  "image/svg+xml",
}

# ── Score store (protected by a lock for thread safety) ──────
_lock  = threading.Lock()
scores = {}   # { levelId: [ {name, score, timeMs, date}, ... ] }


def _load_scores():
    global scores
    try:
        if DATAFILE.exists():
            scores = json.loads(DATAFILE.read_text(encoding="utf-8"))
    except Exception:
        scores = {}


def _persist_scores():
    try:
        DATAFILE.write_text(json.dumps(scores), encoding="utf-8")
    except Exception:
        pass


_load_scores()


def _sort_level(entries):
    return sorted(entries, key=lambda e: (-e["score"], e["timeMs"]))


def _build_overall():
    best_per_key = {}
    player_totals = {}
    with _lock:
        current = dict(scores)
    for level_id, entries in current.items():
        for e in entries:
            key = f"{e['name']}\x00{level_id}"
            prev = best_per_key.get(key)
            if (prev is None
                    or e["score"] > prev["score"]
                    or (e["score"] == prev["score"] and e["timeMs"] < prev["timeMs"])):
                best_per_key[key] = e
    for e in best_per_key.values():
        n = e["name"]
        if n not in player_totals:
            player_totals[n] = {"name": n, "totalScore": 0, "totalTimeMs": 0}
        player_totals[n]["totalScore"]  += e["score"]
        player_totals[n]["totalTimeMs"] += e["timeMs"]
    return sorted(player_totals.values(),
                  key=lambda p: (-p["totalScore"], p["totalTimeMs"]))


def _sanitize_name(raw):
    return str(raw or "").strip()[:32] or "Anonymous"


ADMIN_PAGE = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>Prompt Quest — Admin</title>
  <style>
    body{font-family:monospace;background:#111;color:#0f0;padding:40px}
    h1{color:#0f0}
    button{background:#c00;color:#fff;border:none;padding:12px 28px;
           font-size:1rem;cursor:pointer;border-radius:4px;margin:8px}
    button:hover{background:#f00}
    #status{margin-top:20px;font-size:1.1rem}
    pre{background:#0a0a0a;border:1px solid #0f0;padding:16px;border-radius:4px;
        max-height:400px;overflow:auto;color:#8f8}
  </style>
</head>
<body>
  <h1>&#127918; Prompt Quest &#8212; Admin Panel</h1>
  <button onclick="resetScores()">&#9888;&#65039; Reset ALL Scores</button>
  <button onclick="loadData()">&#128260; Refresh Data</button>
  <div id="status"></div>
  <pre id="data">Loading...</pre>
  <script>
    async function resetScores(){
      if(!confirm('Delete ALL scores? This cannot be undone.'))return;
      const r=await fetch('/api/scores',{method:'DELETE'});
      const d=await r.json();
      document.getElementById('status').textContent=d.ok?'✅ Scores reset.':'❌ Error';
      loadData();
    }
    async function loadData(){
      const r=await fetch('/api/scores/overall');
      const d=await r.json();
      document.getElementById('data').textContent=JSON.stringify(d,null,2);
    }
    loadData();
  </script>
</body>
</html>"""


class Handler(http.server.BaseHTTPRequestHandler):
    def log_message(self, fmt, *args):
        pass  # suppress default access logs (keep console clean)

    def _cors(self):
        self.send_header("Access-Control-Allow-Origin",  "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")

    def _json(self, status, data):
        body = json.dumps(data).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self._cors()
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _html(self, status, html):
        body = html.encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self._cors()
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def _serve_static(self, file_path):
        try:
            data = file_path.read_bytes()
        except (OSError, PermissionError):
            self.send_error(404, "Not found")
            return
        mime = MIME.get(file_path.suffix.lower(), "application/octet-stream")
        self.send_response(200)
        self.send_header("Content-Type", mime)
        self._cors()
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def _read_body(self):
        length = int(self.headers.get("Content-Length", 0))
        if length > 10_000:
            return {}
        raw = self.rfile.read(length)
        try:
            return json.loads(raw)
        except Exception:
            return {}

    def _safe_path(self, rel):
        """Resolve a URL path to an absolute file path, preventing traversal."""
        # Normalise and strip leading slashes
        rel = rel.lstrip("/") or "index.html"
        resolved = (ROOT / rel).resolve()
        if not str(resolved).startswith(str(ROOT)):
            return None
        return resolved

    def do_OPTIONS(self):
        self.send_response(204)
        self._cors()
        self.end_headers()

    def do_GET(self):
        parsed   = urlparse(self.path)
        pathname = parsed.path

        # Admin page
        if pathname == "/admin":
            self._html(200, ADMIN_PAGE)
            return

        # API — overall scoreboard
        if pathname == "/api/scores/overall":
            self._json(200, _build_overall())
            return

        # API — level scoreboard
        m = re.match(r"^/api/scores/(\d{1,2})$", pathname)
        if m:
            lid = m.group(1)
            with _lock:
                entries = list(scores.get(lid, []))
            self._json(200, _sort_level(entries))
            return

        # Static files
        safe = self._safe_path(pathname)
        if safe is None:
            self.send_error(403, "Forbidden")
            return
        self._serve_static(safe)

    def do_POST(self):
        parsed   = urlparse(self.path)
        pathname = parsed.path

        m = re.match(r"^/api/scores/(\d{1,2})$", pathname)
        if not m:
            self._json(404, {"error": "Not found"})
            return

        body    = self._read_body()
        name    = _sanitize_name(body.get("name", ""))
        score   = body.get("score")
        time_ms = body.get("timeMs")

        if (not isinstance(score, (int, float)) or
                not isinstance(time_ms, (int, float)) or
                score < 0 or time_ms < 0):
            self._json(400, {"error": "Invalid score or timeMs"})
            return

        lid = m.group(1)
        import time as _time
        entry = {
            "name":   name,
            "score":  min(int(score),   1000),
            "timeMs": min(int(time_ms), 3_600_000),
            "date":   int(_time.time() * 1000)
        }

        with _lock:
            if lid not in scores:
                scores[lid] = []
            scores[lid].append(entry)
            scores[lid] = _sort_level(scores[lid])
            result = list(scores[lid])
            _persist_scores()

        self._json(200, result)

    def do_DELETE(self):
        parsed   = urlparse(self.path)
        pathname = parsed.path

        if pathname == "/api/scores":
            global scores
            with _lock:
                scores = {}
                _persist_scores()
            self._json(200, {"ok": True})
        else:
            self._json(404, {"error": "Not found"})


def _get_local_ips():
    ips = []
    try:
        # Connect to a public address to find the outbound interface IP
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ips.append(s.getsockname()[0])
        s.close()
    except Exception:
        pass
    return ips


def main():
    server = http.server.ThreadingHTTPServer(("0.0.0.0", PORT), Handler)
    ips = _get_local_ips()

    print("\n╔══════════════════════════════════════════╗")
    print("║   🚀  Prompt Quest Server — RUNNING       ║")
    print("╠══════════════════════════════════════════╣")
    print(f"║   Local:    http://localhost:{PORT}         ║")
    for ip in ips:
        url = f"http://{ip}:{PORT}".ljust(38)
        print(f"║   Network:  {url} ║")
    print("╠══════════════════════════════════════════╣")
    print("║   📋 Share the Network URL above with    ║")
    print("║      workshop participants.               ║")
    print("║   🔧 Admin panel: /admin                 ║")
    print("╚══════════════════════════════════════════╝\n")

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n👋 Server stopped.")
        server.shutdown()


if __name__ == "__main__":
    main()
