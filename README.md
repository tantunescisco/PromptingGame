# Prompt Quest 🚀

An interactive browser-based game for learning and practicing **prompt engineering**. Players progress through 5 levels of increasing difficulty, from playful basics to advanced AI architecture techniques.

🌐 **Live demo:** [https://tantunescisco.github.io/PromptingGame/](https://tantunescisco.github.io/PromptingGame/)

---

## Overview

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
