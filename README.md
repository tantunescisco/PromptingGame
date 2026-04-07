# Prompt Quest 🚀

An interactive browser-based game for learning and practicing **prompt engineering**. Players progress through 5 levels of increasing difficulty, from playful basics to advanced AI architecture techniques.

🌐 **Live demo:** [https://tantunescisco.github.io/PromptingGame/](https://tantunescisco.github.io/PromptingGame/)

> Scores are shared in real time across all participants via Firebase Realtime Database.  
> Scoreboards reset automatically every **Monday at 00:00 UTC**.

---

## Overview

Prompt Quest is a workshop tool for teaching participants how to communicate effectively with AI systems. Each level introduces new prompt engineering concepts through hands-on exercises with immediate feedback.

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
- **Shared live scoreboard** — all participants see the same leaderboard in real time (Firebase)
- **Per-level and overall leaderboards** with score + time tie-breaking
- **Top-5 weekly leaderboard on the start screen** — visible before the game begins
- **Weekly auto-reset** — scores clear every Monday at 00:00 UTC automatically
- **Quit button** — exit to the start screen at any point during the game
- **Themed music** per level using the Web Audio API (procedural, no audio files)
- **Themed sound effects** for correct/wrong answers, independent of music
- **Separate mute controls** for music 🎵 and sound effects 🔔
- **Player name entry** — each participant's name appears on the scoreboard

---

## Scoreboard Storage

The app uses a **3-tier storage system** — the best available option is picked automatically:

| Tier | Storage | Shared? | Works on GitHub Pages? | Auto-reset |
|------|---------|---------|----------------------|------------|
| 1 ✅ | **Firebase Realtime Database** | ✅ Real-time | ✅ Yes | ✅ GitHub Actions (Monday 00:00 UTC) |
| 2 | **server.py REST API** | ✅ 5s polling | ❌ Needs local network | ✅ Built-in Monday scheduler |
| 3 | **localStorage** | ❌ Per device | ✅ Yes (fallback) | ❌ Manual |

**Tier 1 is active.** The app is connected to:
```
https://promptinggamedb-default-rtdb.europe-west1.firebasedatabase.app
```

### Firebase Database Rules

The database must allow public read/write. Set the following rules in the Firebase Console  
(**Realtime Database → Rules**):

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

> The default test mode rules expire after 30 days. Use the rules above to make access permanent.

---

## Running the App

### Option 1 — GitHub Pages (recommended, shared scores active)

Open the live URL in any browser — no setup needed:

```
https://tantunescisco.github.io/PromptingGame/
```

All participants share the same live scoreboard via Firebase. Works on any device with a browser.

---

### Option 2 — Local network server (alternative, no internet required)

Run the Python server on the facilitator's machine. Useful for environments without internet access.

**Requirements:** Python 3.6+ (no pip install — stdlib only)

```bash
git clone https://github.com/tantunescisco/PromptingGame.git
cd PromptingGame
python server.py

# Custom port:
PORT=8080 python server.py
```

The console shows the network URL and next scheduled reset:

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

**Admin panel:** `http://localhost:3000/admin` — view all scores, manual reset, and next auto-reset time.

---

### Option 3 — Node.js server

```bash
node server.js
# or: PORT=3000 node server.js
```

---

## Scoring

| Action | Points |
|--------|--------|
| Correct answer (no hint) | 10 pts |
| Correct answer (hint used) | 5 pts |
| Wrong answer | 0 pts |

- Maximum per level: **40 points** (4 exercises × 10 pts)
- Leaderboards rank by **score descending**, then **time ascending** on ties

---

## Weekly Auto-Reset

Scores are cleared automatically every **Monday at 00:00 UTC** through two independent mechanisms:

| Where | Mechanism |
|-------|-----------|
| GitHub Pages (Firebase) | GitHub Actions cron job (`.github/workflows/weekly-reset.yml`) |
| Local server (server.py) | Background `threading.Timer` thread inside the process |

To trigger a manual reset:
- **Firebase:** Run the `weekly-reset.yml` workflow from the GitHub Actions tab → click **Run workflow**
- **Local server:** Open `http://localhost:3000/admin` → click **Reset ALL Scores**

---

## Tech Stack

- **Frontend:** Pure HTML5 / CSS3 / Vanilla JavaScript (ES2022) — no frameworks, no bundler
- **Audio:** Web Audio API — procedural music and SFX, no audio files needed
- **Shared storage:** Firebase Realtime Database (Tier 1) — free, works on GitHub Pages
- **Local storage:** Python 3 `ThreadingHTTPServer` REST API + `localStorage` fallback
- **Deployment:** GitHub Actions → GitHub Pages

---

## Project Structure

```
PromptingGame/
├── index.html                        # Single-page app shell
├── style.css                         # All themes and styles
├── game.js                           # 100 questions, all game engines and logic
├── server.py                         # Python REST API + static file server
├── server.js                         # Node.js equivalent
├── .github/
│   └── workflows/
│       ├── deploy.yml               # GitHub Pages deployment on push to main
│       └── weekly-reset.yml        # Monday 00:00 UTC Firebase score reset
└── .gitignore
```

---

## Architecture Notes

**`game.js`** is the single source of truth for all game logic:

- `FIREBASE_URL` — connection to the shared Realtime Database
- `GAME_DATA` — 5 levels × 20 questions each (4 randomly selected per playthrough)
- `GameState` — current session state (level, score, timer, player name)
- `Scoreboard` — 3-tier async storage (Firebase → REST API → localStorage)
- `Timer` — live per-level countdown display
- `MusicEngine` — procedural looping music, one theme per level, independent mute
- `SoundEngine` — themed correct/wrong SFX, independent mute
- `GameEngine` — all screen transitions, exercise rendering, and scoring logic

**`server.py`** REST API (Tier 2):

| Method | Endpoint | Purpose |
|--------|----------|---------|
| `POST` | `/api/scores/:levelId` | Save a player's level score |
| `GET` | `/api/scores/:levelId` | Get leaderboard for a level |
| `GET` | `/api/scores/overall` | Get overall leaderboard |
| `GET` | `/api/reset-info` | Get next scheduled reset time |
| `DELETE` | `/api/scores` | Reset all scores |
| `GET` | `/admin` | Admin panel |

---

## Deployment

Every push to `main` auto-deploys to GitHub Pages via GitHub Actions.

```bash
git add .
git commit -m "description"
git push origin main
# Live on GitHub Pages in ~30 seconds
```

---

## License

MIT
