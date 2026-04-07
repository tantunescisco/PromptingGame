# Prompt Quest 🚀

An interactive browser-based game for learning and practicing **prompt engineering**. Players progress through 5 levels of increasing difficulty, from playful basics to advanced AI architecture techniques.

🌐 **Live demo:** [https://tantunescisco.github.io/PromptingGame/](https://tantunescisco.github.io/PromptingGame/)

---

## Scoreboard Storage Architecture

The app uses a **3-tier storage system** — it automatically picks the best available option:

| Tier | Storage | Shared across devices? | Works on GitHub Pages? | Auto-reset |
|------|---------|----------------------|----------------------|------------|
| 1 | **Firebase Realtime Database** | ✅ Yes (real-time) | ✅ Yes | ✅ GitHub Actions cron |
| 2 | **server.py REST API** | ✅ Yes (5s polling) | ❌ No (needs local server) | ✅ Built-in Monday scheduler |
| 3 | **localStorage** | ❌ No (per device) | ✅ Yes (fallback) | ❌ Manual |

> **Why scores don't sync by default on GitHub Pages:** The static GitHub Pages hosting has no backend. Every player's browser uses its own `localStorage`. To share scores across all participants you need either Firebase (Tier 1) or a local server (Tier 2).

---

## Setting Up Shared Scores (Required for Workshops)

### Option A — Firebase Realtime Database (recommended for GitHub Pages)

**One-time setup (~3 minutes):**

1. Go to [https://console.firebase.google.com](https://console.firebase.google.com) and create a project
2. In the left sidebar → **Realtime Database** → **Create database**
3. Choose **"Start in test mode"** (allows public read/write — fine for a workshop)
4. Copy the database URL (format: `https://YOUR-PROJECT-default-rtdb.firebaseio.com`)
5. Open `game.js` and paste the URL into the config at the top:
   ```js
   const FIREBASE_URL = 'https://YOUR-PROJECT-default-rtdb.firebaseio.com';
   ```
6. Commit and push — all participants on the GitHub Pages URL will now share the same scoreboard in real time

**Enable weekly auto-reset via GitHub Actions:**

7. In your GitHub repo → **Settings → Secrets and variables → Actions** → **New repository secret**
   - Name: `FIREBASE_URL`
   - Value: your Firebase database URL
8. Done — the `.github/workflows/weekly-reset.yml` workflow runs every Monday at 00:00 UTC and deletes all scores

---

### Option B — Local network server (no Firebase account needed)

Run the included Python server on the facilitator's machine. All participants on the same network share scores.

**Requirements:** Python 3.6+ (no pip install — stdlib only)

```bash
git clone https://github.com/tantunescisco/PromptingGame.git
cd PromptingGame
python server.py
```

The console displays the network URL and the next scheduled auto-reset time:

```
╔══════════════════════════════════════════╗
║   🚀  Prompt Quest Server — RUNNING       ║
╠══════════════════════════════════════════╣
║   Local:    http://localhost:3000         ║
║   Network:  http://192.168.x.x:3000      ║
╠══════════════════════════════════════════╣
║   📋 Share the Network URL above with    ║
║      workshop participants.               ║
║   🔧 Admin panel: /admin                 ║
║   🔄 Auto-reset: 2026-04-13 00:00 UTC   ║
╚══════════════════════════════════════════╝
```

Share the Network URL with participants. The app auto-detects the server and switches from localStorage to the shared API.

**Admin panel:** `http://localhost:3000/admin` — view all scores, manual reset, and next scheduled auto-reset time.

**Auto-reset:** The server automatically clears all scores every **Monday at 00:00 UTC** via a background scheduler thread.



Prompt Quest is designed as a workshop tool to teach participants how to communicate effectively with AI systems. Each level introduces new prompt engineering concepts through hands-on exercises with immediate feedback.

| Level | Theme | Concept |
|-------|-------|---------|
| 1 🌈 | Prompt Playground | What is a prompt? Basics of clear instructions |
| 2 ⚔️ | Clarity Kingdom | Specificity, the 5 W's, format and length |
| 3 🔮 | Context Cave | Role assignment, system prompts, context injection |
| 4 ⚙️ | Format Factory | Output formatting, constraints, templating |
| 5 🤖 | AI Architect | Few-shot, chain-of-thought, prompt chaining, meta-prompting |

---

## Features

- **5 levels** with 20 questions each — 4 randomly selected per session for replayability
- **4 exercise types:** Multiple choice, free-text prompts, drag-to-order, and matching
- **Live scoreboard** per level and overall leaderboard with score + time tie-breaking
- **Real-time updates** — scoreboards poll every 5 seconds when a backend server is running
- **Themed music** per level using the Web Audio API (procedural, no audio files needed)
- **Themed sound effects** for correct/wrong answers, independent of music
- **Separate mute controls** for music 🎵 and sound effects 🔔
- **Player name entry** and persistent scoring across participants
- **Responsive design** — works on desktop and tablet browsers

---

## Running the App

### Option 1 — GitHub Pages (no setup, no shared scores)

Open the live URL in any browser:

```
https://tantunescisco.github.io/PromptingGame/
```

Each participant's scores are stored locally in their browser's `localStorage`. Scoreboards are not shared across devices in this mode.

---

### Option 2 — Local network with shared live scoreboards (workshop use)

Run the included Python server on the facilitator's machine. All participants connect to the same server and see each other's scores in real time.

**Requirements:** Python 3.6+ (no pip install needed — stdlib only)

```bash
# Clone or download the repo
git clone https://github.com/tantunescisco/PromptingGame.git
cd PromptingGame

# Start the server (default port 3000)
python server.py

# Or use a custom port
PORT=8080 python server.py
```

The console will print the network URL:

```
Serving on http://0.0.0.0:3000
Share with participants: http://192.168.x.x:3000
```

Share that URL with all participants on the same network. The app auto-detects the server and switches from localStorage to the shared API.

**Admin panel:** Open `http://localhost:3000/admin` to view all scores and reset the leaderboard between sessions.

---

### Option 3 — Node.js server

A Node.js equivalent is also included:

```bash
node server.js
# or
PORT=3000 node server.js
```

---

## Scoring

| Action | Points |
|--------|--------|
| Correct answer (no hint) | 10 pts |
| Correct answer (hint used) | 5 pts |
| Wrong answer | 0 pts |

- Maximum score per level: **40 points** (4 exercises × 10 pts)
- Leaderboards sort by **score descending**, then **time ascending** (faster = better on ties)

---

## Tech Stack

- **Frontend:** Pure HTML5 / CSS3 / Vanilla JavaScript (ES2022) — no frameworks, no bundler
- **Audio:** Web Audio API — procedural music and SFX, no audio files
- **Backend:** Python 3 stdlib (`http.server.ThreadingHTTPServer`) or Node.js `http`
- **Storage:** Server-side `scores-data.json` with localStorage fallback
- **Deployment:** GitHub Actions → GitHub Pages

---

## Project Structure

```
PromptingGame/
├── index.html          # Single-page app shell
├── style.css           # All themes and styles
├── game.js             # Game data (100 questions), all engines and logic
├── server.py           # Python REST API + static file server
├── server.js           # Node.js equivalent
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions Pages deployment
└── .gitignore
```

---

## Architecture Notes

**`game.js`** is the single source of truth for all game logic:

- `GAME_DATA` — 5 levels × 20 questions each (4 randomly selected per playthrough)
- `GameState` — current session state (level, score, timer, player name)
- `Scoreboard` — async API-first storage with localStorage fallback
- `Timer` — live countdown display
- `MusicEngine` — procedural looping music, one theme per level
- `SoundEngine` — themed correct/wrong SFX, independent mute control
- `GameEngine` — all screen transitions, rendering, and scoring logic

**`server.py`** REST API:

| Method | Endpoint | Purpose |
|--------|----------|---------|
| `POST` | `/api/scores/:levelId` | Save a player's level score |
| `GET` | `/api/scores/:levelId` | Get leaderboard for a level |
| `GET` | `/api/scores/overall` | Get overall leaderboard |
| `DELETE` | `/api/scores` | Reset all scores |
| `GET` | `/admin` | Admin panel (browser UI) |

---

## Deployment

Every push to `main` auto-deploys to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`).

To deploy manually:

```bash
git add .
git commit -m "your change description"
git push origin main
# GitHub Actions handles the rest — live in ~30 seconds
```

---

## License

MIT
