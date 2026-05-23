(() => {
  // ─── TTS Initialization Check ────────────────────────────────────────────────
  
  console.log('%c🔊 Speech Synthesis Check', 'font-weight: bold; font-size: 14px;');
  if (typeof speechSynthesis !== 'undefined') {
    console.log('✓ Speech Synthesis API is available');
    speechSynthesis.addEventListener('voiceschanged', () => {
      const voices = speechSynthesis.getVoices();
      console.log(`✓ Found ${voices.length} voices`);
      const hindiVoices = voices.filter(v => v.lang.startsWith('hi'));
      const kannadaVoices = voices.filter(v => v.lang.startsWith('kn'));
      console.log(`  Hindi voices (hi-*): ${hindiVoices.length}`);
      console.log(`  Kannada voices (kn-*): ${kannadaVoices.length}`);
      if (hindiVoices.length === 0 && kannadaVoices.length === 0) {
        console.warn('⚠️  No Hindi or Kannada voices found. Will use default voice.');
      }
    }, { once: true });
    // Trigger voice loading
    speechSynthesis.getVoices();
  } else {
    console.error('✗ Speech Synthesis API is NOT available in this browser');
  }

  // ─── User Management (localStorage) ──────────────────────────────────────────

  const STORAGE_KEY = 'playlearn_users';

  function loadUsers() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error loading users:', e);
      return [];
    }
  }

  function saveUsers(users) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    } catch (e) {
      console.error('Error saving users:', e);
    }
  }

  function getCurrentUser() {
    try {
      const current = localStorage.getItem('playlearn_current_user');
      return current || null;
    } catch (e) {
      return null;
    }
  }

  function setCurrentUser(userName) {
    try {
      localStorage.setItem('playlearn_current_user', userName);
    } catch (e) {
      console.error('Error setting current user:', e);
    }
  }

  function createUser(name) {
    const users = loadUsers();
    const existing = users.find(u => u.name.toLowerCase() === name.toLowerCase());
    if (existing) {
      return existing;
    }
    const newUser = {
      name,
      createdAt: Date.now(),
      totalScore: 0,
      history: []
    };
    users.push(newUser);
    saveUsers(users);
    return newUser;
  }

  function updateUserScore(userName, subjectId, moduleId, score, total) {
    const users = loadUsers();
    const user = users.find(u => u.name === userName);
    if (!user) return;

    const historyEntry = {
      subjectId,
      moduleId,
      score,
      total,
      timestamp: Date.now()
    };
    
    user.history.push(historyEntry);
    user.totalScore += score;
    
    saveUsers(users);
  }

  function getUserHistory(userName) {
    const users = loadUsers();
    const user = users.find(u => u.name === userName);
    return user ? user.history : [];
  }

  function getUserTotalScore(userName) {
    const users = loadUsers();
    const user = users.find(u => u.name === userName);
    return user ? user.totalScore : 0;
  }

  // ─── State ───────────────────────────────────────────────────────────────────

  const state = {
    currentUser: getCurrentUser(),
    subjectId: null,
    currentModule: null,
    session: null,
    subjectStars: {},
    questionBanks: {},
    moduleSeenHistory: {},
    phoneticsEnabled: true,
    balloon: { round: 0, score: 0, totalRounds: 10, target: 0, answered: false },
    story: { current: null, pageIndex: 0 }
  };

  const data = globalThis.GAME_DATA;

  const views = {
    loginView:  document.getElementById("loginView"),
    mainMenu:   document.getElementById("mainMenu"),
    subjectHub: document.getElementById("subjectHub"),
    lessonView: document.getElementById("lessonView"),
    resultView: document.getElementById("resultView"),
    funGame:    document.getElementById("funGame"),
    funMenu:    document.getElementById("funMenu"),
    memoryGame: document.getElementById("memoryGame"),
    colorGame:  document.getElementById("colorGame"),
    snakeGame:  document.getElementById("snakeGame"),
    catchGame:  document.getElementById("catchGame"),
    balloonPopGame: document.getElementById("balloonPopGame"),
    numberJumpGame: document.getElementById("numberJumpGame"),
    colorMatchSpeedGame: document.getElementById("colorMatchSpeedGame"),
    mazeGame: document.getElementById("mazeGame"),
    bubbleGame: document.getElementById("bubbleGame"),
    snapGame: document.getElementById("snapGame"),
    storyMenu: document.getElementById("storyMenu"),
    storyView: document.getElementById("storyView")
  };

  const ui = {
    // Login
    nameInput:         document.getElementById("nameInput"),
    loginBtn:          document.getElementById("loginBtn"),
    userList:          document.getElementById("userList"),
    userListContainer: document.getElementById("userListContainer"),
    // User Profile
    userProfile:     document.getElementById("userProfile"),
    userGreeting:    document.getElementById("userGreeting"),
    viewHistoryBtn:  document.getElementById("viewHistoryBtn"),
    logoutBtn:       document.getElementById("logoutBtn"),
    historyModal:    document.getElementById("historyModal"),
    historyContent:  document.getElementById("historyContent"),
    closeHistoryBtn: document.getElementById("closeHistoryBtn"),
    // Subject Hub
    subjectTitle:       document.getElementById("subjectTitle"),
    subjectDescription: document.getElementById("subjectDescription"),
    moduleCards:        document.getElementById("moduleCards"),
    subjectBackBtn:     document.getElementById("subjectBackBtn"),
    // Lesson
    lessonTitle:    document.getElementById("lessonTitle"),
    progressLabel:  document.getElementById("progressLabel"),
    scoreLabel:     document.getElementById("scoreLabel"),
    starLabel:      document.getElementById("starLabel"),
    questionPrompt: document.getElementById("questionPrompt"),
    questionVisual: document.getElementById("questionVisual"),
    speakBtn:       document.getElementById("speakBtn"),
    options:        document.getElementById("options"),
    dragZone:       document.getElementById("dragZone"),
    dropSlots:      document.getElementById("dropSlots"),
    letterBank:     document.getElementById("letterBank"),
    feedback:       document.getElementById("feedback"),
    checkBtn:       document.getElementById("checkBtn"),
    nextBtn:        document.getElementById("nextBtn"),
    exitLessonBtn:  document.getElementById("exitLessonBtn"),
    // Result
    resultTitle:   document.getElementById("resultTitle"),
    resultSummary: document.getElementById("resultSummary"),
    resultStars:   document.getElementById("resultStars"),
    replayBtn:     document.getElementById("replayBtn"),
    resultBackBtn: document.getElementById("resultBackBtn"),
    homeBtn:       document.getElementById("homeBtn"),
    // Balloon game
    funPrompt:    document.getElementById("funPrompt"),
    funRound:     document.getElementById("funRound"),
    funScore:     document.getElementById("funScore"),
    balloonArea:  document.getElementById("balloonArea"),
    funFeedback:  document.getElementById("funFeedback"),
    funBackBtn:   document.getElementById("funBackBtn"),
    // Fun menu
    funMenuBackBtn: document.getElementById("funMenuBackBtn"),
    // Memory game
    memoryGrid:     document.getElementById("memoryGrid"),
    memoryMoves:    document.getElementById("memoryMoves"),
    memoryPairs:    document.getElementById("memoryPairs"),
    memoryFeedback: document.getElementById("memoryFeedback"),
    memoryBackBtn:  document.getElementById("memoryBackBtn"),
    // Color game
    colorPrompt:    document.getElementById("colorPrompt"),
    colorRound:     document.getElementById("colorRound"),
    colorScore:     document.getElementById("colorScore"),
    colorBtnArea:   document.getElementById("colorBtnArea"),
    colorFeedback:  document.getElementById("colorFeedback"),
    colorBackBtn:   document.getElementById("colorBackBtn")
  };

  const englishAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const hindiMatras = ["ा", "ि", "ी", "ु", "ू", "े", "ै", "ो", "ौ", "ं", "ँ", "ः"];
  const kannadaDecoyPool = ["ಲ", "ವ", "ರ", "ನ", "ಸ", "ಶ", "ಗ", "ಪ", "ಚ", "ಟ", "ತ", "ಬ", "ಮ", "ಯ", "ಹ", "ಖ", "ಘ", "ಝ", "ಥ", "ಧ", "ಫ", "ಭ", "ಷ", "ಳ"];
  const balloonColors = ["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff", "#ff922b", "#cc5de8", "#f06595", "#74c0fc"];
  const memoryEmojis = ["🐶","🐱","🐸","🦁","🐘","🦋","🐝","🍎","🌸","🚗","⭐","🌙","🐟","🐦","🌻","🎈"];
  const colorPool = [
    { name: "Red",    hex: "#ff4444" },
    { name: "Blue",   hex: "#4488ff" },
    { name: "Green",  hex: "#44bb44" },
    { name: "Yellow", hex: "#ffcc00" },
    { name: "Orange", hex: "#ff8833" },
    { name: "Purple", hex: "#aa44ff" },
    { name: "Pink",   hex: "#ff66aa" },
    { name: "Brown",  hex: "#8B4513" }
  ];

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function pickRandom(array) {
    return array[randomInt(0, array.length - 1)];
  }

  function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = randomInt(0, i);
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function getStarsText(stars, total = 3) {
    const full = "★".repeat(Math.min(total, stars));
    const empty = "☆".repeat(Math.max(0, total - stars));
    return full + empty;
  }

  function scoreToStars(correct, total) {
    const ratio = correct / total;
    if (ratio >= 0.8) {
      return 3;
    }
    if (ratio >= 0.6) {
      return 2;
    }
    if (ratio >= 0.4) {
      return 1;
    }
    return 0;
  }

  function getSubjectConfig() {
    return data.curriculum[state.subjectId];
  }

  function getModuleById(moduleId) {
    const subject = getSubjectConfig();
    return subject.modules.find((module) => module.id === moduleId);
  }

  // Global game cleanup system
  const gameCleanup = {
    timers: [],
    intervals: [],
    eventListeners: [],
    canvasHandlers: [],
    
    addTimer(timer) {
      this.timers.push(timer);
    },
    
    addInterval(interval) {
      this.intervals.push(interval);
    },
    
    addListener(element, event, handler) {
      this.eventListeners.push({ element, event, handler });
    },
    
    addCanvasHandler(canvas, type) {
      this.canvasHandlers.push({ canvas, type });
    },
    
    clearAll() {
      // Clear all timers
      this.timers.forEach(timer => clearTimeout(timer));
      this.timers = [];
      
      // Clear all intervals
      this.intervals.forEach(interval => clearInterval(interval));
      this.intervals = [];
      
      // Remove all event listeners
      this.eventListeners.forEach(({ element, event, handler }) => {
        element.removeEventListener(event, handler);
      });
      this.eventListeners = [];
      
      // Clear canvas handlers
      this.canvasHandlers.forEach(({ canvas, type }) => {
        canvas[type] = null;
      });
      this.canvasHandlers = [];
    }
  };

  function showView(targetView) {
    // Stop any running games before switching views
    stopAllGames();
    
    Object.values(views).forEach((section) => section.classList.remove("active"));
    targetView.classList.add("active");
  }

  function stopAllGames() {
    // Clear all game resources
    gameCleanup.clearAll();
    
    // Stop external fun games
    if (globalThis.funGames) {
      if (globalThis.funGames.snake) globalThis.funGames.snake.stop();
      if (globalThis.funGames.catch) globalThis.funGames.catch.stop();
      if (globalThis.funGames.balloonPopSpeed) globalThis.funGames.balloonPopSpeed.stop();
    }
  }

  // Content key: uses equation (for arithmetic) or visual, plus answer.
  // Two questions with identical content key will never appear in the same session.
  function getContentKey(question) {
    const base = question.equation || question.visual;
    const ans  = Array.isArray(question.answer) ? question.answer.join("") : String(question.answer);
    return `${base}||${ans}`;
  }

  // ─── Text-to-Speech ───────────────────────────────────────────────────────────

  function speakText(text, lang) {
    const synth = globalThis.speechSynthesis;
    if (!synth || !text) {
      console.warn("Speech synthesis not available or no text provided");
      return;
    }

    const doSpeak = () => {
      synth.cancel();
      const utter = new globalThis.SpeechSynthesisUtterance(text);
      utter.lang  = lang || "en-US";
      utter.rate  = 0.85;
      utter.pitch = 1.1;

      // Try to select the best matching voice for Indian languages
      const voices = synth.getVoices();
      if (voices.length > 0 && lang) {
        // 1. Exact match
        let voice = voices.find(v => v.lang === lang);
        // 2. Language-prefix match (e.g. "kn" for "kn-IN")
        if (!voice) {
          const prefix = lang.split('-')[0];
          voice = voices.find(v => v.lang.startsWith(prefix));
        }
        // 3. For kn-IN: try Google or Microsoft Kannada voices specifically
        if (!voice && lang === 'kn-IN') {
          voice = voices.find(v => /kannada/i.test(v.name));
        }
        if (voice) {
          utter.voice = voice;
          console.log(`🔊 Using voice: ${voice.name} (${voice.lang})`);
        } else if (lang !== 'en-US') {
          console.warn(`⚠️ No voice found for ${lang}, using browser default`);
        }
      }

      utter.onerror = (event) => {
        console.error("Speech synthesis error:", event.error, "for lang:", lang);
      };
      synth.speak(utter);
    };

    const voices = synth.getVoices();
    if (voices.length > 0) {
      doSpeak();
    } else {
      synth.addEventListener('voiceschanged', doSpeak, { once: true });
      setTimeout(doSpeak, 200);
    }
  }

  function speakQuestion(question) {
    if (question && question.speakText) {
      speakText(question.speakText, question.speakLang);
    }
  }

  // ─── Session UI ───────────────────────────────────────────────────────────────

  function updateSessionStats() {
    const session = state.session;
    ui.progressLabel.textContent = `Q ${session.currentQuestionNumber} / ${session.totalQuestions}`;
    ui.scoreLabel.textContent = `Score: ${session.score}`;
    ui.starLabel.textContent = `Stars: ${getStarsText(session.stars)}`;
  }

  function clearFeedback() {
    ui.feedback.textContent = "";
    ui.feedback.classList.remove("good", "try");
  }

  function setFeedback(message, isGood) {
    ui.feedback.textContent = message;
    ui.feedback.classList.toggle("good", isGood);
    ui.feedback.classList.toggle("try", !isGood);
  }

  function playFeedbackTone(isGood) {
    const AudioCtx = globalThis.AudioContext || globalThis.webkitAudioContext;
    if (!AudioCtx) {
      return;
    }

    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = isGood ? "triangle" : "square";
    osc.frequency.value = isGood ? 760 : 220;
    gain.gain.value = 0.01;

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
    osc.stop(ctx.currentTime + 0.2);
  }

  function makeQuestionId(moduleId, ...parts) {
    return `${moduleId}:${parts.join("|")}`;
  }

  function numberOptions(answer, maxAnswer, spread = 4) {
    const set = new Set([answer]);
    while (set.size < 4) {
      const delta = randomInt(-spread, spread);
      const candidate = Math.max(0, Math.min(maxAnswer, answer + delta));
      set.add(candidate);
    }
    return shuffle([...set]).map((num) => String(num));
  }

  function rotatedDistractors(pool, answer, count, offset) {
    const clean = pool.filter((item) => item !== answer);
    const out = [];
    for (let i = 0; i < clean.length && out.length < count; i += 1) {
      out.push(clean[(offset + i) % clean.length]);
    }
    return out;
  }

  function generateCountingBank(module) {
    const prompts = [
      "Count the objects and choose the number.",
      "How many objects do you see?",
      "Tap the correct count."
    ];
    const bank = [];
    prompts.forEach((prompt, pi) => {
      module.items.forEach((item, ii) => {
        for (let count = 1; count <= 20; count += 1) {
          bank.push({
            id:      makeQuestionId(module.id, pi, ii, count),
            kind:    "mcq",
            prompt,
            visual:  Array.from({ length: count }, () => item).join(" "),
            answer:  String(count),
            options: numberOptions(count, 20)
          });
        }
      });
    });
    return bank;
  }

  function generateArithmeticBank(module) {
    const bank = [];
    const symbol = module.operation === "add" ? "+" : "-";
    const prompts = module.operation === "add"
      ? ["Add the groups.", "How much in total?", "Count and add together."]
      : ["Subtract the second group.", "How many are left?", "Take away and count."];
    const visualPool = Array.isArray(module.visualItems) ? module.visualItems : [module.visualItem];

    prompts.forEach((prompt, pi) => {
      for (let a = module.minValue; a <= module.maxValue; a += 1) {
        for (let b = module.minValue; b <= module.maxValue; b += 1) {
          if (module.operation === "add"      && a + b > module.maxAnswer) continue;
          if (module.operation === "subtract" && b > a)                    continue;
          const answer  = module.operation === "add" ? a + b : a - b;
          const item    = visualPool[pi % visualPool.length];
          const visualA = Array.from({ length: a }, () => item).join(" ");
          const visualB = Array.from({ length: b }, () => item).join(" ");
          bank.push({
            id:       makeQuestionId(module.id, pi, a, b),
            kind:     "mcq",
            prompt,
            visual:   `${visualA || "0"}  ${symbol}  ${visualB || "0"}`,
            equation: `${a} ${symbol} ${b} = ?`,
            answer:   String(answer),
            options:  numberOptions(answer, module.maxAnswer)
          });
        }
      }
    });
    return bank;
  }

  function generateShapeBank(module) {
    const prompts = [
      "What is this shape?",
      "Find the correct shape name.",
      "Identify this shape.",
      "Which shape is shown?"
    ];
    const shapeNames = module.shapes.map((s) => s.name);
    const bank = [];
    prompts.forEach((prompt, pi) => {
      module.shapes.forEach((shape, si) => {
        for (let repeat = 1; repeat <= 6; repeat += 1) {
          bank.push({
            id:      makeQuestionId(module.id, pi, si, repeat),
            kind:    "mcq",
            prompt,
            visual:  Array.from({ length: repeat }, () => shape.symbol).join(" "),
            answer:  shape.name,
            options: shuffle([...shapeNames])
          });
        }
      });
    });
    return bank;
  }

  function generateMissingLetterBank(module) {
    const prompts = [
      "Fill the missing letter.",
      "Complete the word.",
      "Choose the missing letter."
    ];
    const bank = [];
    module.words.forEach((word, wi) => {
      prompts.forEach((prompt, pi) => {
        const distractors = rotatedDistractors(englishAlphabet, word.answer, 3, wi + pi);
        bank.push({
          id:        makeQuestionId(module.id, wi, pi),
          kind:      "mcq",
          prompt:    `${prompt} — ${word.fullWord}`,
          visual:    word.display,
          answer:    word.answer,
          options:   shuffle([word.answer, ...distractors]),
          speakText: word.fullWord,
          speakLang: "en-US"
        });
      });
    });
    return bank;
  }

  function generatePictureWordBank(module) {
    const prompts = [
      "Choose the correct word for this picture.",
      "Pick the matching word.",
      "Which word matches this picture?",
      "Tap the right word."
    ];
    const words = module.items.map((item) => item.word);
    const bank  = [];
    module.items.forEach((item, ii) => {
      prompts.forEach((prompt, pi) => {
        const distractors = rotatedDistractors(words, item.word, 3, ii + pi);
        bank.push({
          id:        makeQuestionId(module.id, ii, pi),
          kind:      "mcq",
          prompt,
          visual:    item.picture,
          answer:    item.word,
          options:   shuffle([item.word, ...distractors]),
          speakText: item.word,
          speakLang: "en-US"
        });
      });
    });
    return bank;
  }

  function generateKannadaPictureWordBank(module) {
    const prompts = [
      "ಚಿತ್ರಕ್ಕೆ ಸರಿಯಾದ ಕನ್ನಡ ಪದ ಆಯ್ಕೆ ಮಾಡಿ.",
      "ಈ ಚಿತ್ರಕ್ಕೆ ಯಾವ ಪದ?",
      "ಸರಿಯಾದ ಪದ ಆರಿಸಿ.",
      "ಪದ ಆಯ್ಕೆ ಮಾಡಿ."
    ];
    const words = module.items.map((item) => item.word);
    const bank  = [];
    module.items.forEach((item, ii) => {
      prompts.forEach((prompt, pi) => {
        const distractors = rotatedDistractors(words, item.word, 3, ii + pi);
        bank.push({
          id:        makeQuestionId(module.id, ii, pi),
          kind:      "mcq",
          prompt,
          visual:    item.picture,
          phonetic:  item.phonetic || null,
          answer:    item.word,
          options:   shuffle([item.word, ...distractors]),
          speakText: item.word,
          speakLang: "kn-IN"
        });
      });
    });
    return bank;
  }

  function generateSightWordBank(module) {
    const prompts = [
      "Tap the sight word.",
      "Find this sight word.",
      "Choose the correct sight word."
    ];
    const bank = [];
    module.words.forEach((word, wi) => {
      prompts.forEach((prompt, pi) => {
        const distractors = rotatedDistractors(module.words, word, 3, wi + pi);
        bank.push({
          id:        makeQuestionId(module.id, wi, pi),
          kind:      "mcq",
          prompt:    `${prompt}: "${word}"`,
          visual:    "👀",
          answer:    word,
          options:   shuffle([word, ...distractors]),
          speakText: word,
          speakLang: "en-US"
        });
      });
    });
    return bank;
  }

  function generateKannadaLetterBank(module) {
    const prompts = [
      "ಈ ಅಕ್ಷರವನ್ನು ಆರಿಸಿ (Choose this letter).",
      "ಈ ಅಕ್ಷರ ಗುರುತಿಸಿ (Identify this letter).",
      "ಸರಿಯಾದ ಅಕ್ಷರ ಆಯ್ಕೆಮಾಡಿ (Pick the correct letter)."
    ];
    const bank = [];
    module.letters.forEach((letterObj, li) => {
      const letter = typeof letterObj === 'string' ? letterObj : letterObj.letter;
      const phonetic = typeof letterObj === 'object' ? letterObj.phonetic : null;
      prompts.forEach((prompt, pi) => {
        const letterArray = module.letters.map(l => typeof l === 'string' ? l : l.letter);
        const distractors = rotatedDistractors(letterArray, letter, 3, li + pi);
        bank.push({
          id:        makeQuestionId(module.id, li, pi),
          kind:      "mcq",
          prompt,
          visual:    letter,
          phonetic:  phonetic,
          answer:    letter,
          options:   shuffle([letter, ...distractors]),
          speakText: letter,
          speakLang: "kn-IN"
        });
      });
    });
    return bank;
  }

  function generateKannadaDragBank(module) {
    const prompts = [
      "Build the Kannada word.",
      "Drag letters to complete the word.",
      "Arrange letters in the correct order."
    ];
    const bank = [];
    module.words.forEach((card, ci) => {
      prompts.forEach((prompt, pi) => {
        const neededDecoys = Math.max(1, 3 - card.letters.length);
        const decoys = rotatedDistractors(kannadaDecoyPool, "", neededDecoys, ci + pi);
        bank.push({
          id:         makeQuestionId(module.id, ci, pi),
          kind:       "drag",
          prompt:     `${prompt} — ${card.clue} ${card.picture}`,
          visual:     card.picture,
          answer:     card.letters,
          answerText: card.answerText,
          bank:       shuffle([...card.letters, ...decoys]),
          speakText:  card.answerText,
          speakLang:  "kn-IN"
        });
      });
    });
    return bank;
  }

  // ─── Hindi generators ──────────────────────────────────────────────────────────

  function generateHindiLetterBank(module) {
    const prompts = [
      "इस अक्षर को चुनो (Choose this letter).",
      "सही अक्षर पहचानो (Identify this letter).",
      "यह अक्षर कौन सा है? (Which letter is this?)"
    ];
    const bank = [];
    module.letters.forEach((letterObj, li) => {
      const letter = typeof letterObj === 'string' ? letterObj : letterObj.letter;
      const phonetic = typeof letterObj === 'object' ? letterObj.phonetic : null;
      prompts.forEach((prompt, pi) => {
        const letterArray = module.letters.map(l => typeof l === 'string' ? l : l.letter);
        const distractors = rotatedDistractors(letterArray, letter, 3, li + pi);
        bank.push({
          id:        makeQuestionId(module.id, li, pi),
          kind:      "mcq",
          prompt,
          visual:    letter,
          phonetic:  phonetic,
          answer:    letter,
          options:   shuffle([letter, ...distractors]),
          speakText: letter,
          speakLang: "hi-IN"
        });
      });
    });
    return bank;
  }

  function generateHindiPictureWordBank(module) {
    const prompts = [
      "इस चित्र का सही शब्द चुनो।",
      "चित्र देखो, शब्द बताओ।",
      "सही हिन्दी शब्द चुनो।",
      "यह क्या है?"
    ];
    const words = module.items.map((item) => item.word);
    const bank  = [];
    module.items.forEach((item, ii) => {
      prompts.forEach((prompt, pi) => {
        const distractors = rotatedDistractors(words, item.word, 3, ii + pi);
        bank.push({
          id:        makeQuestionId(module.id, ii, pi),
          kind:      "mcq",
          prompt,
          visual:    item.picture,
          phonetic:  item.phonetic || null,
          answer:    item.word,
          options:   shuffle([item.word, ...distractors]),
          speakText: item.word,
          speakLang: "hi-IN"
        });
      });
    });
    return bank;
  }

  function generateHindiMissingMatraBank(module) {
    const prompts = [
      "सही मात्रा चुनो।",
      "शब्द पूरा करो।",
      "कौन सी मात्रा लगेगी?"
    ];
    const bank = [];
    module.words.forEach((word, wi) => {
      prompts.forEach((prompt, pi) => {
        const distractors = rotatedDistractors(hindiMatras, word.answer, 3, wi + pi);
        bank.push({
          id:        makeQuestionId(module.id, wi, pi),
          kind:      "mcq",
          prompt:    `${prompt} — ${word.hint}`,
          visual:    word.display,
          answer:    word.answer,
          options:   shuffle([word.answer, ...distractors]),
          speakText: word.fullWord,
          speakLang: "hi-IN"
        });
      });
    });
    return bank;
  }

  // ─── Science generator ─────────────────────────────────────────────────────────

  function generateScienceMcqBank(module) {
    const bank = [];
    module.items.forEach((item, ii) => {
      bank.push({
        id:      makeQuestionId(module.id, ii),
        kind:    "mcq",
        prompt:  item.question,
        visual:  item.visual,
        answer:  item.answer,
        options: shuffle([...item.options])
      });
    });
    return bank;
  }

  // ─── Hindi Barakhadi generator ────────────────────────────────────────────────

  function generateHindiBarakhadiBank(module) {
    const allResults = module.combos.map((c) => c.result);
    const allMatras  = [...new Set(module.combos.map((c) => c.matra))];
    const bank       = [];
    module.combos.forEach((combo, ci) => {
      // Q1: consonant + matra = ?
      const d1 = rotatedDistractors(allResults, combo.result, 3, ci);
      bank.push({
        id:        makeQuestionId(module.id, ci, 0),
        kind:      "mcq",
        prompt:    `क्या बनेगा? — ${combo.consonant} ➕ ${combo.matra} = ?`,
        visual:    `${combo.consonant} + ${combo.matra} = ?`,
        answer:    combo.result,
        options:   shuffle([combo.result, ...d1]),
        speakText: combo.result,
        speakLang: "hi-IN"
      });
      // Q2: which matra is in this word?
      const d2 = rotatedDistractors(allMatras, combo.matra, 3, ci + 1);
      bank.push({
        id:        makeQuestionId(module.id, ci, 1),
        kind:      "mcq",
        prompt:    `"${combo.result}" में कौन सी मात्रा लगी है?`,
        visual:    combo.result,
        answer:    combo.matra,
        options:   shuffle([combo.matra, ...d2]),
        speakText: combo.result,
        speakLang: "hi-IN"
      });
    });
    return bank;
  }

  // ─── Rhyme / Poem generators ──────────────────────────────────────────────────

  function generateRhymeBank(module) {
    const basePrompt = module.completePrompt || "🎵 Complete the rhyme!";
    const bank       = [];
    module.items.forEach((item, ii) => {
      bank.push({
        id:        makeQuestionId(module.id, ii),
        kind:      "mcq",
        prompt:    item.emoji ? `${item.emoji}  ${basePrompt}` : basePrompt,
        visual:    item.lines,
        answer:    item.answer,
        options:   shuffle([...item.options]),
        speakText: item.speakText,
        speakLang: item.speakLang || "en-US",
        isRhyme:   true
      });
    });
    return bank;
  }

  function generateHindiPoemBank(module) {
    const basePrompt = module.completePrompt || "🎵 कविता पूरी करो!";
    const bank       = [];
    module.items.forEach((item, ii) => {
      bank.push({
        id:        makeQuestionId(module.id, ii),
        kind:      "mcq",
        prompt:    item.emoji ? `${item.emoji}  ${basePrompt}` : basePrompt,
        visual:    item.lines,
        answer:    item.answer,
        options:   shuffle([...item.options]),
        speakText: item.speakText,
        speakLang: "hi-IN",
        isRhyme:   true
      });
    });
    return bank;
  }

  function createQuestionBank(module) {
    if (module.type === "counting")          return generateCountingBank(module);
    if (module.type === "arithmetic")        return generateArithmeticBank(module);
    if (module.type === "shape")             return generateShapeBank(module);
    if (module.type === "missingLetter")     return generateMissingLetterBank(module);
    if (module.type === "pictureWord")       return generatePictureWordBank(module);
    if (module.type === "sightWord")         return generateSightWordBank(module);
    if (module.type === "kannadaLetter")     return generateKannadaLetterBank(module);
    if (module.type === "kannadaPictureWord") return generateKannadaPictureWordBank(module);
    if (module.type === "kannadaDragWord")   return generateKannadaDragBank(module);
    if (module.type === "hindiLetter")       return generateHindiLetterBank(module);
    if (module.type === "hindiPictureWord")  return generateHindiPictureWordBank(module);
    if (module.type === "hindiMissingMatra") return generateHindiMissingMatraBank(module);
    if (module.type === "scienceMcq")        return generateScienceMcqBank(module);
    if (module.type === "hindiBarakhadi")    return generateHindiBarakhadiBank(module);
    if (module.type === "rhymeComplete")     return generateRhymeBank(module);
    if (module.type === "hindiPoem")         return generateHindiPoemBank(module);
    return [];
  }

  function getQuestionBank(module) {
    if (!state.questionBanks[module.id]) {
      state.questionBanks[module.id] = createQuestionBank(module);
    }
    return state.questionBanks[module.id];
  }

  // ─── Session sampler (content-key dedup) ──────────────────────────────────────
  // Tracks by CONTENT fingerprint (equation||answer or visual||answer),
  // so the same concept never repeats even if it has a different generated ID.

  function pickQuestionsForSession(module, count) {
    const bank = getQuestionBank(module);
    if (!state.moduleSeenHistory[module.id]) {
      state.moduleSeenHistory[module.id] = new Set();
    }
    const seen = state.moduleSeenHistory[module.id];

    // Build a map of unique content → one representative question
    const uniqueMap = new Map();
    bank.forEach((question) => {
      const key = getContentKey(question);
      if (!uniqueMap.has(key)) uniqueMap.set(key, question);
    });

    const allUnique = [...uniqueMap.values()];
    let unseen = allUnique.filter((q) => !seen.has(getContentKey(q)));

    if (unseen.length < count) {
      // Seen everything — reset and start fresh
      seen.clear();
      unseen = shuffle([...allUnique]);
    } else {
      unseen = shuffle(unseen);
    }

    const picks = unseen.slice(0, count);
    picks.forEach((q) => seen.add(getContentKey(q)));
    return picks;
  }

  function renderOptions(options, onSelect) {
    ui.options.innerHTML = "";
    options.forEach((value) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = value;
      btn.addEventListener("click", () => onSelect(value));
      ui.options.appendChild(btn);
    });
  }

  function lockOptions(lock) {
    const buttons = ui.options.querySelectorAll("button");
    buttons.forEach((btn) => {
      btn.disabled = lock;
    });
  }

  function submitAnswer(answerValue) {
    const session = state.session;
    const question = session.currentQuestion;
    if (session.answered) {
      return;
    }

    const expected = question.kind === "drag" ? question.answer.join("|") : String(question.answer);
    const actual = question.kind === "drag" ? answerValue.join("|") : String(answerValue);
    const isCorrect = expected === actual;

    session.answered = true;
    if (isCorrect) {
      session.correctCount += 1;
      session.score += 10;
      setFeedback(pickRandom(data.app.praiseMessages), true);
      playFeedbackTone(true);
    } else {
      const answerText = question.kind === "drag" ? question.answerText : question.answer;
      setFeedback(`${pickRandom(data.app.tryMessages)} Correct answer: ${answerText}`, false);
      playFeedbackTone(false);
    }

    session.stars = scoreToStars(session.correctCount, session.totalQuestions);
    lockOptions(true);
    ui.checkBtn.disabled = true;
    ui.nextBtn.disabled = false;
    updateSessionStats();
  }

  function renderDragQuestion(question) {
    ui.dragZone.classList.remove("hidden");
    ui.checkBtn.classList.remove("hidden");
    ui.dropSlots.innerHTML = "";
    ui.letterBank.innerHTML = "";

    question.answer.forEach((_, index) => {
      const slot = document.createElement("div");
      slot.className = "drop-slot";
      slot.dataset.index = String(index);
      slot.dataset.value = "";
      slot.textContent = "_";

      slot.addEventListener("dragover", (event) => {
        event.preventDefault();
      });

      slot.addEventListener("drop", (event) => {
        event.preventDefault();
        if (state.session.answered || slot.dataset.value) {
          return;
        }
        const value = event.dataTransfer.getData("text/plain");
        if (!value) {
          return;
        }
        slot.dataset.value = value;
        slot.textContent = value;
      });

      ui.dropSlots.appendChild(slot);
    });

    question.bank.forEach((letter) => {
      const tile = document.createElement("button");
      tile.className = "letter-tile";
      tile.draggable = true;
      tile.textContent = letter;

      tile.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", letter);
      });

      tile.addEventListener("click", () => {
        if (state.session.answered) {
          return;
        }
        const emptySlot = Array.from(ui.dropSlots.children).find((slot) => !slot.dataset.value);
        if (!emptySlot) {
          return;
        }
        emptySlot.dataset.value = letter;
        emptySlot.textContent = letter;
      });

      ui.letterBank.appendChild(tile);
    });

    ui.checkBtn.disabled = false;
  }

  function renderQuestion() {
    const session = state.session;
    const question = session.questionSet[session.currentQuestionNumber - 1];

    session.currentQuestion = question;
    session.answered = false;
    clearFeedback();

    ui.questionPrompt.textContent = question.prompt;
    const visualText = question.equation
      ? `${question.visual}   ${question.equation}`
      : (question.visual || '');
    ui.questionVisual.classList.toggle('rhyme-visual', !!question.isRhyme);
    if (visualText.includes('\n')) {
      ui.questionVisual.innerHTML = '';
      visualText.split('\n').forEach((line, i) => {
        if (i > 0) ui.questionVisual.appendChild(document.createElement('br'));
        ui.questionVisual.appendChild(document.createTextNode(line));
      });
    } else {
      ui.questionVisual.textContent = visualText;
    }

    // Add phonetic transcription if enabled and available
    if (state.phoneticsEnabled && question.phonetic) {
      const phoneticContainer = document.createElement('div');
      phoneticContainer.className = 'phonetic-container';
      
      const phoneticSpan = document.createElement('span');
      phoneticSpan.className = 'phonetic-text';
      phoneticSpan.textContent = `(${question.phonetic})`;
      
      const speakerIcon = document.createElement('button');
      speakerIcon.className = 'phonetic-speaker';
      speakerIcon.innerHTML = '🔊';
      speakerIcon.title = 'Play pronunciation';
      speakerIcon.type = 'button';
      speakerIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        e.preventDefault();
        
        // Visual feedback
        speakerIcon.style.transform = 'scale(0.9)';
        setTimeout(() => {
          speakerIcon.style.transform = '';
        }, 150);
        
        console.log('🔊 Speaker clicked, question:', question);
        if (question.speakText && question.speakLang) {
          console.log('🗣️  Speaking:', question.speakText, 'in', question.speakLang);
          speakText(question.speakText, question.speakLang);
        } else {
          console.warn('⚠️  No speakText or speakLang on question');
        }
      });
      
      phoneticContainer.appendChild(phoneticSpan);
      phoneticContainer.appendChild(speakerIcon);
      ui.questionVisual.appendChild(phoneticContainer);
    }

    // Show the speak button only for questions that have audio text
    if (ui.speakBtn) {
      ui.speakBtn.classList.toggle("hidden", !question.speakText);
    }

    ui.options.innerHTML = "";
    ui.dragZone.classList.add("hidden");
    ui.checkBtn.classList.add("hidden");
    ui.nextBtn.disabled = true;

    if (question.kind === "mcq") {
      lockOptions(false);
      renderOptions(question.options, (selected) => submitAnswer(selected));
    } else {
      renderDragQuestion(question);
    }

    // Auto-speak English and Kannada words/letters
    speakQuestion(question);
  }

  function checkDragAnswer() {
    const values = Array.from(ui.dropSlots.children).map((slot) => slot.dataset.value || "");
    if (values.some((value) => !value)) {
      setFeedback("Fill all slots before checking.", false);
      return;
    }
    submitAnswer(values);
  }

  function finishModule() {
    const session = state.session;
    const module = state.currentModule;
    const finalStars = scoreToStars(session.correctCount, session.totalQuestions);
    const previousBest = state.subjectStars[module.id] || 0;
    state.subjectStars[module.id] = Math.max(previousBest, finalStars);

    // Save score to user history
    if (state.currentUser) {
      updateUserScore(
        state.currentUser,
        state.subjectId,
        module.id,
        session.correctCount,
        session.totalQuestions
      );
    }

    ui.resultTitle.textContent = `${module.title} Complete!`;
    ui.resultSummary.textContent = `You got ${session.correctCount} out of ${session.totalQuestions}. Final Score: ${session.score}`;
    ui.resultStars.textContent = getStarsText(finalStars);

    showView(views.resultView);
  }

  function goNextQuestion() {
    const session = state.session;
    if (!session.answered) {
      return;
    }

    if (session.currentQuestionNumber >= session.totalQuestions) {
      finishModule();
      return;
    }

    session.currentQuestionNumber += 1;
    updateSessionStats();
    renderQuestion();
  }

  function renderSubjectHub() {
    const subject = getSubjectConfig();
    ui.subjectTitle.textContent = `${subject.icon} ${subject.name}`;
    ui.subjectDescription.textContent = subject.description;
    ui.moduleCards.innerHTML = "";

    subject.modules.forEach((module, index) => {
      const card = document.createElement("button");
      card.className = "module-card";
      card.innerHTML = `
        <span class="module-count">Mission ${index + 1}</span>
        <span class="module-title">${module.title}</span>
        <span class="module-stars">Best: ${getStarsText(state.subjectStars[module.id] || 0)}</span>
      `;
      card.addEventListener("click", () => startModule(module.id));
      ui.moduleCards.appendChild(card);
    });

    showView(views.subjectHub);
  }

  function startModule(moduleId) {
    const module = getModuleById(moduleId);
    state.currentModule = module;

    const selectedQuestions = pickQuestionsForSession(module, module.questions);
    state.session = {
      totalQuestions: module.questions,
      currentQuestionNumber: 1,
      score: 0,
      correctCount: 0,
      stars: 0,
      currentQuestion: null,
      answered: false,
      questionSet: selectedQuestions
    };

    ui.lessonTitle.textContent = `${module.title} (Random 10 / ${getQuestionBank(module).length})`;
    updateSessionStats();
    showView(views.lessonView);
    renderQuestion();
  }

  function backToSubject() {
    state.currentModule = null;
    state.session = null;
    renderSubjectHub();
  }

  // ─── Story Time ───────────────────────────────────────────────────────────────

  function showStoryMenu() {
    const storyGrid = document.getElementById("storyGrid");
    storyGrid.innerHTML = "";
    const stories = data.curriculum.stories.list;
    stories.forEach(story => {
      const btn = document.createElement("button");
      btn.className = "story-card";
      btn.innerHTML = `
        <span class="story-card-emoji">${story.emoji}</span>
        <span class="story-card-title">${story.title}</span>
        <span class="story-card-moral">${story.moral}</span>
      `;
      btn.addEventListener("click", () => openStory(story.id));
      storyGrid.appendChild(btn);
    });
    showView(views.storyMenu);
  }

  function openStory(storyId) {
    const story = data.curriculum.stories.list.find(s => s.id === storyId);
    if (!story) return;
    state.story.current = story;
    state.story.pageIndex = 0;
    document.getElementById("storyTitle").textContent = `${story.emoji} ${story.title}`;
    renderStoryPage();
    showView(views.storyView);
    // Auto-read first page after short delay
    setTimeout(() => speakText(story.pages[0].speakText, "en-US"), 600);
  }

  function renderStoryPage() {
    const story = state.story.current;
    const idx   = state.story.pageIndex;
    const page  = story.pages[idx];
    const total = story.pages.length;

    // Animate page change
    const pageEl = document.getElementById("storyPage");
    pageEl.style.animation = "none";
    void pageEl.offsetHeight; // force reflow to restart animation
    pageEl.style.animation = "";

    document.getElementById("storyVisual").textContent = page.visual;
    document.getElementById("storyText").textContent   = page.text;

    // Dots
    const dotsEl = document.getElementById("storyDots");
    dotsEl.innerHTML = "";
    for (let i = 0; i < total; i++) {
      const dot = document.createElement("span");
      dot.className = "story-dot" + (i === idx ? " active" : "");
      dotsEl.appendChild(dot);
    }

    // Prev / Next buttons
    document.getElementById("storyPrevBtn").disabled = idx === 0;
    const nextBtn = document.getElementById("storyNextBtn");

    // Show moral on last page
    const moralEl = document.getElementById("storyMoral");
    if (idx === total - 1) {
      moralEl.textContent = "🌟 Moral: " + story.moral;
      moralEl.style.display = "block";
      nextBtn.textContent = "🏠 Finish";
    } else {
      moralEl.style.display = "none";
      nextBtn.textContent = "Next →";
      nextBtn.disabled = false;
    }
  }

  // ─── Balloon Pop Game ──────────────────────────────────────────────────────────

  function startBalloonGame() {
    state.balloon = { round: 0, score: 0, totalRounds: 10, target: 0, answered: false };
    showView(views.funGame);
    renderBalloonRound();
  }

  function renderBalloonRound() {
    const bln = state.balloon;
    bln.round   += 1;
    bln.answered = false;

    ui.funRound.textContent    = `Round ${bln.round} / ${bln.totalRounds}`;
    ui.funScore.textContent    = `Score: ${bln.score}`;
    ui.funFeedback.textContent = "";
    ui.funFeedback.classList.remove("good", "try");

    // Pick 6 unique random numbers (1–20) and designate one as the target
    const numSet = new Set();
    while (numSet.size < 6) numSet.add(randomInt(1, 20));
    const nums = [...numSet];
    bln.target = pickRandom(nums);

    ui.funPrompt.textContent = `🎈 Pop the balloon with number ${bln.target}!`;
    speakText(`Pop the balloon with number ${bln.target}`, "en-US");

    ui.balloonArea.innerHTML = "";
    const colors = shuffle([...balloonColors]);
    nums.forEach((num, i) => {
      const btn = document.createElement("button");
      btn.className = "balloon";
      btn.style.background = colors[i % colors.length];
      btn.textContent = num;
      btn.setAttribute("aria-label", `Balloon ${num}`);
      btn.addEventListener("click", () => onBalloonClick(btn, num));
      ui.balloonArea.appendChild(btn);
    });
  }

  function onBalloonClick(btnEl, num) {
    if (state.balloon.answered) return;
    state.balloon.answered = true;

    const isCorrect = num === state.balloon.target;
    ui.balloonArea.querySelectorAll("button").forEach((b) => { b.disabled = true; });

    if (isCorrect) {
      state.balloon.score += 10;
      btnEl.classList.add("balloon-pop");
      ui.funFeedback.textContent = pickRandom(data.app.praiseMessages);
      ui.funFeedback.classList.add("good");
      playFeedbackTone(true);
    } else {
      btnEl.classList.add("balloon-shake");
      // Highlight the correct one
      ui.balloonArea.querySelectorAll("button").forEach((b) => {
        if (Number(b.textContent) === state.balloon.target) b.classList.add("balloon-correct");
      });
      ui.funFeedback.textContent = `${pickRandom(data.app.tryMessages)} It was ${state.balloon.target}!`;
      ui.funFeedback.classList.add("try");
      playFeedbackTone(false);
    }

    ui.funScore.textContent = `Score: ${state.balloon.score}`;

    if (state.balloon.round >= state.balloon.totalRounds) {
      setTimeout(finishBalloonGame, 1500);
    } else {
      setTimeout(renderBalloonRound, 1500);
    }
  }

  function finishBalloonGame() {
    const { score, totalRounds } = state.balloon;
    const perfect  = totalRounds * 10;
    const pct      = Math.round((score / perfect) * 100);
    const trophy   = pct >= 80 ? "🏆🎉" : pct >= 50 ? "😊⭐" : "💪🎈";
    ui.funPrompt.textContent    = `Game over! Score: ${score} / ${perfect}`;
    ui.funFeedback.textContent  = `You got ${pct}% — ${trophy}  Play again?`;
    ui.funFeedback.classList.remove("good", "try");
    ui.balloonArea.innerHTML    = `<div class="balloon-trophy">${trophy}</div>`;
    // Re-enable back button area for a fresh start next time
    ui.funBackBtn.textContent   = "Back to Menu";
  }

  // ─── Memory Match Game ─────────────────────────────────────────────────────────

  function startMemoryGame() {
    // Pick 6 random emojis → 12 cards (6 pairs)
    const chosen = shuffle([...memoryEmojis]).slice(0, 6);
    const cards  = shuffle([...chosen, ...chosen]);
    state.memory = {
      cards, flipped: [], matched: new Set(), moves: 0, pairs: 0, totalPairs: 6, busy: false
    };
    showView(views.memoryGame);
    renderMemoryGrid();
  }

  function renderMemoryGrid() {
    const mem = state.memory;
    ui.memoryMoves.textContent    = `Moves: ${mem.moves}`;
    ui.memoryPairs.textContent    = `Pairs: ${mem.pairs} / ${mem.totalPairs}`;
    ui.memoryFeedback.textContent = "";
    ui.memoryGrid.innerHTML       = "";

    mem.cards.forEach((emoji, i) => {
      const card = document.createElement("button");
      card.className = "memory-card";
      card.dataset.index = i;
      if (mem.matched.has(i)) {
        card.textContent = emoji;
        card.classList.add("matched");
        card.disabled = true;
      } else {
        card.textContent = "?";
      }
      card.addEventListener("click", () => onCardFlip(i));
      ui.memoryGrid.appendChild(card);
    });
  }

  function onCardFlip(index) {
    const mem = state.memory;
    if (mem.busy) return;
    if (mem.matched.has(index)) return;
    if (mem.flipped.includes(index)) return;

    // Reveal card
    const cardEl = ui.memoryGrid.children[index];
    cardEl.textContent = mem.cards[index];
    cardEl.classList.add("flipped");
    mem.flipped.push(index);

    if (mem.flipped.length === 2) {
      mem.moves++;
      mem.busy = true;
      ui.memoryMoves.textContent = `Moves: ${mem.moves}`;

      const [a, b] = mem.flipped;
      if (mem.cards[a] === mem.cards[b]) {
        // Match!
        mem.matched.add(a);
        mem.matched.add(b);
        mem.pairs++;
        ui.memoryPairs.textContent = `Pairs: ${mem.pairs} / ${mem.totalPairs}`;
        ui.memoryFeedback.textContent = pickRandom(data.app.praiseMessages);
        playFeedbackTone(true);
        ui.memoryGrid.children[a].classList.add("matched");
        ui.memoryGrid.children[b].classList.add("matched");
        mem.flipped = [];
        mem.busy = false;

        if (mem.pairs === mem.totalPairs) {
          setTimeout(finishMemoryGame, 800);
        }
      } else {
        // No match
        playFeedbackTone(false);
        setTimeout(() => {
          ui.memoryGrid.children[a].textContent = "?";
          ui.memoryGrid.children[a].classList.remove("flipped");
          ui.memoryGrid.children[b].textContent = "?";
          ui.memoryGrid.children[b].classList.remove("flipped");
          mem.flipped = [];
          mem.busy = false;
        }, 800);
      }
    }
  }

  function finishMemoryGame() {
    const { moves, totalPairs } = state.memory;
    const trophy = moves <= totalPairs * 2 ? "🏆🎉" : moves <= totalPairs * 3 ? "😊⭐" : "💪🃏";
    ui.memoryFeedback.textContent = `All ${totalPairs} pairs found in ${moves} moves! ${trophy}`;
    ui.memoryGrid.innerHTML = `<div class="balloon-trophy">${trophy}</div>`;
  }

  // ─── Color Tap Game ────────────────────────────────────────────────────────────

  function startColorGame() {
    state.colorTap = { round: 0, score: 0, totalRounds: 10, target: null, answered: false };
    showView(views.colorGame);
    renderColorRound();
  }

  function renderColorRound() {
    const ct = state.colorTap;
    ct.round   += 1;
    ct.answered = false;

    ui.colorRound.textContent    = `Round ${ct.round} / ${ct.totalRounds}`;
    ui.colorScore.textContent    = `Score: ${ct.score}`;
    ui.colorFeedback.textContent = "";
    ui.colorFeedback.classList.remove("good", "try");

    // Pick 4 unique colors and designate one as the target
    const chosen = shuffle([...colorPool]).slice(0, 4);
    ct.target = pickRandom(chosen);

    // Show name in a DIFFERENT color for extra fun (Stroop-like)
    const wrongColors = chosen.filter((c) => c.name !== ct.target.name);
    const displayColor = wrongColors.length > 0 ? pickRandom(wrongColors).hex : ct.target.hex;

    ui.colorPrompt.innerHTML = `Tap the <span style="color:${displayColor};font-weight:800;font-size:1.3em">${ct.target.name}</span> button!`;
    speakText(`Tap the ${ct.target.name} button`, "en-US");

    ui.colorBtnArea.innerHTML = "";
    chosen.forEach((color) => {
      const btn = document.createElement("button");
      btn.className = "color-btn";
      btn.style.background = color.hex;
      btn.textContent = color.name;
      btn.addEventListener("click", () => onColorTap(btn, color));
      ui.colorBtnArea.appendChild(btn);
    });
  }

  function onColorTap(btnEl, color) {
    if (state.colorTap.answered) return;
    state.colorTap.answered = true;

    const isCorrect = color.name === state.colorTap.target.name;
    ui.colorBtnArea.querySelectorAll("button").forEach((b) => { b.disabled = true; });

    if (isCorrect) {
      state.colorTap.score += 10;
      btnEl.classList.add("balloon-pop");
      ui.colorFeedback.textContent = pickRandom(data.app.praiseMessages);
      ui.colorFeedback.classList.add("good");
      playFeedbackTone(true);
    } else {
      btnEl.classList.add("balloon-shake");
      ui.colorBtnArea.querySelectorAll("button").forEach((b) => {
        if (b.textContent === state.colorTap.target.name) b.classList.add("balloon-correct");
      });
      ui.colorFeedback.textContent = `${pickRandom(data.app.tryMessages)} It was ${state.colorTap.target.name}!`;
      ui.colorFeedback.classList.add("try");
      playFeedbackTone(false);
    }

    ui.colorScore.textContent = `Score: ${state.colorTap.score}`;

    if (state.colorTap.round >= state.colorTap.totalRounds) {
      setTimeout(finishColorGame, 1500);
    } else {
      setTimeout(renderColorRound, 1500);
    }
  }

  function finishColorGame() {
    const { score, totalRounds } = state.colorTap;
    const perfect = totalRounds * 10;
    const pct     = Math.round((score / perfect) * 100);
    const trophy  = pct >= 80 ? "🏆🎉" : pct >= 50 ? "😊⭐" : "💪🎨";
    ui.colorPrompt.textContent    = `Game over! Score: ${score} / ${perfect}`;
    ui.colorFeedback.textContent  = `You got ${pct}% — ${trophy}  Play again?`;
    ui.colorFeedback.classList.remove("good", "try");
    ui.colorBtnArea.innerHTML     = `<div class="balloon-trophy">${trophy}</div>`;
  }

  // ─── New Fun Games ────────────────────────────────────────────────────────────

  function startSnakeGame() {
    showView(views.snakeGame);
    setTimeout(() => {
      if (globalThis.funGames?.snake) {
        globalThis.funGames.snake.init();
      }
    }, 100);
  }

  function startCatchGame() {
    showView(views.catchGame);
    setTimeout(() => {
      if (globalThis.funGames?.catch) {
        globalThis.funGames.catch.init();
      }
    }, 100);
  }

  function startBalloonPopSpeed() {
    showView(views.balloonPopGame);
    setTimeout(() => {
      if (globalThis.funGames?.balloonPopSpeed) {
        globalThis.funGames.balloonPopSpeed.init();
      }
    }, 100);
  }

  function startNumberJumpGame() {
    showView(views.numberJumpGame);
    setTimeout(() => {
    // Simple number jump game implementation
    const canvas = document.getElementById('jumpCanvas');
    const ctx = canvas.getContext('2d');
    const jumpScore = document.getElementById('jumpScore');
    const jumpTarget = document.getElementById('jumpTarget');
    const jumpFeedback = document.getElementById('jumpFeedback');
    
    let score = 0;
    let targetNum = Math.floor(Math.random() * 10) + 1;
    let platforms = [];
    let gameActive = true;
    
    jumpScore.textContent = `Score: ${score}`;
    jumpTarget.textContent = `Jump on: ${targetNum}`;
    jumpFeedback.textContent = '';
    
    // Generate platforms with numbers
    for (let i = 0; i < 8; i++) {
      platforms.push({
        x: (i % 4) * 100,
        y: Math.floor(i / 4) * 200 + 50,
        width: 90,
        height: 40,
        number: Math.floor(Math.random() * 10) + 1
      });
    }
    
    // Make sure at least one has the target number
    platforms[Math.floor(Math.random() * platforms.length)].number = targetNum;
    
    function drawGame() {
      ctx.fillStyle = '#FFE4B5';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      platforms.forEach(platform => {
        ctx.fillStyle = platform.number === targetNum ? '#4CAF50' : '#2196F3';
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
        
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(platform.number, platform.x + platform.width / 2, platform.y + platform.height / 2);
      });
    }
    
    const handleJumpClick = (e) => {
      if (!gameActive) return;
      
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      platforms.forEach(platform => {
        if (x >= platform.x && x <= platform.x + platform.width &&
            y >= platform.y && y <= platform.y + platform.height) {
          if (platform.number === targetNum) {
            score += 10;
            jumpFeedback.textContent = '✓ Correct! ' + pickRandom(data.app.praiseMessages);
            jumpFeedback.className = 'feedback good';
            playFeedbackTone(true);
            
            // New target
            targetNum = Math.floor(Math.random() * 10) + 1;
            jumpTarget.textContent = `Jump on: ${targetNum}`;
            
            // Regenerate platforms
            platforms = [];
            for (let i = 0; i < 8; i++) {
              platforms.push({
                x: (i % 4) * 100,
                y: Math.floor(i / 4) * 200 + 50,
                width: 90,
                height: 40,
                number: Math.floor(Math.random() * 10) + 1
              });
            }
            platforms[Math.floor(Math.random() * platforms.length)].number = targetNum;
            drawGame();
          } else {
            jumpFeedback.textContent = '✗ Wrong number! Try again!';
            jumpFeedback.className = 'feedback try';
            playFeedbackTone(false);
          }
          jumpScore.textContent = `Score: ${score}`;
        }
      });
    };
    
    canvas.onclick = handleJumpClick;
    gameCleanup.addCanvasHandler(canvas, 'onclick');
    
    drawGame();
    }, 100);
  }

  function startColorMatchSpeed() {
    showView(views.colorMatchSpeedGame);
    setTimeout(() => {
    const colorSpeedWord = document.getElementById('colorSpeedWord');
    const colorSpeedButtons = document.getElementById('colorSpeedButtons');
    const colorSpeedScore = document.getElementById('colorSpeedScore');
    const colorSpeedTime = document.getElementById('colorSpeedTime');
    const colorSpeedFeedback = document.getElementById('colorSpeedFeedback');
    
    let score = 0;
    let timeLeft = 45;
    let currentColor = null;
    
    const colors = [
      { name: 'Red', hex: '#f44336' },
      { name: 'Blue', hex: '#2196F3' },
      { name: 'Green', hex: '#4CAF50' },
      { name: 'Yellow', hex: '#FFC107' }
    ];
    
    function nextRound() {
      currentColor = pickRandom(colors);
      const wrongColor = pickRandom(colors.filter(c => c.name !== currentColor.name));
      
      colorSpeedWord.textContent = currentColor.name;
      colorSpeedWord.style.color = wrongColor.hex; // Stroop effect!
      
      colorSpeedButtons.innerHTML = '';
      shuffle([...colors]).forEach(color => {
        const btn = document.createElement('button');
        btn.className = 'color-speed-btn';
        btn.textContent = color.name;
        btn.style.background = color.hex;
        btn.onclick = () => {
          if (color.name === currentColor.name) {
            score += 5;
            colorSpeedFeedback.textContent = '✓ Correct!';
            colorSpeedFeedback.className = 'feedback good';
            playFeedbackTone(true);
          } else {
            colorSpeedFeedback.textContent = '✗ Wrong!';
            colorSpeedFeedback.className = 'feedback try';
            playFeedbackTone(false);
          }
          colorSpeedScore.textContent = `Score: ${score}`;
          const roundTimer = setTimeout(nextRound, 500);
          gameCleanup.addTimer(roundTimer);
        };
        colorSpeedButtons.appendChild(btn);
      });
    }
    
    const timer = setInterval(() => {
      timeLeft--;
      colorSpeedTime.textContent = `Time: ${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(timer);
        colorSpeedWord.textContent = 'Game Over!';
        colorSpeedButtons.innerHTML = `<div style="grid-column: span 2; text-align: center; font-size: 24px;">
          Final Score: ${score} 🌈
        </div>`;
      }
    }, 1000);
    gameCleanup.addInterval(timer);
    
    nextRound();
    }, 100);
  }

  function startMazeGame() {
    showView(views.mazeGame);
    setTimeout(() => {
    const canvas = document.getElementById('mazeCanvas');
    const ctx = canvas.getContext('2d');
    const mazeLevel = document.getElementById('mazeLevel');
    const mazeTime = document.getElementById('mazeTime');
    const mazeFeedback = document.getElementById('mazeFeedback');
    
    const cellSize = 40;
    const gridSize = 10;
    let player = { x: 0, y: 0 };
    let goal = { x: 9, y: 9 };
    let walls = [];
    let startTime = Date.now();
    let level = 1;
    
    // Simple maze generation - create some random walls
    function generateMaze() {
      walls = [];
      for (let i = 0; i < 30; i++) {
        walls.push({
          x: Math.floor(Math.random() * gridSize),
          y: Math.floor(Math.random() * gridSize)
        });
      }
      // Ensure start and goal are not walls
      walls = walls.filter(w => !(w.x === 0 && w.y === 0) && !(w.x === goal.x && w.y === goal.y));
    }
    
    function drawMaze() {
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      ctx.strokeStyle = '#ddd';
      for (let i = 0; i <= gridSize; i++) {
        ctx.beginPath();
        ctx.moveTo(i * cellSize, 0);
        ctx.lineTo(i * cellSize, canvas.height);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, i * cellSize);
        ctx.lineTo(canvas.width, i * cellSize);
        ctx.stroke();
      }
      
      // Draw walls
      ctx.fillStyle = '#333';
      walls.forEach(wall => {
        ctx.fillRect(wall.x * cellSize, wall.y * cellSize, cellSize, cellSize);
      });
      
      // Draw goal
      ctx.font = '30px Arial';
      ctx.fillText('⭐', goal.x * cellSize + 5, goal.y * cellSize + 30);
      
      // Draw player
      ctx.fillStyle = '#4CAF50';
      ctx.beginPath();
      ctx.arc(
        player.x * cellSize + cellSize / 2,
        player.y * cellSize + cellSize / 2,
        cellSize / 3,
        0,
        Math.PI * 2
      );
      ctx.fill();
      
      // Update time
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      mazeTime.textContent = `Time: ${elapsed}s`;
    }
    
    function movePlayer(dx, dy) {
      const newX = player.x + dx;
      const newY = player.y + dy;
      
      // Check bounds
      if (newX < 0 || newX >= gridSize || newY < 0 || newY >= gridSize) return;
      
      // Check walls
      if (walls.some(w => w.x === newX && w.y === newY)) return;
      
      player.x = newX;
      player.y = newY;
      
      drawMaze();
      
      // Check win
      if (player.x === goal.x && player.y === goal.y) {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        mazeFeedback.textContent = `Level ${level} complete in ${elapsed}s! 🎉`;
        mazeFeedback.className = 'feedback good';
        level++;
        mazeLevel.textContent = `Level: ${level}`;
        
        // Reset for next level
        const levelTimer = setTimeout(() => {
          player = { x: 0, y: 0 };
          startTime = Date.now();
          generateMaze();
          drawMaze();
          mazeFeedback.textContent = '';
        }, 2000);
        gameCleanup.addTimer(levelTimer);
      }
    }
    
    const handleKey = (e) => {
      if (e.key === 'ArrowUp') movePlayer(0, -1);
      else if (e.key === 'ArrowDown') movePlayer(0, 1);
      else if (e.key === 'ArrowLeft') movePlayer(-1, 0);
      else if (e.key === 'ArrowRight') movePlayer(1, 0);
    };
    
    document.addEventListener('keydown', handleKey);
    gameCleanup.addListener(document, 'keydown', handleKey);
    
    generateMaze();
    drawMaze();
    }, 100);
  }

  function startBubbleBlast() {
    showView(views.bubbleGame);
    setTimeout(() => {
    const canvas = document.getElementById('bubbleCanvas');
    const ctx = canvas.getContext('2d');
    const bubbleScore = document.getElementById('bubbleScore');
    const bubbleFeedback = document.getElementById('bubbleFeedback');
    
    const cols = 8;
    const rows = 10;
    const bubbleSize = 45;
    const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#a8e6cf', '#ff8e53'];
    let score = 0;
    let target = 100;
    let grid = [];
    
    // Initialize grid
    function initGrid() {
      grid = [];
      for (let r = 0; r < rows; r++) {
        grid[r] = [];
        for (let c = 0; c < cols; c++) {
          grid[r][c] = pickRandom(colors);
        }
      }
    }
    
    function drawBubbles() {
      ctx.fillStyle = '#222';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (grid[r][c]) {
            ctx.fillStyle = grid[r][c];
            ctx.beginPath();
            ctx.arc(
              c * bubbleSize + bubbleSize / 2,
              r * bubbleSize + bubbleSize / 2,
              bubbleSize / 2 - 2,
              0,
              Math.PI * 2
            );
            ctx.fill();
            
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }
      }
      
      bubbleScore.textContent = `Score: ${score}`;
      if (score >= target) {
        bubbleFeedback.textContent = 'You won! 🎉';
        bubbleFeedback.className = 'feedback good';
      }
    }
    
    function findConnected(r, c, color, visited = new Set()) {
      const key = `${r},${c}`;
      if (visited.has(key)) return [];
      if (r < 0 || r >= rows || c < 0 || c >= cols) return [];
      if (grid[r][c] !== color) return [];
      
      visited.add(key);
      let connected = [{r, c}];
      
      connected = connected.concat(findConnected(r-1, c, color, visited));
      connected = connected.concat(findConnected(r+1, c, color, visited));
      connected = connected.concat(findConnected(r, c-1, color, visited));
      connected = connected.concat(findConnected(r, c+1, color, visited));
      
      return connected;
    }
    
    const handleBubbleClick = (e) => {
      if (score >= target) return;
      
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const c = Math.floor(x / bubbleSize);
      const r = Math.floor(y / bubbleSize);
      
      if (r >= 0 && r < rows && c >= 0 && c < cols && grid[r][c]) {
        const color = grid[r][c];
        const connected = findConnected(r, c, color);
        
        if (connected.length >= 2) {
          // Pop bubbles
          connected.forEach(pos => {
            grid[pos.r][pos.c] = null;
          });
          
          score += connected.length * 5;
          playFeedbackTone(true);
          
          // Drop bubbles down
          for (let col = 0; col < cols; col++) {
            let writeRow = rows - 1;
            for (let row = rows - 1; row >= 0; row--) {
              if (grid[row][col]) {
                grid[writeRow][col] = grid[row][col];
                if (writeRow !== row) grid[row][col] = null;
                writeRow--;
              }
            }
          }
          
          drawBubbles();
        }
      }
    };
    
    canvas.onclick = handleBubbleClick;
    gameCleanup.addCanvasHandler(canvas, 'onclick');
    
    initGrid();
    drawBubbles();
    }, 100);
  }

  // ─── Snap Game ────────────────────────────────────────────────────────────────

  function startSnapGame() {
    showView(views.snapGame);
    setTimeout(() => {
      const cards = ['🍎','🍊','🍋','🍌','🍉','🍓','🍇','🍑'];
      let score = 0;
      let round = 1;
      const totalRounds = 15;
      let currentCard1 = '';
      let currentCard2 = '';
      let snapButtonEnabled = false;
      let snapTimer = null;
      let isMatching = false;
      
      const card1El = document.getElementById('snapCard1');
      const card2El = document.getElementById('snapCard2');
      const snapButton = document.getElementById('snapButton');
      const snapScore = document.getElementById('snapScore');
      const snapRound = document.getElementById('snapRound');
      const snapFeedback = document.getElementById('snapFeedback');
      const snapInstruction = document.getElementById('snapInstruction');
      
      if (!card1El || !card2El || !snapButton) return;
      
      function pickRandomCard() {
        return cards[Math.floor(Math.random() * cards.length)];
      }
      
      function updateScore() {
        snapScore.textContent = `Score: ${score}`;
        snapRound.textContent = `Round: ${round}/${totalRounds}`;
      }
      
      function showCards() {
        currentCard1 = pickRandomCard();
        currentCard2 = pickRandomCard();
        
        // 30% chance of matching cards
        if (Math.random() < 0.3) {
          currentCard2 = currentCard1;
          isMatching = true;
        } else {
          // Make sure they're different
          while (currentCard2 === currentCard1) {
            currentCard2 = pickRandomCard();
          }
          isMatching = false;
        }
        
        // Animate card flip
        card1El.style.animation = 'none';
        card2El.style.animation = 'none';
        const flipTimer = setTimeout(() => {
          card1El.style.animation = 'cardFlip 0.5s ease-out';
          card2El.style.animation = 'cardFlip 0.5s ease-out';
          card1El.textContent = currentCard1;
          card2El.textContent = currentCard2;
          
          if (isMatching) {
            card1El.classList.add('match');
            card2El.classList.add('match');
          } else {
            card1El.classList.remove('match');
            card2El.classList.remove('match');
          }
        }, 50);
        gameCleanup.addTimer(flipTimer);
        
        // Enable snap button for matches
        if (isMatching) {
          snapButton.style.display = 'block';
          snapButtonEnabled = true;
          snapInstruction.textContent = '⚡ They match! Click SNAP! ⚡';
          
          // Auto-advance after 2 seconds if not clicked
          snapTimer = setTimeout(() => {
            if (snapButtonEnabled) {
              snapFeedback.textContent = '⏰ Too slow! You missed it!';
              snapFeedback.className = 'feedback try';
              score = Math.max(0, score - 5);
              updateScore();
              nextRound();
            }
          }, 2000);
          gameCleanup.addTimer(snapTimer);
        } else {
          snapButton.style.display = 'none';
          snapButtonEnabled = false;
          snapInstruction.textContent = 'Watch the cards...';
          
          // Auto-advance to next round after 1.5 seconds
          const autoTimer = setTimeout(() => {
            nextRound();
          }, 1500);
          gameCleanup.addTimer(autoTimer);
        }
      }
      
      function onSnapClick() {
        if (!snapButtonEnabled) {
          // Clicked when not matching - penalty
          snapFeedback.textContent = '❌ Wrong! Cards don\'t match!';
          snapFeedback.className = 'feedback try';
          score = Math.max(0, score - 10);
          playFeedbackTone(false);
          updateScore();
          return;
        }
        
        // Correct snap!
        if (snapTimer) clearTimeout(snapTimer);
        snapButtonEnabled = false;
        score += 20;
        snapFeedback.textContent = '✓ Perfect SNAP! ' + pickRandom(data.app.praiseMessages);
        snapFeedback.className = 'feedback good';
        playFeedbackTone(true);
        updateScore();
        
        const continueTimer = setTimeout(() => {
          nextRound();
        }, 1000);
        gameCleanup.addTimer(continueTimer);
      }
      
      function nextRound() {
        if (snapTimer) {
          clearTimeout(snapTimer);
          snapTimer = null;
        }
        snapFeedback.textContent = '';
        round++;
        
        if (round > totalRounds) {
          endGame();
        } else {
          updateScore();
          const nextRoundTimer = setTimeout(showCards, 800);
          gameCleanup.addTimer(nextRoundTimer);
        }
      }
      
      function endGame() {
        snapButton.style.display = 'none';
        card1El.textContent = '🏆';
        card2El.textContent = '🎉';
        snapInstruction.textContent = 'Game Complete!';
        snapFeedback.textContent = `Final Score: ${score} points! ${score >= 200 ? '🏆 Amazing!' : score >= 100 ? '⭐ Great job!' : '💪 Keep practicing!'}`;
        snapFeedback.className = 'feedback good';
      }
      
      // Set up snap button click handler
      snapButton.onclick = onSnapClick;
      gameCleanup.addCanvasHandler(snapButton, 'onclick');
      
      // Start the game
      updateScore();
      snapFeedback.textContent = '';
      const startTimer = setTimeout(showCards, 1000);
      gameCleanup.addTimer(startTimer);
    }, 100);
  }

  // ─── Login & User Management ─────────────────────────────────────────────────

  function showLoginView() {
    showView(views.loginView);
    ui.userProfile.style.display = 'none';
    loadUserList();
  }

  function loadUserList() {
    const users = loadUsers();
    if (users.length > 0) {
      ui.userListContainer.style.display = 'block';
      ui.userList.innerHTML = users
        .sort((a, b) => b.totalScore - a.totalScore)
        .map(user => `
          <div class="user-item" data-username="${user.name}">
            <span class="user-item-name">${user.name}</span>
            <span class="user-item-score">⭐ ${user.totalScore}</span>
          </div>
        `).join('');
      
      // Add click handlers to user items
      ui.userList.querySelectorAll('.user-item').forEach(item => {
        item.addEventListener('click', () => {
          const userName = item.dataset.username;
          loginUser(userName);
        });
      });
    } else {
      ui.userListContainer.style.display = 'none';
    }
  }

  function loginUser(name) {
    if (!name || name.trim().length === 0) return;
    
    const userName = name.trim();
    createUser(userName);
    state.currentUser = userName;
    setCurrentUser(userName);
    
    ui.userGreeting.textContent = `👋 ${userName}`;
    ui.userProfile.style.display = 'flex';
    showView(views.mainMenu);
  }

  function logout() {
    state.currentUser = null;
    setCurrentUser('');
    showLoginView();
  }

  function showHistory() {
    if (!state.currentUser) return;
    
    const history = getUserHistory(state.currentUser);
    const totalScore = getUserTotalScore(state.currentUser);
    
    // Group history by subject
    const bySubject = {};
    history.forEach(entry => {
      if (!bySubject[entry.subjectId]) {
        bySubject[entry.subjectId] = [];
      }
      bySubject[entry.subjectId].push(entry);
    });
    
    // Calculate stats
    const totalSessions = history.length;
    const totalPossible = history.reduce((sum, entry) => sum + entry.total, 0);
    const avgScore = totalSessions > 0 ? Math.round((totalScore / totalPossible) * 100) : 0;
    
    let html = `
      <div class="history-stats">
        <div class="stat-card">
          <span class="stat-value">${totalScore}</span>
          <span class="stat-label">Total Score</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">${totalSessions}</span>
          <span class="stat-label">Sessions</span>
        </div>
        <div class="stat-card">
          <span class="stat-value">${avgScore}%</span>
          <span class="stat-label">Average</span>
        </div>
      </div>
    `;
    
    if (Object.keys(bySubject).length === 0) {
      html += '<p style="text-align: center; color: #6b7280; padding: 40px;">No learning history yet. Start playing to see your progress!</p>';
    } else {
      Object.keys(bySubject).forEach(subjectId => {
        const subject = data.curriculum[subjectId];
        if (!subject) return;
        
        const entries = bySubject[subjectId];
        const subjectTotal = entries.reduce((sum, e) => sum + e.score, 0);
        
        html += `
          <div class="history-section">
            <h3>${subject.icon} ${subject.name} <span style="color: #667eea;">(${subjectTotal} pts)</span></h3>
        `;
        
        entries.slice().reverse().slice(0, 5).forEach(entry => {
          const module = subject.modules.find(m => m.id === entry.moduleId);
          const moduleName = module ? module.title : entry.moduleId;
          const percentage = Math.round((entry.score / entry.total) * 100);
          
          html += `
            <div class="history-item">
              <span class="history-item-title">${moduleName}</span>
              <span class="history-item-score">
                ${entry.score}/${entry.total} <span style="color: #9ca3af;">(${percentage}%)</span>
              </span>
            </div>
          `;
        });
        
        if (entries.length > 5) {
          html += `<p style="text-align: center; color: #9ca3af; font-size: 14px; margin-top: 8px;">... and ${entries.length - 5} more sessions</p>`;
        }
        
        html += '</div>';
      });
    }
    
    ui.historyContent.innerHTML = html;
    ui.historyModal.style.display = 'flex';
  }

  // ─── Event wiring ─────────────────────────────────────────────────────────────

  // Login handlers
  ui.loginBtn.addEventListener("click", () => {
    const name = ui.nameInput.value;
    if (name.trim()) {
      loginUser(name);
    }
  });

  ui.nameInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && ui.nameInput.value.trim()) {
      loginUser(ui.nameInput.value);
    }
  });

  ui.logoutBtn.addEventListener("click", logout);
  ui.viewHistoryBtn.addEventListener("click", showHistory);
  ui.closeHistoryBtn.addEventListener("click", () => {
    ui.historyModal.style.display = 'none';
  });

  // Close modal on outside click
  ui.historyModal.addEventListener("click", (e) => {
    if (e.target === ui.historyModal) {
      ui.historyModal.style.display = 'none';
    }
  });

  document.querySelectorAll(".island").forEach((button) => {
    button.addEventListener("click", () => {
      const subject = button.dataset.subject;
      if (subject === "fun") {
        showView(views.funMenu);
      } else if (subject === "stories") {
        showStoryMenu();
      } else {
        state.subjectId = subject;
        renderSubjectHub();
      }
    });
  });

  // Fun menu game buttons
  document.querySelectorAll(".fun-game-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const game = btn.dataset.game;
      if (game === "balloon") startBalloonGame();
      else if (game === "memory") startMemoryGame();
      else if (game === "color")  startColorGame();
      else if (game === "snake") startSnakeGame();
      else if (game === "catch") startCatchGame();
      else if (game === "balloonpop") startBalloonPopSpeed();
      else if (game === "numberjump") startNumberJumpGame();
      else if (game === "colorspeed") startColorMatchSpeed();
      else if (game === "maze") startMazeGame();
      else if (game === "bubble") startBubbleBlast();
      else if (game === "snap") startSnapGame();
    });
  });

  ui.subjectBackBtn.addEventListener("click", () => { showView(views.mainMenu); });

  if (ui.speakBtn) {
    ui.speakBtn.addEventListener("click", () => {
      if (state.session && state.session.currentQuestion) {
        speakQuestion(state.session.currentQuestion);
      }
    });
  }

  ui.checkBtn.addEventListener("click", checkDragAnswer);
  ui.nextBtn.addEventListener("click", goNextQuestion);
  ui.exitLessonBtn.addEventListener("click", backToSubject);

  ui.replayBtn.addEventListener("click", () => {
    if (state.currentModule) startModule(state.currentModule.id);
  });

  ui.resultBackBtn.addEventListener("click", backToSubject);
  ui.homeBtn.addEventListener("click", () => { showView(views.mainMenu); });

  if (ui.funBackBtn) {
    ui.funBackBtn.addEventListener("click", () => { showView(views.funMenu); });
  }
  if (ui.funMenuBackBtn) {
    ui.funMenuBackBtn.addEventListener("click", () => { showView(views.mainMenu); });
  }
  if (ui.memoryBackBtn) {
    ui.memoryBackBtn.addEventListener("click", () => { showView(views.funMenu); });
  }
  if (ui.colorBackBtn) {
    ui.colorBackBtn.addEventListener("click", () => { showView(views.funMenu); });
  }

  // New fun game back buttons
  const snakeBackBtn = document.getElementById("snakeBackBtn");
  const snakeRestartBtn = document.getElementById("snakeRestartBtn");
  const catchBackBtn = document.getElementById("catchBackBtn");
  const catchRestartBtn = document.getElementById("catchRestartBtn");
  const balloonPopBackBtn = document.getElementById("balloonPopBackBtn");
  const jumpBackBtn = document.getElementById("jumpBackBtn");
  const jumpRestartBtn = document.getElementById("jumpRestartBtn");
  const colorSpeedBackBtn = document.getElementById("colorSpeedBackBtn");
  const mazeBackBtn = document.getElementById("mazeBackBtn");
  const mazeRestartBtn = document.getElementById("mazeRestartBtn");
  const bubbleBackBtn = document.getElementById("bubbleBackBtn");
  const bubbleRestartBtn = document.getElementById("bubbleRestartBtn");
  const snapBackBtn = document.getElementById("snapBackBtn");
  const snapRestartBtn = document.getElementById("snapRestartBtn");

  if (snakeBackBtn) snakeBackBtn.addEventListener("click", () => { 
    showView(views.funMenu); 
  });
  if (snakeRestartBtn) snakeRestartBtn.addEventListener("click", startSnakeGame);

  if (catchBackBtn) catchBackBtn.addEventListener("click", () => { 
    showView(views.funMenu); 
  });
  if (catchRestartBtn) catchRestartBtn.addEventListener("click", startCatchGame);

  if (balloonPopBackBtn) balloonPopBackBtn.addEventListener("click", () => { 
    showView(views.funMenu); 
  });

  if (jumpBackBtn) jumpBackBtn.addEventListener("click", () => { showView(views.funMenu); });
  if (jumpRestartBtn) jumpRestartBtn.addEventListener("click", startNumberJumpGame);

  if (colorSpeedBackBtn) colorSpeedBackBtn.addEventListener("click", () => { showView(views.funMenu); });

  if (mazeBackBtn) mazeBackBtn.addEventListener("click", () => { showView(views.funMenu); });
  if (mazeRestartBtn) mazeRestartBtn.addEventListener("click", startMazeGame);

  if (bubbleBackBtn) bubbleBackBtn.addEventListener("click", () => { showView(views.funMenu); });
  if (bubbleRestartBtn) bubbleRestartBtn.addEventListener("click", startBubbleBlast);

  if (snapBackBtn) snapBackBtn.addEventListener("click", () => { showView(views.funMenu); });
  if (snapRestartBtn) snapRestartBtn.addEventListener("click", startSnapGame);

  // ─── Story event listeners ────────────────────────────────────────────────────
  const storyMenuBackBtn = document.getElementById("storyMenuBackBtn");
  const storyBackBtn     = document.getElementById("storyBackBtn");
  const storyPrevBtn     = document.getElementById("storyPrevBtn");
  const storyNextBtn     = document.getElementById("storyNextBtn");
  const storyReadBtn     = document.getElementById("storyReadBtn");

  if (storyMenuBackBtn) storyMenuBackBtn.addEventListener("click", () => showView(views.mainMenu));
  if (storyBackBtn)     storyBackBtn.addEventListener("click", showStoryMenu);

  if (storyPrevBtn) {
    storyPrevBtn.addEventListener("click", () => {
      if (state.story.pageIndex > 0) {
        state.story.pageIndex--;
        renderStoryPage();
        const page = state.story.current.pages[state.story.pageIndex];
        speakText(page.speakText, "en-US");
      }
    });
  }

  if (storyNextBtn) {
    storyNextBtn.addEventListener("click", () => {
      const story = state.story.current;
      if (!story) return;
      if (state.story.pageIndex >= story.pages.length - 1) {
        showStoryMenu(); // Finished — back to story list
      } else {
        state.story.pageIndex++;
        renderStoryPage();
        const page = story.pages[state.story.pageIndex];
        speakText(page.speakText, "en-US");
      }
    });
  }

  if (storyReadBtn) {
    storyReadBtn.addEventListener("click", () => {
      const story = state.story.current;
      if (!story) return;
      const page = story.pages[state.story.pageIndex];
      speakText(page.speakText, "en-US");
    });
  }

  // Phonetic toggle
  const phoneticToggle = document.getElementById("phoneticToggle");
  if (phoneticToggle) {
    phoneticToggle.addEventListener("change", (e) => {
      state.phoneticsEnabled = e.target.checked;
      // Re-render current question if in lesson view
      if (state.session && state.session.currentQuestion) {
        renderQuestion();
      }
    });
  }

  // Test sound button
  const testSoundBtn = document.getElementById("testSoundBtn");
  if (testSoundBtn) {
    testSoundBtn.addEventListener("click", () => {
      console.log('🧪 Testing sound...');
      testSoundBtn.textContent = '🔊 Testing...';
      
      // Test English first
      speakText("Hello", "en-US");
      
      // Then test Hindi
      setTimeout(() => {
        speakText("नमस्ते", "hi-IN");
      }, 1500);
      
      // Then test Kannada
      setTimeout(() => {
        speakText("ನಮಸ್ಕಾರ", "kn-IN");
      }, 3000);
      
      // Reset button text
      setTimeout(() => {
        testSoundBtn.textContent = '🔊 Test';
        console.log('✅ Sound test complete. Did you hear 3 words? (English, Hindi, Kannada)');
      }, 4500);
    });
  }

  // ─── Initialization ───────────────────────────────────────────────────────────

  // Check if user is already logged in
  if (state.currentUser) {
    ui.userGreeting.textContent = `👋 ${state.currentUser}`;
    ui.userProfile.style.display = 'flex';
    showView(views.mainMenu);
  } else {
    showLoginView();
  }
})();
