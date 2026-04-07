/* ============================================
   GAME.JS — Prompt Quest: All Levels & Engine
   ============================================ */

"use strict";

// ============================================================
// GAME DATA — 5 Levels, 4 exercises each
// ============================================================
const GAME_DATA = {
  levels: [

    // ─────────────────────────────────────────────────────
    // LEVEL 1 — Prompt Playground (childish)
    // ─────────────────────────────────────────────────────
    {
      id: 1,
      title: "Prompt Playground",
      subtitle: "Let's learn what a prompt is!",
      badge: "🌈",
      completeBadge: "🏅 Playground Star",
      theme: "level-1",
      concept: `
        <h4>🤔 What is a Prompt?</h4>
        <p>A <strong>prompt</strong> is a message or question you send to an AI. It's like giving instructions to a really smart robot!</p>
        <p>Just like when you ask a friend "Can you get me the red ball?" — the clearer you are, the better the answer you get.</p>
        <br>
        <p>In this level, you'll learn the basics: <strong>what prompts are</strong>, and how simple instructions work.</p>
      `,
      exercises: [
        {
          id: "1-1",
          type: "MULTIPLE CHOICE",
          question: "What is a PROMPT when talking to an AI?",
          context: null,
          hint: "Think about how you ask your friend for help!",
          inputType: "choice",
          choices: [
            { id: "a", text: "🖥️ A computer program that writes code by itself" },
            { id: "b", text: "💬 A message or instruction you give to an AI" },
            { id: "c", text: "🔌 A button you press to turn the AI on" },
            { id: "d", text: "📺 A screen where you watch AI videos" }
          ],
          correct: "b",
          explanation: "A prompt is the message or instruction you type to communicate with an AI. It's your way of telling the AI what you want it to do!",
          tip: "💡 Pro Tip: Every time you type in a chat box to an AI, that's called a prompt!"
        },
        {
          id: "1-2",
          type: "MULTIPLE CHOICE",
          question: "Which of these is the BEST prompt to ask an AI to write a story about a dog?",
          context: null,
          hint: "Which option gives the AI the most useful information?",
          inputType: "choice",
          choices: [
            { id: "a", text: "\"story\"" },
            { id: "b", text: "\"Write me a short funny story about a dog named Biscuit who loves to eat socks\"" },
            { id: "c", text: "\"dog thing\"" },
            { id: "d", text: "\"help\"" }
          ],
          correct: "b",
          explanation: "Option B is the best because it's specific! It tells the AI the topic (dog), the tone (funny), the details (dog named Biscuit, loves eating socks). More details = better result!",
          tip: "💡 Pro Tip: Think of prompts like a recipe — the more details you give, the better the dish comes out!"
        },
        {
          id: "1-3",
          type: "SPOT THE DIFFERENCE",
          question: "Look at the prompt below. It's too VAGUE (not clear enough). Which word should you replace to make it better?",
          context: "Current prompt: \"Write me something about animals\"",
          hint: "What specific kind of 'something' would be useful?",
          inputType: "choice",
          choices: [
            { id: "a", text: "Replace 'animals' with 'cats'" },
            { id: "b", text: "Replace 'Write' with 'Say'" },
            { id: "c", text: "Replace 'something' with 'a fun 5-sentence poem'" },
            { id: "d", text: "Replace 'me' with 'I'" }
          ],
          correct: "c",
          explanation: "The word 'something' is too vague — it could mean anything! Replacing it with 'a fun 5-sentence poem' tells the AI exactly what kind of content you want.",
          tip: "💡 Pro Tip: Replace vague words like 'something', 'stuff', or 'thing' with specific instructions!"
        },
        {
          id: "1-4",
          type: "BUILD A PROMPT",
          question: "Complete the prompt! Fill in the blank to make a great prompt asking an AI to explain what rain is — for a 6 year old.",
          context: "Prompt template: \"Explain what rain is ___ in very simple words a 6 year old can understand\"",
          hint: "What connecting word helps? Try 'to me' or 'clearly' to fill the blank!",
          inputType: "freetext",
          placeholder: "Type your completed prompt here...",
          keywords: ["simple", "kid", "6 year", "easy", "child", "plain", "explain"],
          minLength: 20,
          explanation: "Great prompts for simple explanations include audience context ('for a 6 year old'), tone ('simple words'), and a clear task ('explain what rain is'). You nailed the basics!",
          tip: "💡 Pro Tip: Always think about WHO will read the answer. Telling the AI the audience makes answers much more useful!"
        }
      ]
    },

    // ─────────────────────────────────────────────────────
    // LEVEL 2 — Clarity Kingdom (adventure/school)
    // ─────────────────────────────────────────────────────
    {
      id: 2,
      title: "Clarity Kingdom",
      subtitle: "Be specific. Be clear. Be powerful!",
      badge: "⚔️",
      completeBadge: "🗡️ Clarity Champion",
      theme: "level-2",
      concept: `
        <h4>⚔️ The Power of Specificity</h4>
        <p>Vague prompts give vague answers. <strong>Specific prompts give amazing answers!</strong></p>
        <p>A good prompt should answer these magic questions:<br>
        🔹 <strong>What?</strong> — What do you want?<br>
        🔹 <strong>How?</strong> — In what style, length, or format?<br>
        🔹 <strong>For whom?</strong> — Who is the audience?</p>
        <br>
        <p>In this level, you'll practice making prompts more <strong>specific and targeted</strong>.</p>
      `,
      exercises: [
        {
          id: "2-1",
          type: "RANK THE PROMPTS",
          question: "Drag these prompts into order from WORST (1) to BEST (4) for getting a helpful recipe.",
          context: null,
          hint: "Think about which prompt gives the most specific, useful information to the AI.",
          inputType: "ordering",
          items: [
            { id: "a", text: "\"food\"" },
            { id: "b", text: "\"recipe\"" },
            { id: "c", text: "\"Give me a recipe\"" },
            { id: "d", text: "\"Give me a quick vegetarian pasta recipe that takes under 20 minutes and serves 2 people\"" }
          ],
          correctOrder: ["a", "b", "c", "d"],
          explanation: "The ranking is: 1) 'food' (single word, useless) → 2) 'recipe' (slightly better) → 3) 'Give me a recipe' (at least a sentence) → 4) The detailed one (specifies diet, dish, time, servings). Specificity wins!",
          tip: "💡 Pro Tip: A prompt should always tell the AI WHAT you want and any important constraints (time, length, audience)."
        },
        {
          id: "2-2",
          type: "REWRITE THE PROMPT",
          question: "This prompt is weak. Rewrite it to be clear and specific.",
          context: "Weak prompt: \"Tell me about history\"",
          hint: "Pick a specific topic, time period, or person. Add a length or format.",
          inputType: "freetext",
          placeholder: "Write your improved prompt here...",
          keywords: ["in", "about", "history", "century", "war", "revolution", "years", "summarize", "explain"],
          minLength: 30,
          explanation: "A strong rewrite might be: 'Summarize the main causes of World War I in 3 bullet points for a high school student.' It specifies TOPIC, FORMAT, AUDIENCE, and LENGTH.",
          tip: "💡 Pro Tip: Use the 5W formula — Who, What, When, Where, Why — to build strong prompts!"
        },
        {
          id: "2-3",
          type: "SPOT THE FLAW",
          question: "This AI response was bad because the prompt was unclear. Which part of the prompt caused the problem?",
          context: "Prompt: \"Write something creative\"\nAI Response: [Wrote a 2000-word epic fantasy novel with dragons]\nUser wanted: A short creative tagline for their bakery.",
          hint: "What did the user forget to specify?",
          inputType: "choice",
          choices: [
            { id: "a", text: "The word 'Write' — AI doesn't understand that verb" },
            { id: "b", text: "No target topic, length, or purpose was given" },
            { id: "c", text: "The word 'creative' is copyright-protected" },
            { id: "d", text: "The prompt should have been in capital letters" }
          ],
          correct: "b",
          explanation: "The AI had no idea what 'something creative' meant — no topic (bakery), no format (tagline), no length (short). Always give context and purpose!",
          tip: "💡 Pro Tip: Never assume the AI knows your intent. State it explicitly!"
        },
        {
          id: "2-4",
          type: "IMPROVEMENT CHALLENGE",
          question: "You are helping a student prepare for an exam. Improve this prompt so it generates a useful study guide.",
          context: "Original prompt: \"Study guide\"",
          hint: "What subject? What level? What format? How long?",
          inputType: "freetext",
          placeholder: "Type your improved prompt...",
          keywords: ["study", "guide", "bullet", "topic", "exam", "chapter", "subject", "key", "point", "summary", "format"],
          minLength: 40,
          explanation: "Example strong prompt: 'Create a study guide for Chapter 3 on the French Revolution for a 10th-grade history exam. Include 5 key events, dates, and why they matter, in bullet point format.' Specific = powerful!",
          tip: "💡 Pro Tip: When writing prompts for study materials, include the subject, grade level, topics, and format."
        }
      ]
    },

    // ─────────────────────────────────────────────────────
    // LEVEL 3 — Context Cave (fantasy RPG / dark)
    // ─────────────────────────────────────────────────────
    {
      id: 3,
      title: "Context Cave",
      subtitle: "Unlock the power of roles and context",
      badge: "🔮",
      completeBadge: "🧙 Wizard of Context",
      theme: "level-3",
      concept: `
        <h4>🔮 Context is Magic</h4>
        <p>One of the most powerful techniques in prompt engineering is giving the AI a <strong>ROLE</strong> and <strong>CONTEXT</strong>.</p>
        <p>Compare these two:<br>
        ❌ "Explain this code"<br>
        ✅ "You are a Python tutor for beginners. Explain this code line by line in simple terms."</p>
        <br>
        <p>By assigning a role, you dramatically change the AI's response style, depth, and tone.</p>
        <p>Techniques: <strong>System Prompts</strong> · <strong>Role Assignment</strong> · <strong>Background Context</strong></p>
      `,
      exercises: [
        {
          id: "3-1",
          type: "ROLE MATCHING",
          question: "Match each GOAL on the left with the best ROLE to assign the AI on the right.",
          context: null,
          hint: "Think about what kind of expert would give the most helpful answer for each goal.",
          inputType: "matching",
          leftItems: [
            { id: "l1", text: "Debug my Python code" },
            { id: "l2", text: "Write a persuasive email" },
            { id: "l3", text: "Explain a medical condition" },
            { id: "l4", text: "Plan a birthday party" }
          ],
          rightItems: [
            { id: "r1", text: "Act as a friendly doctor" },
            { id: "r2", text: "Act as a senior software engineer" },
            { id: "r3", text: "Act as a professional copywriter" },
            { id: "r4", text: "Act as a creative event planner" }
          ],
          correctPairs: { "l1": "r2", "l2": "r3", "l3": "r1", "l4": "r4" },
          explanation: "Matching roles to tasks improves output quality massively. A software engineer debugs code, a copywriter writes persuasive text, a doctor explains medicine, and an event planner handles parties.",
          tip: "💡 Pro Tip: Start your prompt with 'You are a [role]...' to set the AI's expertise and tone."
        },
        {
          id: "3-2",
          type: "ADD THE CONTEXT",
          question: "This prompt is missing critical context. Rewrite it by adding a ROLE and BACKGROUND so the AI gives a better answer.",
          context: "Original prompt: \"Give me advice\"",
          hint: "Think: Who should the AI be? What is the situation? What kind of advice is needed?",
          inputType: "freetext",
          placeholder: "Write your context-rich prompt here...",
          keywords: ["you are", "act as", "context", "background", "as a", "your goal", "I am", "situation"],
          minLength: 40,
          explanation: "Example: 'You are a career coach with 10 years of experience. I am a recent graduate looking for my first job in marketing. Give me 5 practical tips to stand out during interviews.' — Role + context = great advice!",
          tip: "💡 Pro Tip: 'You are a [role]. [Situation]. [Request].' is a winning prompt formula!"
        },
        {
          id: "3-3",
          type: "SYSTEM PROMPT DESIGN",
          question: "Which system prompt would best configure an AI assistant for a customer support chatbot for a software company?",
          context: null,
          hint: "A system prompt defines the AI's personality, role, and boundaries.",
          inputType: "choice",
          choices: [
            { id: "a", text: "\"Answer all questions about everything\"" },
            { id: "b", text: "\"You are a helpful, professional customer support agent for TechCorp software. Help users with installation, bugs, and billing. Be polite, concise, and escalate complex issues to human agents.\"" },
            { id: "c", text: "\"Be nice\"" },
            { id: "d", text: "\"TechCorp support chatbot v1.0\"" }
          ],
          correct: "b",
          explanation: "Option B defines: the AI's role (customer support agent), company (TechCorp), scope (installation, bugs, billing), tone (polite, concise), and behavior rules (escalate complex issues). This is a complete system prompt!",
          tip: "💡 Pro Tip: System prompts should define ROLE + SCOPE + TONE + CONSTRAINTS for the best results."
        },
        {
          id: "3-4",
          type: "CONTEXT INJECTION",
          question: "Enhance this prompt by adding role, context, and constraints. The goal is to get useful feedback on a business plan.",
          context: "Bare prompt: \"Review my business plan\"",
          hint: "Who should the AI be? What should it focus on? What format? How critical should it be?",
          inputType: "freetext",
          placeholder: "Type your enhanced prompt...",
          keywords: ["you are", "act as", "investor", "expert", "mentor", "feedback", "focus", "strengths", "weakness", "improvement", "format"],
          minLength: 50,
          explanation: "Example: 'You are an experienced startup investor. Review my business plan below and provide: 3 key strengths, 3 major weaknesses, and 3 specific improvement suggestions. Be honest and direct.' — Role + task + format + tone!",
          tip: "💡 Pro Tip: Adding output format to prompts (bullet points, numbered lists, sections) organizes AI responses perfectly."
        }
      ]
    },

    // ─────────────────────────────────────────────────────
    // LEVEL 4 — Format Factory (corporate / clean)
    // ─────────────────────────────────────────────────────
    {
      id: 4,
      title: "Format Factory",
      subtitle: "Control output structure and precision",
      badge: "⚙️",
      completeBadge: "📋 Format Engineer",
      theme: "level-4",
      concept: `
        <h4>⚙️ Controlling Output Format</h4>
        <p>A well-engineered prompt doesn't just ask a question — it specifies exactly <strong>what format</strong> the answer should be in.</p>
        <p>Techniques covered:</p>
        <ul style="margin:8px 0 0 16px;">
          <li><strong>Output format instructions</strong> — JSON, bullet points, tables, numbered lists</li>
          <li><strong>Length control</strong> — word/sentence count, summary depth</li>
          <li><strong>Tone and style</strong> — formal, casual, technical, ELI5</li>
          <li><strong>Negative constraints</strong> — "Do NOT include..." / "Avoid..."</li>
        </ul>
      `,
      exercises: [
        {
          id: "4-1",
          type: "FORMAT SELECTION",
          question: "A developer wants an AI to return a list of 5 programming languages with: name, year created, and primary use case. Which prompt gets the right output format?",
          context: null,
          hint: "Developers often need structured, parseable data.",
          inputType: "choice",
          choices: [
            { id: "a", text: "\"Tell me about programming languages\"" },
            { id: "b", text: "\"List programming languages. Include details.\"" },
            { id: "c", text: "\"Return a JSON array of 5 programming languages. Each object must have: name (string), year_created (number), primary_use_case (string). No extra text.\"" },
            { id: "d", text: "\"What programming languages are there? Tell me everything about them.\"" }
          ],
          correct: "c",
          explanation: "Option C is precise: it specifies the format (JSON array), quantity (5), exact fields (name, year_created, primary_use_case), data types, and explicitly says 'No extra text'. This is production-grade prompt engineering!",
          tip: "💡 Pro Tip: When you need structured data from AI, always specify the format explicitly — JSON, XML, Markdown table, etc."
        },
        {
          id: "4-2",
          type: "ADD CONSTRAINTS",
          question: "Improve this prompt by adding format, length, tone, and constraint instructions.",
          context: "Original: \"Summarize this article about climate change\"",
          hint: "Think about: How long? What format? What tone? What to avoid?",
          inputType: "freetext",
          placeholder: "Write your format-controlled prompt...",
          keywords: ["bullet", "point", "word", "sentence", "format", "tone", "avoid", "do not", "without", "include", "summary", "table", "paragraph"],
          minLength: 45,
          explanation: "Example: 'Summarize the article about climate change in exactly 5 bullet points. Use a neutral, factual tone. Focus on causes and solutions. Do NOT include statistics or quotes. Each bullet should be one sentence.' — This gives the AI a precise working brief!",
          tip: "💡 Pro Tip: 'Do NOT...' constraints are just as important as positive instructions. They prevent unwanted content!"
        },
        {
          id: "4-3",
          type: "IDENTIFY THE TECHNIQUE",
          question: "Read this prompt and identify which formatting technique it uses.",
          context: "Prompt: \"Explain quantum computing. Use the following structure:\n1. One-sentence definition\n2. How it differs from classical computing (max 2 sentences)\n3. Three real-world applications (bullet list)\n4. One sentence on current limitations\"",
          hint: "What aspect of the output is being controlled here?",
          inputType: "choice",
          choices: [
            { id: "a", text: "Role assignment — telling AI who to be" },
            { id: "b", text: "Structured output templating — defining sections and lengths" },
            { id: "c", text: "Few-shot prompting — giving examples first" },
            { id: "d", text: "Chain-of-thought — asking AI to think step by step" }
          ],
          correct: "b",
          explanation: "This is 'Structured Output Templating' — defining numbered sections with specific length constraints for each. The AI follows the template like a writing brief. This technique produces consistent, predictable output.",
          tip: "💡 Pro Tip: Use structured templates when you need responses in consistent formats (reports, summaries, analysis)."
        },
        {
          id: "4-4",
          type: "PROMPT DESIGN",
          question: "Design a complete, format-engineered prompt that generates a weekly meeting agenda for a team of 5 developers.",
          context: null,
          hint: "Include: format (table/sections/bullets), required agenda items, time allocations, and tone.",
          inputType: "freetext",
          placeholder: "Design your structured prompt...",
          keywords: ["agenda", "meeting", "format", "bullet", "table", "time", "duration", "section", "item", "developer", "team", "include"],
          minLength: 60,
          explanation: "Example: 'Generate a weekly 1-hour team meeting agenda for 5 software developers. Format as a Markdown table with 3 columns: Time Slot, Topic, Owner. Include: Sprint Review (15 min), Bug Triage (15 min), New Feature Planning (20 min), Blockers & Help Needed (10 min). Use professional tone.' — Complete format brief!",
          tip: "💡 Pro Tip: For repeated tasks (weekly templates, reports), create a master prompt template you can reuse every time."
        }
      ]
    },

    // ─────────────────────────────────────────────────────
    // LEVEL 5 — AI Architect (cyberpunk / high-tech)
    // ─────────────────────────────────────────────────────
    {
      id: 5,
      title: "AI Architect",
      subtitle: "Master advanced techniques: few-shot, chain-of-thought & prompt chaining",
      badge: "🤖",
      completeBadge: "🏆 Certified Prompt Architect",
      theme: "level-5",
      concept: `
        <h4>⚡ Advanced Prompt Engineering</h4>
        <p>You've mastered the basics. Now enter the domain of <strong>Prompt Architecture</strong>.</p>
        <ul style="margin:8px 0 0 16px; line-height:2">
          <li><strong>Few-Shot Prompting</strong> — Give examples before the task to guide output style</li>
          <li><strong>Chain-of-Thought (CoT)</strong> — Ask the AI to "think step by step" for reasoning tasks</li>
          <li><strong>Prompt Chaining</strong> — Break complex tasks into a sequence of connected prompts</li>
          <li><strong>Temperature / Constraints</strong> — Control creativity vs. precision</li>
          <li><strong>Meta-prompting</strong> — Use AI to improve your own prompts</li>
        </ul>
      `,
      exercises: [
        {
          id: "5-1",
          type: "FEW-SHOT IDENTIFICATION",
          question: "Which of these prompts uses the Few-Shot technique correctly?",
          context: null,
          hint: "Few-shot means giving examples BEFORE the actual task.",
          inputType: "choice",
          choices: [
            { id: "a", text: "\"Classify the sentiment of this tweet: 'I love this product!'\"" },
            { id: "b", text: "\"You are a sentiment classifier. Be accurate.\"" },
            { id: "c", text: "\"Classify sentiment:\nTweet: 'This is amazing!' → Positive\nTweet: 'Terrible experience.' → Negative\nTweet: 'It was okay.' → Neutral\n\nNow classify: 'I can't believe how fast this shipped!'\"" },
            { id: "d", text: "\"List all possible sentiment categories for social media posts.\"" }
          ],
          correct: "c",
          explanation: "Option C shows the Few-Shot pattern: Provide labeled examples (3 here) then the actual task. The AI learns the pattern (format, classification style) from examples and applies it. This dramatically improves accuracy!",
          tip: "💡 Pro Tip: 3-5 examples is usually the sweet spot for few-shot prompting. Too few may not work; too many wastes tokens."
        },
        {
          id: "5-2",
          type: "CHAIN-OF-THOUGHT",
          question: "You need an AI to solve a complex logic problem accurately. Which prompt technique should you use?",
          context: "Task: 'A store has 3 shelves. Each shelf has 4 boxes. Each box has 6 items. 10 items were sold. How many items are left?'",
          hint: "Think about how adding a specific instruction about reasoning process changes output quality.",
          inputType: "choice",
          choices: [
            { id: "a", text: "\"Answer: How many items are left?\"" },
            { id: "b", text: "\"You are a mathematician. Solve this.\"" },
            { id: "c", text: "\"Solve this step by step. Show your reasoning for each calculation before giving the final answer.\"" },
            { id: "d", text: "\"Give me the answer in JSON format\"" }
          ],
          correct: "c",
          explanation: "Chain-of-Thought (CoT) — 'step by step' — forces the AI to reason through each calculation explicitly. This dramatically reduces errors in math, logic, and multi-step problems. Without CoT, AI often makes arithmetic mistakes.",
          tip: "💡 Pro Tip: Add 'Think step by step' or 'Show your reasoning' to ANY complex problem for better accuracy!"
        },
        {
          id: "5-3",
          type: "PROMPT CHAIN DESIGN",
          question: "You need to create a complete blog post about AI trends. Design a 3-step prompt chain by ordering these prompts correctly.",
          context: null,
          hint: "Think about logical order: research → structure → write.",
          inputType: "ordering",
          items: [
            { id: "a", text: "PROMPT 3: 'Using the outline above, write the full 500-word blog post with an engaging intro, 3 body sections, and a conclusion.'" },
            { id: "b", text: "PROMPT 1: 'List the top 5 AI trends in 2025 with a one-sentence description of each. Focus on practical business impact.'" },
            { id: "c", text: "PROMPT 2: 'Using the 5 trends above, create a detailed outline for a blog post. Include: title, intro hook idea, 3 main sections with subpoints, and conclusion.'" }
          ],
          correctOrder: ["b", "c", "a"],
          explanation: "Prompt Chaining breaks complex tasks into stages: (1) Research/collect data → (2) Structure/plan → (3) Execute/write. Each prompt uses the previous output as context. This produces far better results than one massive prompt!",
          tip: "💡 Pro Tip: Prompt chaining is essential for tasks over ~1000 words or multi-step workflows. Think: Plan → Draft → Refine."
        },
        {
          id: "5-4",
          type: "META-PROMPTING",
          question: "Write a meta-prompt — a prompt that asks the AI to help you improve another prompt. Target prompt to improve: 'Write a marketing email'",
          context: "A meta-prompt uses the AI's own knowledge to improve your prompting strategy.",
          hint: "Ask the AI to analyze the weak prompt and generate an improved version with reason. Use techniques: role, format, constraints.",
          inputType: "freetext",
          placeholder: "// Design your meta-prompt here...",
          keywords: ["improve", "prompt", "rewrite", "better", "specific", "role", "context", "format", "technique", "engineer", "optimize", "enhance"],
          minLength: 60,
          explanation: "Example meta-prompt: 'You are an expert prompt engineer. The following prompt is weak: \"Write a marketing email\". Identify 3 specific weaknesses in this prompt, then rewrite it as a high-quality prompt using: role assignment, specific context, output format, and tone constraints. Show the improved prompt and explain each improvement.' This is the highest level of prompt engineering!",
          tip: "💡 Pro Tip: Meta-prompting is recursive intelligence — using AI to get better at using AI. It's one of the most powerful techniques in production systems."
        }
      ]
    }
  ]
};

// ============================================================
// GAME STATE
// ============================================================
const GameState = {
  currentLevel: 0,
  currentExercise: 0,
  score: 0,
  totalScore: 0,
  badges: [],
  selectedChoice: null,
  matchingState: { selected: null, pairs: {} },
  hintUsed: false,
  answers: {},
  playerName: 'Player',
  levelStartTime: 0,      // ms timestamp when level timer started
  levelElapsed: 0,        // accumulated ms for current level
  timerInterval: null,    // setInterval handle
  levelTimes: [],         // array of elapsed ms per level
  pollInterval: null      // setInterval handle for scoreboard live updates
};

// ============================================================
// SCOREBOARD STORAGE
// — Primary:  REST API via server.js (multi-user, shared)
// — Fallback: localStorage (single-device / file:// mode)
// ============================================================
const Scoreboard = {
  _lsKey: 'pq_scores',
  _online: null,          // null = unknown

  // ── API availability check (once per session) ──────────
  async _isOnline() {
    if (this._online !== null) return this._online;
    if (window.location.protocol === 'file:') { this._online = false; return false; }
    try {
      const ctrl = new AbortController();
      const tid  = setTimeout(() => ctrl.abort(), 2500);
      const r    = await fetch('/api/scores/1', { signal: ctrl.signal });
      clearTimeout(tid);
      this._online = r.ok || r.status === 200;
    } catch { this._online = false; }
    return this._online;
  },

  // ── Public API (async) ────────────────────────────────
  async saveLevel(levelId, name, score, timeMs) {
    if (await this._isOnline()) {
      try {
        const r = await fetch(`/api/scores/${levelId}`, {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify({ name, score, timeMs })
        });
        if (r.ok) return await r.json();
      } catch {}
    }
    return this._lsSave(levelId, name, score, timeMs);
  },

  async getLevel(levelId) {
    if (await this._isOnline()) {
      try {
        const r = await fetch(`/api/scores/${levelId}`);
        if (r.ok) return await r.json();
      } catch {}
    }
    return this._lsGet(levelId);
  },

  async getOverall() {
    if (await this._isOnline()) {
      try {
        const r = await fetch('/api/scores/overall');
        if (r.ok) return await r.json();
      } catch {}
    }
    return this._lsOverall();
  },

  // ── localStorage fallback ────────────────────────────
  _lsLoad() {
    try { return JSON.parse(localStorage.getItem(this._lsKey)) || {}; }
    catch { return {}; }
  },
  _lsSave(levelId, name, score, timeMs) {
    const all = this._lsLoad();
    if (!all[levelId]) all[levelId] = [];
    all[levelId].push({ name, score, timeMs, date: Date.now() });
    all[levelId].sort((a, b) => b.score - a.score || a.timeMs - b.timeMs);
    try { localStorage.setItem(this._lsKey, JSON.stringify(all)); } catch {}
    return all[levelId];
  },
  _lsGet(levelId) {
    const all = this._lsLoad();
    return [...(all[levelId] || [])].sort((a, b) => b.score - a.score || a.timeMs - b.timeMs);
  },
  _lsOverall() {
    const all  = this._lsLoad();
    const best = {};
    Object.keys(all).forEach(lid => {
      const seen = {};
      all[lid].forEach(e => {
        const k = e.name + '\x00' + lid;
        if (!seen[k] || e.score > seen[k].score ||
            (e.score === seen[k].score && e.timeMs < seen[k].timeMs)) seen[k] = e;
      });
      Object.values(seen).forEach(e => {
        if (!best[e.name]) best[e.name] = { name: e.name, totalScore: 0, totalTimeMs: 0 };
        best[e.name].totalScore  += e.score;
        best[e.name].totalTimeMs += e.timeMs;
      });
    });
    return Object.values(best).sort((a, b) => b.totalScore - a.totalScore || a.totalTimeMs - b.totalTimeMs);
  }
};

// ============================================================
// TIMER
// ============================================================
const Timer = {
  start() {
    GameState.levelStartTime = Date.now();
    GameState.levelElapsed = 0;
    clearInterval(GameState.timerInterval);
    GameState.timerInterval = setInterval(() => {
      const elapsed = Date.now() - GameState.levelStartTime;
      const totalMs = elapsed;
      const secs = Math.floor(totalMs / 1000);
      const mins = Math.floor(secs / 60);
      const ss = String(secs % 60).padStart(2, '0');
      const el = document.getElementById('timer-display');
      if (el) el.textContent = `⏱ ${mins}:${ss}`;
      GameState.levelElapsed = totalMs;
    }, 500);
  },

  stop() {
    clearInterval(GameState.timerInterval);
    GameState.timerInterval = null;
    GameState.levelElapsed = Date.now() - GameState.levelStartTime;
    return GameState.levelElapsed;
  },

  format(ms) {
    const secs = Math.floor(ms / 1000);
    const mins = Math.floor(secs / 60);
    const ss = String(secs % 60).padStart(2, '0');
    return `${mins}:${ss}`;
  }
};

// ============================================================
// MUSIC ENGINE  (Web Audio API — procedural, no files needed)
// Each level has a distinct generative music style
// ============================================================
const MusicEngine = {
  ctx: null,
  masterGain: null,
  enabled: true,
  currentLevel: null,
  schedulers: [],     // handles returned by setInterval/setTimeout
  oscillators: [],    // active oscillators to stop

  sfxGain: null,

  _ctx() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.18;
      this.masterGain.connect(this.ctx.destination);
      // Separate gain bus for SFX — louder than music
      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.value = 0.55;
      this.sfxGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
    return this.ctx;
  },

  toggle() {
    this.enabled = !this.enabled;
    document.getElementById('music-toggle').textContent = this.enabled ? '🔊' : '🔇';
    if (this.masterGain) this.masterGain.gain.value = this.enabled ? 0.18 : 0;
    if (this.sfxGain)    this.sfxGain.gain.value    = this.enabled ? 0.55 : 0;
    if (this.enabled && this.currentLevel !== null) {
      this.play(this.currentLevel);
    } else if (!this.enabled) {
      this._stopAll();
    }
  },

  play(levelIndex) {
    this._stopAll();
    this.currentLevel = levelIndex;
    if (!this.enabled) return;
    const ctx = this._ctx();
    // Level theme 0→4
    [
      this._playLevel1.bind(this),
      this._playLevel2.bind(this),
      this._playLevel3.bind(this),
      this._playLevel4.bind(this),
      this._playLevel5.bind(this)
    ][levelIndex]?.(ctx);
  },

  _stopAll() {
    this.schedulers.forEach(h => clearInterval(h));
    this.schedulers = [];
    this.oscillators.forEach(o => { try { o.stop(); } catch {} });
    this.oscillators = [];
  },

  _note(ctx, freq, start, dur, type = 'sine', gainVal = 0.22) {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, start);
    g.gain.setValueAtTime(0, start);
    g.gain.linearRampToValueAtTime(gainVal, start + 0.02);
    g.gain.linearRampToValueAtTime(0, start + dur);
    osc.connect(g);
    g.connect(this.masterGain);
    osc.start(start);
    osc.stop(start + dur + 0.05);
    this.oscillators.push(osc);
  },

  // ── Level 1: Playful xylophone melody (C major, bouncy)
  _playLevel1(ctx) {
    const scale = [261.63, 293.66, 329.63, 349.23, 392, 440, 493.88, 523.25]; // C major
    const melody = [0, 2, 4, 7, 4, 2, 0, 2, 4, 5, 4, 2, 3, 2, 0, -1];
    const beatMs = 320;
    let step = 0;

    const tick = () => {
      const now = ctx.currentTime;
      const idx = ((melody[step % melody.length] + 8) % 8);
      const freq = scale[Math.max(0, Math.min(7, idx))];
      this._note(ctx, freq, now, 0.25, 'triangle', 0.25);
      // add a little harmony
      if (step % 4 === 0) this._note(ctx, freq * 0.5, now, 0.4, 'sine', 0.1);
      step++;
    };
    tick();
    this.schedulers.push(setInterval(tick, beatMs));

    // Kick drum (low thud)
    const kick = () => {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.frequency.setValueAtTime(120, now);
      osc.frequency.exponentialRampToValueAtTime(30, now + 0.15);
      g.gain.setValueAtTime(0.4, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.connect(g); g.connect(this.masterGain);
      osc.start(now); osc.stop(now + 0.16);
      this.oscillators.push(osc);
    };
    this.schedulers.push(setInterval(kick, beatMs * 2));
  },

  // ── Level 2: Adventure fanfare (G major, upbeat)
  _playLevel2(ctx) {
    const phrases = [
      [392, 440, 493.88, 523.25],
      [523.25, 493.88, 440, 392],
      [349.23, 392, 440, 392]
    ];
    let phrase = 0, note = 0;
    const beatMs = 280;

    const tick = () => {
      const now = ctx.currentTime;
      const freq = phrases[phrase % phrases.length][note % 4];
      this._note(ctx, freq, now, 0.22, 'square', 0.15);
      this._note(ctx, freq * 1.5, now, 0.18, 'sine', 0.08);
      note++;
      if (note % 4 === 0) phrase++;
    };
    tick();
    this.schedulers.push(setInterval(tick, beatMs));

    // Arpeggiated chord base
    const chord = [196, 247, 294];
    let ci = 0;
    const arpTick = () => {
      const now = ctx.currentTime;
      this._note(ctx, chord[ci % chord.length], now, 0.35, 'sine', 0.12);
      ci++;
    };
    this.schedulers.push(setInterval(arpTick, beatMs * 1.5));
  },

  // ── Level 3: Dark fantasy — minor scale, haunting pads
  _playLevel3(ctx) {
    const minor = [130.81, 155.56, 174.61, 196, 220, 233.08, 261.63]; // C natural minor
    const melody3 = [0, 2, 3, 5, 4, 2, 0, 1, 3, 4, 2, 0];
    let step = 0;
    const beatMs = 480;

    // Pad drone
    [130.81, 196, 261.63].forEach(freq => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.value = freq;
      g.gain.value = 0.04;
      const filt = ctx.createBiquadFilter();
      filt.type = 'lowpass';
      filt.frequency.value = 600;
      osc.connect(filt); filt.connect(g); g.connect(this.masterGain);
      osc.start();
      this.oscillators.push(osc);
    });

    const tick = () => {
      const now = ctx.currentTime;
      const idx = minor.length > 0 ? (melody3[step % melody3.length]) % minor.length : 0;
      const freq = minor[Math.abs(idx)];
      this._note(ctx, freq * 2, now, 0.38, 'sine', 0.18);
      step++;
    };
    tick();
    this.schedulers.push(setInterval(tick, beatMs));
  },

  // ── Level 4: Corporate — clean, minimalist, syncopated clicks
  _playLevel4(ctx) {
    const pentatonic = [261.63, 293.66, 329.63, 392, 440, 523.25];
    let step = 0;
    const pattern = [0, null, 2, null, 1, 3, null, 2, 0, null, 4, null, 3, 1, null, 0];
    const beatMs = 220;

    const tick = () => {
      const now = ctx.currentTime;
      const p = pattern[step % pattern.length];
      if (p !== null) {
        const freq = pentatonic[p % pentatonic.length];
        this._note(ctx, freq, now, 0.12, 'sine', 0.2);
        // Click
        const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.02), ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
        const src = ctx.createBufferSource();
        src.buffer = buf;
        const g = ctx.createGain(); g.gain.value = 0.07;
        src.connect(g); g.connect(this.masterGain);
        src.start(now);
      }
      step++;
    };
    tick();
    this.schedulers.push(setInterval(tick, beatMs));

    // Bass pulse
    const bassTick = () => {
      const now = ctx.currentTime;
      this._note(ctx, 55, now, 0.18, 'sawtooth', 0.12);
    };
    this.schedulers.push(setInterval(bassTick, beatMs * 4));
  },

  // ── Level 5: Cyberpunk — arpeggio, glitchy noise, 8-bit bass
  _playLevel5(ctx) {
    const arpNotes = [110, 146.83, 164.81, 220, 293.66, 329.63, 220, 164.81];
    let step = 0;
    const beatMs = 160;

    const tick = () => {
      const now = ctx.currentTime;
      const freq = arpNotes[step % arpNotes.length];
      this._note(ctx, freq, now, 0.13, 'sawtooth', 0.16);
      this._note(ctx, freq * 2, now, 0.08, 'square', 0.06);
      // Glitch noise burst on every 8 beats
      if (step % 8 === 0) {
        const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.04), ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
        const src = ctx.createBufferSource();
        src.buffer = buf;
        const filt = ctx.createBiquadFilter(); filt.type = 'bandpass'; filt.frequency.value = 2000;
        const g = ctx.createGain(); g.gain.value = 0.04;
        src.connect(filt); filt.connect(g); g.connect(this.masterGain);
        src.start(now);
      }
      step++;
    };
    tick();
    this.schedulers.push(setInterval(tick, beatMs));

    // Hi-hat (white noise burst)
    const hatTick = () => {
      const now = ctx.currentTime;
      const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.05), ctx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
      const src = ctx.createBufferSource();
      src.buffer = buf;
      const filt = ctx.createBiquadFilter(); filt.type = 'highpass'; filt.frequency.value = 8000;
      const g = ctx.createGain(); g.gain.value = 0.06;
      src.connect(filt); filt.connect(g); g.connect(this.masterGain);
      src.start(now);
    };
    this.schedulers.push(setInterval(hatTick, beatMs * 2));

    // Sub bass pulse
    const subTick = () => {
      const now = ctx.currentTime;
      this._note(ctx, 55, now, 0.14, 'square', 0.18);
    };
    this.schedulers.push(setInterval(subTick, beatMs * 4));
  }
};


// ============================================================
// SOUND ENGINE — Themed correct / wrong SFX via Web Audio API
// ============================================================
const SoundEngine = {
  _g() { return MusicEngine.sfxGain || MusicEngine._ctx() && MusicEngine.sfxGain; },
  _ctx() { return MusicEngine._ctx(); },

  _note(freq, start, dur, type = 'sine', gain = 0.35) {
    const ctx = this._ctx(); if (!ctx) return;
    const osc = ctx.createOscillator();
    const g   = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, start);
    g.gain.setValueAtTime(0, start);
    g.gain.linearRampToValueAtTime(gain, start + 0.01);
    g.gain.exponentialRampToValueAtTime(0.001, start + dur);
    osc.connect(g); g.connect(this._g());
    osc.start(start); osc.stop(start + dur + 0.05);
  },

  _noise(start, dur, gainVal, hipass = 0) {
    const ctx = this._ctx(); if (!ctx) return;
    const buf  = ctx.createBuffer(1, Math.floor(ctx.sampleRate * dur), ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
    const src  = ctx.createBufferSource(); src.buffer = buf;
    const gl   = ctx.createGain(); gl.gain.value = gainVal;
    if (hipass > 0) {
      const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = hipass;
      src.connect(f); f.connect(gl);
    } else { src.connect(gl); }
    gl.connect(this._g()); src.start(start);
  },

  playCorrect(levelIndex) {
    if (!MusicEngine.enabled) return;
    const ctx = this._ctx(); if (!ctx) return;
    const now = ctx.currentTime;
    switch (levelIndex) {
      case 0: // 🌈 Childish — bouncy ascending xylophone arpeggio
        [261.63, 329.63, 392, 523.25, 659.26].forEach((f, i) =>
          this._note(f, now + i * 0.08, 0.28, 'triangle', 0.45));
        break;

      case 1: // ⚔️ Adventure — triumphant 4-note fanfare
        [392, 523.25, 659.26, 783.99].forEach((f, i) =>
          this._note(f, now + i * 0.1, 0.22, 'square', 0.28));
        this._note(783.99, now + 0.4, 0.4, 'square', 0.25);
        break;

      case 2: // 🔮 Fantasy — magical shimmer bells
        [1046.5, 1318.5, 1567.98, 2093].forEach((f, i) => {
          this._note(f,       now + i * 0.06, 0.5, 'sine', 0.3);
          this._note(f * 0.5, now + i * 0.06, 0.5, 'sine', 0.12);
        });
        break;

      case 3: // ⚙️ Corporate — clean double notification ping
        this._note(1046.5, now,        0.12, 'sine', 0.4);
        this._note(1318.5, now + 0.14, 0.35, 'sine', 0.32);
        break;

      case 4: // 🤖 Cyberpunk — synth sweep + digital stutter
        { const osc = ctx.createOscillator(), g = ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(220, now);
          osc.frequency.exponentialRampToValueAtTime(880, now + 0.28);
          g.gain.setValueAtTime(0.32, now);
          g.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
          osc.connect(g); g.connect(this._g()); osc.start(now); osc.stop(now + 0.35);
        }
        [0, 0.14, 0.22, 0.28].forEach(t => this._note(880, now + t, 0.04, 'square', 0.12));
        this._noise(now, 0.06, 0.08, 6000);
        break;
    }
  },

  playWrong(levelIndex) {
    if (!MusicEngine.enabled) return;
    const ctx = this._ctx(); if (!ctx) return;
    const now = ctx.currentTime;
    switch (levelIndex) {
      case 0: // 🌈 Childish — sad descending wah-wah
        [392, 349.23, 311.13, 261.63].forEach((f, i) =>
          this._note(f, now + i * 0.16, 0.22, 'sine', 0.38));
        break;

      case 1: // ⚔️ Adventure — trombone slide down
        { const osc = ctx.createOscillator(), g = ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(233, now);
          osc.frequency.linearRampToValueAtTime(110, now + 0.65);
          g.gain.setValueAtTime(0.32, now);
          g.gain.linearRampToValueAtTime(0.001, now + 0.7);
          osc.connect(g); g.connect(this._g()); osc.start(now); osc.stop(now + 0.72);
        }
        break;

      case 2: // 🔮 Fantasy — dark impact + low rumble
        this._note(55,    now,        0.55, 'sine',     0.45);
        this._note(73.42, now + 0.05, 0.4,  'sawtooth', 0.15);
        this._noise(now, 0.25, 0.25);
        break;

      case 3: // ⚙️ Corporate — two error buzzes
        [now, now + 0.22].forEach(t => this._note(110, t, 0.14, 'square', 0.32));
        break;

      case 4: // 🤖 Cyberpunk — glitch noise + descending saw
        this._noise(now, 0.35, 0.18, 800);
        { const osc = ctx.createOscillator(), g = ctx.createGain();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(440, now);
          osc.frequency.exponentialRampToValueAtTime(40, now + 0.45);
          g.gain.setValueAtTime(0.28, now);
          g.gain.exponentialRampToValueAtTime(0.001, now + 0.48);
          osc.connect(g); g.connect(this._g()); osc.start(now); osc.stop(now + 0.5);
        }
        break;
    }
  }
};

// ============================================================
// UTILITY HELPERS
// ============================================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none';
  });
  const el = document.getElementById(id);
  el.style.display = 'flex';
  void el.offsetWidth;
  el.classList.add('active');
}

function setTheme(levelClass) {
  document.body.className = document.body.className
    .replace(/level-\d/g, '').trim();
  if (levelClass) document.body.classList.add(levelClass);
}

function starRating(correct, total) {
  const pct = correct / total;
  if (pct >= 0.9) return '⭐⭐⭐';
  if (pct >= 0.6) return '⭐⭐';
  return '⭐';
}

// Escape HTML to prevent XSS when rendering user-supplied names in scoreboard
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Simple keyword check for freetext (case-insensitive)
function checkFreeText(answer, exercise) {
  const lower = answer.toLowerCase();
  const minMet = answer.length >= (exercise.minLength || 20);
  const keywordHits = (exercise.keywords || []).filter(k => lower.includes(k.toLowerCase())).length;
  // Need min length + at least 2 keyword matches
  return minMet && keywordHits >= 2;
}

// ============================================================
// DRAG & DROP for ordering exercises
// ============================================================
let dragSrc = null;

function initDragDrop(list) {
  const items = list.querySelectorAll('.order-item');
  items.forEach(item => {
    item.addEventListener('dragstart', e => {
      dragSrc = item;
      e.dataTransfer.effectAllowed = 'move';
      item.classList.add('dragging');
    });
    item.addEventListener('dragend', () => {
      item.classList.remove('dragging');
      dragSrc = null;
    });
    item.addEventListener('dragover', e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    });
    item.addEventListener('drop', e => {
      e.stopPropagation();
      if (dragSrc !== item) {
        const allItems = [...list.querySelectorAll('.order-item')];
        const srcIdx = allItems.indexOf(dragSrc);
        const dstIdx = allItems.indexOf(item);
        if (srcIdx < dstIdx) {
          list.insertBefore(dragSrc, item.nextSibling);
        } else {
          list.insertBefore(dragSrc, item);
        }
      }
    });
  });
}

// ============================================================
// MAIN GAME ENGINE
// ============================================================
const GameEngine = {

  startGame() {
    // Read player name
    const nameInput = document.getElementById('player-name-input');
    const raw = nameInput ? nameInput.value.trim() : '';
    GameState.playerName = raw.length > 0 ? raw.slice(0, 24) : 'Player';

    GameState.currentLevel = 0;
    GameState.score = 0;
    GameState.totalScore = 0;
    GameState.badges = [];
    GameState.answers = {};
    GameState.levelTimes = [];
    setTheme('level-1');
    this.showLevelIntro();
  },

  restartGame() {
    this._stopPolling();
    MusicEngine._stopAll();
    setTheme('');
    showScreen('screen-welcome');
    document.body.className = '';
  },

  showLevelIntro() {
    const level = GAME_DATA.levels[GameState.currentLevel];
    document.getElementById('intro-badge').textContent = level.badge;
    document.getElementById('intro-title').textContent = `Level ${level.id}: ${level.title}`;
    document.getElementById('intro-subtitle').textContent = level.subtitle;
    document.getElementById('intro-concept').innerHTML = level.concept;
    setTheme(level.theme);
    MusicEngine.play(GameState.currentLevel);
    showScreen('screen-level-intro');
  },

  startLevel() {
    GameState.currentExercise = 0;
    GameState.score = 0;
    GameState.answers = {};
    GameState.hintUsed = false;
    Timer.start();
    this.renderExercise();
  },

  renderExercise() {
    const level = GAME_DATA.levels[GameState.currentLevel];
    const exercise = level.exercises[GameState.currentExercise];
    GameState.selectedChoice = null;
    GameState.hintUsed = false;
    GameState.matchingState = { selected: null, pairs: {} };

    // Header
    document.getElementById('level-label').textContent = `Level ${level.id}: ${level.title}`;
    document.getElementById('exercise-counter').textContent =
      `Exercise ${GameState.currentExercise + 1} / ${level.exercises.length}`;
    document.getElementById('score-display').textContent = `⭐ ${GameState.totalScore}`;

    const totalEx = GAME_DATA.levels.reduce((sum, l) => sum + l.exercises.length, 0);
    const doneEx = GAME_DATA.levels.slice(0, GameState.currentLevel).reduce((s, l) => s + l.exercises.length, 0)
      + GameState.currentExercise;
    document.getElementById('progress-bar').style.width = `${(doneEx / totalEx) * 100}%`;

    // Exercise card
    document.getElementById('exercise-type-badge').textContent = exercise.type;
    document.getElementById('exercise-question').textContent = exercise.question;

    const ctxEl = document.getElementById('exercise-context');
    if (exercise.context) {
      ctxEl.textContent = exercise.context;
      ctxEl.classList.remove('hidden');
    } else {
      ctxEl.classList.add('hidden');
    }

    // Hint
    document.getElementById('exercise-hint').classList.add('hidden');
    document.getElementById('exercise-hint').textContent = '';

    // Input area
    const inputArea = document.getElementById('exercise-input-area');
    inputArea.innerHTML = '';

    if (exercise.inputType === 'choice') {
      const grid = document.createElement('div');
      grid.className = 'choice-grid';
      exercise.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = choice.text;
        btn.dataset.id = choice.id;
        btn.addEventListener('click', () => {
          grid.querySelectorAll('.choice-btn').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          GameState.selectedChoice = choice.id;
        });
        grid.appendChild(btn);
      });
      inputArea.appendChild(grid);

    } else if (exercise.inputType === 'freetext') {
      const label = document.createElement('div');
      label.className = 'rewrite-label';
      label.textContent = 'Your Prompt:';
      const ta = document.createElement('textarea');
      ta.className = 'prompt-input';
      ta.placeholder = exercise.placeholder || 'Type your prompt here...';
      ta.id = 'freetext-input';
      inputArea.appendChild(label);
      inputArea.appendChild(ta);

    } else if (exercise.inputType === 'ordering') {
      const ul = document.createElement('ul');
      ul.className = 'order-list';
      ul.id = 'order-list';
      // Shuffle items for display
      const shuffled = [...exercise.items].sort(() => Math.random() - 0.5);
      shuffled.forEach(item => {
        const li = document.createElement('li');
        li.className = 'order-item';
        li.draggable = true;
        li.dataset.id = item.id;
        li.innerHTML = `<span class="drag-handle">⠿</span><span>${item.text}</span>`;
        ul.appendChild(li);
      });
      inputArea.appendChild(ul);
      initDragDrop(ul);
      const hint2 = document.createElement('p');
      hint2.style.cssText = 'font-size:0.8rem;color:var(--text-light);margin-bottom:12px;';
      hint2.textContent = '↕ Drag items to reorder them';
      inputArea.insertBefore(hint2, ul);

    } else if (exercise.inputType === 'matching') {
      this.renderMatching(exercise, inputArea);
    }

    showScreen('screen-exercise');
  },

  renderMatching(exercise, container) {
    const grid = document.createElement('div');
    grid.className = 'match-grid';

    // Left column
    const leftCol = document.createElement('div');
    const leftLabel = document.createElement('div');
    leftLabel.className = 'match-col-label';
    leftLabel.textContent = 'Goals';
    leftCol.appendChild(leftLabel);
    exercise.leftItems.forEach(item => {
      const div = document.createElement('div');
      div.className = 'match-item';
      div.dataset.id = item.id;
      div.dataset.side = 'left';
      div.textContent = item.text;
      div.addEventListener('click', () => this.handleMatchClick(div, 'left'));
      leftCol.appendChild(div);
    });

    // Right column
    const rightCol = document.createElement('div');
    const rightLabel = document.createElement('div');
    rightLabel.className = 'match-col-label';
    rightLabel.textContent = 'AI Roles';
    rightCol.appendChild(rightLabel);
    exercise.rightItems.forEach(item => {
      const div = document.createElement('div');
      div.className = 'match-item';
      div.dataset.id = item.id;
      div.dataset.side = 'right';
      div.textContent = item.text;
      div.addEventListener('click', () => this.handleMatchClick(div, 'right'));
      rightCol.appendChild(div);
    });

    grid.appendChild(leftCol);
    grid.appendChild(rightCol);
    container.appendChild(grid);
  },

  handleMatchClick(div, side) {
    const ms = GameState.matchingState;
    if (div.classList.contains('matched')) return;

    if (side === 'left') {
      // Deselect previous left
      document.querySelectorAll('.match-item[data-side="left"]').forEach(el => el.classList.remove('selected'));
      div.classList.add('selected');
      ms.selected = div.dataset.id;
    } else {
      // Right side — try to pair
      if (!ms.selected) return;
      const leftId = ms.selected;
      const rightId = div.dataset.id;
      ms.pairs[leftId] = rightId;

      // Mark visually
      const leftEl = document.querySelector(`.match-item[data-id="${leftId}"]`);
      leftEl.classList.remove('selected');
      leftEl.classList.add('matched');
      div.classList.add('matched');
      ms.selected = null;
    }
  },

  showHint() {
    const level = GAME_DATA.levels[GameState.currentLevel];
    const exercise = level.exercises[GameState.currentExercise];
    const hintEl = document.getElementById('exercise-hint');
    hintEl.textContent = `💡 ${exercise.hint}`;
    hintEl.classList.remove('hidden');
    GameState.hintUsed = true;
  },

  submitAnswer() {
    const level = GAME_DATA.levels[GameState.currentLevel];
    const exercise = level.exercises[GameState.currentExercise];
    let isCorrect = false;
    let userAnswer = '';

    if (exercise.inputType === 'choice') {
      if (!GameState.selectedChoice) {
        alert('Please select an answer!');
        return;
      }
      isCorrect = GameState.selectedChoice === exercise.correct;
      userAnswer = GameState.selectedChoice;

    } else if (exercise.inputType === 'freetext') {
      const ta = document.getElementById('freetext-input');
      userAnswer = ta ? ta.value.trim() : '';
      if (userAnswer.length < 10) {
        alert('Please write your prompt first!');
        return;
      }
      isCorrect = checkFreeText(userAnswer, exercise);

    } else if (exercise.inputType === 'ordering') {
      const list = document.getElementById('order-list');
      if (!list) return;
      const order = [...list.querySelectorAll('.order-item')].map(li => li.dataset.id);
      isCorrect = JSON.stringify(order) === JSON.stringify(exercise.correctOrder);
      userAnswer = order.join(',');

    } else if (exercise.inputType === 'matching') {
      const ms = GameState.matchingState;
      const correct = exercise.correctPairs;
      const allMatched = Object.keys(correct).every(k => ms.pairs[k] === correct[k]);
      const allPaired = Object.keys(ms.pairs).length === Object.keys(correct).length;
      if (!allPaired) {
        alert('Please match all items!');
        return;
      }
      isCorrect = allMatched;
    }

    // Score
    const points = isCorrect ? (GameState.hintUsed ? 5 : 10) : 0;
    GameState.score += points;
    GameState.totalScore += points;
    GameState.answers[GameState.currentExercise] = isCorrect;

    // Play themed sound effect
    if (isCorrect) SoundEngine.playCorrect(GameState.currentLevel);
    else           SoundEngine.playWrong(GameState.currentLevel);

    this.showFeedback(isCorrect, exercise, points);
  },

  showFeedback(isCorrect, exercise, points) {
    const icons = isCorrect
      ? ['🎉', '⭐', '🚀', '✨', '🏆'][Math.floor(Math.random() * 5)]
      : ['💪', '🤔', '📚', '🔄'][Math.floor(Math.random() * 4)];

    document.getElementById('feedback-icon').textContent = icons;
    document.getElementById('feedback-title').textContent = isCorrect
      ? ['Excellent!', 'Perfect!', 'Brilliant!', 'Nailed it!', 'Outstanding!'][Math.floor(Math.random() * 5)]
      : ['Not quite...', 'Good try!', 'Almost there!', 'Keep going!'][Math.floor(Math.random() * 4)];

    document.getElementById('feedback-message').textContent = isCorrect
      ? `You earned ${points} point${points !== 1 ? 's' : ''}! ${GameState.hintUsed ? '(Hint used — 5pts)' : ''}`
      : "Don't worry — the explanation below will help you master this concept.";

    const expEl = document.getElementById('feedback-explanation');
    expEl.innerHTML = `<strong>📖 Explanation:</strong><br>${exercise.explanation}`;
    expEl.classList.remove('hidden');

    document.getElementById('feedback-tip').textContent = exercise.tip || '';

    showScreen('screen-feedback');
  },

  nextExercise() {
    const level = GAME_DATA.levels[GameState.currentLevel];
    GameState.currentExercise++;

    if (GameState.currentExercise >= level.exercises.length) {
      this.showLevelComplete();
    } else {
      this.renderExercise();
    }
  },

  async showLevelComplete() {
    const level = GAME_DATA.levels[GameState.currentLevel];
    const correct = level.exercises.filter((_, i) => GameState.answers && GameState.answers[i]).length;
    const timeMs = Timer.stop();
    GameState.levelTimes.push(timeMs);

    document.getElementById('complete-badge').textContent = level.badge;
    document.getElementById('complete-title').textContent = `Level ${level.id} Complete!`;
    document.getElementById('complete-summary').textContent =
      `You've mastered "${level.title}"! Score: ${GameState.score} pts · Time: ${Timer.format(timeMs)}`;
    document.getElementById('complete-stars').textContent = starRating(correct, level.exercises.length);
    document.getElementById('complete-badge-earned').innerHTML =
      `🏅 Badge Earned: <strong>${level.completeBadge}</strong>`;

    GameState.badges.push(level.completeBadge);

    // Save and render level scoreboard
    const updated = await Scoreboard.saveLevel(level.id, GameState.playerName, GameState.score, timeMs);
    const online  = await Scoreboard._isOnline();
    document.getElementById('sb-level-title').innerHTML =
      `🏆 Level ${level.id} Scoreboard${online ? ' <span class="sb-live-dot">● LIVE</span>' : ''}`;
    this._renderScoreboardTable('level-scoreboard-body', updated, GameState.playerName, false);

    showScreen('screen-level-complete');

    // Live polling — refresh every 5s while on this screen
    clearInterval(GameState.pollInterval);
    GameState.pollInterval = setInterval(async () => {
      const live = await Scoreboard.getLevel(level.id);
      this._renderScoreboardTable('level-scoreboard-body', live, GameState.playerName, false);
    }, 5000);
  },

  _stopPolling() {
    clearInterval(GameState.pollInterval);
    GameState.pollInterval = null;
  },

  nextLevel() {
    this._stopPolling();
    GameState.currentLevel++;
    if (GameState.currentLevel >= GAME_DATA.levels.length) {
      this.showGameComplete();
    } else {
      setTheme(GAME_DATA.levels[GameState.currentLevel].theme);
      MusicEngine.play(GameState.currentLevel);
      this.showLevelIntro();
    }
  },

  async showGameComplete() {
    setTheme('level-5');
    MusicEngine.play(4);

    document.getElementById('final-title').textContent = '🏆 Prompt Engineer Certified!';
    document.getElementById('final-message').textContent =
      `Amazing work, ${GameState.playerName}! You completed all 5 levels with a total score of ${GameState.totalScore} points.`;

    document.getElementById('final-badges').innerHTML =
      GameState.badges.map(b => `<span title="${b}">🏅</span>`).join('');

    const totalTime = GameState.levelTimes.reduce((s, t) => s + t, 0);
    document.getElementById('final-score').textContent =
      `Total Score: ${GameState.totalScore} pts ⭐  ·  Total Time: ${Timer.format(totalTime)}`;

    const takeaways = [
      '📌 A prompt is your message to the AI — clarity is everything.',
      '🎯 Be specific: include What, How, For Whom in every prompt.',
      '🎭 Assign roles: "You are a [expert]..." dramatically improves outputs.',
      '📋 Control format: specify structure, length, tone, and constraints.',
      '🔗 Use few-shot examples to teach AI the exact pattern you want.',
      '🧠 Add "Think step by step" for complex reasoning tasks.',
      '⛓️ Break complex goals into prompt chains for best results.',
      '🔄 Meta-prompting: use AI to improve your own prompts!'
    ];

    document.getElementById('takeaways-list').innerHTML =
      takeaways.map(t => `<li>${t}</li>`).join('');

    // Render overall scoreboard
    const online  = await Scoreboard._isOnline();
    const overall = await Scoreboard.getOverall();
    document.getElementById('overall-sb-title').innerHTML =
      `🌍 Overall Leaderboard${online ? ' <span class="sb-live-dot">● LIVE</span>' : ''}`;
    this._renderScoreboardTable('overall-scoreboard-body', overall, GameState.playerName, true);

    showScreen('screen-game-complete');

    // Live polling — refresh every 5s
    clearInterval(GameState.pollInterval);
    GameState.pollInterval = setInterval(async () => {
      const live = await Scoreboard.getOverall();
      this._renderScoreboardTable('overall-scoreboard-body', live, GameState.playerName, true);
    }, 5000);
  },

  /** Renders rows into a scoreboard tbody.
   *  entries: array of { name, score, timeMs } (level) OR { name, totalScore, totalTimeMs } (overall)
   *  isOverall: boolean — uses totalScore/totalTimeMs keys when true
   */
  _renderScoreboardTable(tbodyId, entries, currentPlayer, isOverall) {
    const tbody = document.getElementById(tbodyId);
    if (!tbody) return;

    const MEDALS = ['🥇', '🥈', '🥉'];
    const scoreKey = isOverall ? 'totalScore' : 'score';
    const timeKey  = isOverall ? 'totalTimeMs' : 'timeMs';

    tbody.innerHTML = entries.slice(0, 20).map((e, i) => {
      const rank = MEDALS[i] || `${i + 1}`;
      const isCurrent = e.name === currentPlayer;
      const rowClass = isCurrent ? 'current-player new-entry' : '';
      return `<tr class="${rowClass}">
        <td class="rank">${rank}</td>
        <td class="player-name">${escHtml(e.name)}</td>
        <td class="score-val">${e[scoreKey]} pts</td>
        <td class="time-val">${Timer.format(e[timeKey])}</td>
      </tr>`;
    }).join('');
  }
};

// ============================================================
// INIT — Start on welcome screen
// ============================================================
window.addEventListener('DOMContentLoaded', () => {
  showScreen('screen-welcome');

  // Allow Enter key to start game from name field
  const nameInput = document.getElementById('player-name-input');
  if (nameInput) {
    nameInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') GameEngine.startGame();
    });
  }
});
