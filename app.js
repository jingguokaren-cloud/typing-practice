// ============================================
// 打字练习 — 核心游戏逻辑 v2
// 功能：指法教学、字母认识、字母连打、单词挑战、收藏夹
// ============================================

(function () {
  'use strict';

  // --- DOM ---
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const scoreEl = $('#scoreValue');
  const comboEl = $('#comboValue');
  const accuracyEl = $('#accuracyValue');
  const wpmEl = $('#wpmValue');
  const practiceArea = $('#practiceArea');
  const btnStart = $('#btnStart');
  const keyboard = $('#keyboard');
  const lessonSelector = $('#lessonSelector');
  const celebration = $('#celebration');
  const celebrationTitle = $('#celebrationTitle');
  const celebrationStats = $('#celebrationStats');
  const btnContinue = $('#btnContinue');
  const soundToggle = $('#soundToggle');
  const highlightToggle = $('#highlightToggle');
  const highlightStatus = $('#highlightStatus');
  const highlightIcon = $('#highlightIcon');
  const highlightToggleBar = $('#highlightToggleBar');

  // --- State ---
  let currentMode = 'letters'; // 'guide' | 'letters' | 'speed' | 'words' | 'favorites'
  let isPlaying = false;
  let soundEnabled = true;
  let highlightEnabled = false;
  let chineseHintEnabled = true;
  let audioDictationEnabled = false;

  // Game stats
  let score = 0;
  let combo = 0;
  let maxCombo = 0;
  let totalKeys = 0;
  let correctKeys = 0;
  let startTime = 0;
  let charCount = 0;

  // Current challenge
  let targetChars = [];
  let currentIndex = 0;
  let currentWrongCount = 0;
  let challengeQueue = [];
  let queueIndex = 0;

  // Speed mode
  let speedTimer = null;
  let speedTimeLeft = 0;
  const SPEED_TIME = 60;

  // Word mode
  let selectedLesson = 1;
  let selectedFavLesson = 'all';
  let selectedFavGroup = 'all';

  // Track if current word had any errors (for auto-add to favorites)
  let currentWordHadError = false;

  // --- Favorites (localStorage) ---
  // Each fav: { en, cn, lesson, lessonTitle, correctStreak }
  const FAV_KEY = 'typing_master_favorites';

  function loadFavorites() {
    try {
      const favs = JSON.parse(localStorage.getItem(FAV_KEY)) || [];
      return favs.map(f => ({
        ...f,
        correctStreak: f.correctStreak || 0,
        lesson: f.lesson || 0,
        lessonTitle: f.lessonTitle || ''
      }));
    } catch { return []; }
  }

  function saveFavorites(favs) {
    localStorage.setItem(FAV_KEY, JSON.stringify(favs));
    updateFavBadge();
  }

  function addToFavorites(en, cn, lesson, lessonTitle) {
    const favs = loadFavorites();
    const existing = favs.find(f => f.en.toLowerCase() === en.toLowerCase());
    if (existing) {
      existing.correctStreak = 0;
      saveFavorites(favs);
    } else {
      favs.push({ en, cn, lesson: lesson || 0, lessonTitle: lessonTitle || '', correctStreak: 0 });
      saveFavorites(favs);
    }
  }

  function recordFavCorrect(en) {
    const favs = loadFavorites();
    const fav = favs.find(f => f.en.toLowerCase() === en.toLowerCase());
    if (fav) {
      fav.correctStreak = (fav.correctStreak || 0) + 1;
      if (fav.correctStreak >= 5) {
        const filtered = favs.filter(f => f.en.toLowerCase() !== en.toLowerCase());
        saveFavorites(filtered);
        return true;
      }
      saveFavorites(favs);
    }
    return false;
  }

  function recordFavWrong(en) {
    // Cumulative mode: do not reset streak on wrong answer
  }

  function removeFromFavorites(en) {
    let favs = loadFavorites();
    favs = favs.filter(f => f.en.toLowerCase() !== en.toLowerCase());
    saveFavorites(favs);
  }

  function clearAllFavorites() {
    saveFavorites([]);
  }

  function updateFavBadge() {
    const badge = $('.fav-badge');
    if (!badge) return;
    const count = loadFavorites().length;
    badge.textContent = count;
    badge.classList.toggle('hidden', count === 0);
  }

  // --- Finger Map (for guide) ---
  const fingerMap = {
    'left-pinky': { label: '左小指', keys: ['Q', 'A', 'Z'], color: 'var(--finger-left-pinky)' },
    'left-ring': { label: '左无名指', keys: ['W', 'S', 'X'], color: 'var(--finger-left-ring)' },
    'left-middle': { label: '左中指', keys: ['E', 'D', 'C'], color: 'var(--finger-left-middle)' },
    'left-index': { label: '左食指', keys: ['R', 'T', 'F', 'G', 'V', 'B'], color: 'var(--finger-left-index)' },
    'right-index': { label: '右食指', keys: ['Y', 'U', 'H', 'J', 'N', 'M'], color: 'var(--finger-right-index)' },
    'right-middle': { label: '右中指', keys: ['I', 'K'], color: 'var(--finger-right-middle)' },
    'right-ring': { label: '右无名指', keys: ['O', 'L'], color: 'var(--finger-right-ring)' },
    'right-pinky': { label: '右小指', keys: ['P'], color: 'var(--finger-right-pinky)' },
    'thumb': { label: '大拇指', keys: ['SPACE'], color: 'var(--finger-thumb)' },
  };

  // --- Audio (Web Audio API) ---
  let audioCtx = null;
  function getAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  }
  function playTone(freq, duration, type = 'sine', volume = 0.15) {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type; osc.frequency.value = freq;
      gain.gain.value = volume;
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain); gain.connect(ctx.destination);
      osc.start(); osc.stop(ctx.currentTime + duration);
    } catch (e) { }
  }
  function playCorrect() { playTone(880, 0.12, 'sine', 0.12); }
  function playWrong() { playTone(220, 0.25, 'square', 0.08); }
  function playCombo() { playTone(1200, 0.08, 'sine', 0.1); setTimeout(() => playTone(1500, 0.1, 'sine', 0.1), 80); }
  function playComplete() { [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => playTone(f, 0.2, 'sine', 0.12), i * 120)); }

  // --- Particles ---
  function spawnParticles(x, y, color, count = 8) {
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = x + 'px'; p.style.top = y + 'px'; p.style.background = color;
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5);
      const dist = 30 + Math.random() * 50;
      p.style.setProperty('--dx', Math.cos(angle) * dist + 'px');
      p.style.setProperty('--dy', Math.sin(angle) * dist + 'px');
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 800);
    }
  }

  // --- Stats ---
  function updateStats() {
    scoreEl.textContent = score;
    comboEl.textContent = combo;
    accuracyEl.textContent = totalKeys > 0 ? Math.round((correctKeys / totalKeys) * 100) + '%' : '100%';
    if (startTime > 0) {
      const minutes = (Date.now() - startTime) / 60000;
      if (minutes > 0.05) wpmEl.textContent = Math.round((charCount / 5) / minutes);
    }
  }

  // --- Keyboard Highlight ---
  function clearKeyHighlights() {
    $$('.key').forEach(k => k.classList.remove('highlight', 'pressed', 'correct-flash', 'wrong-flash'));
  }

  function highlightKey(char) {
    clearKeyHighlights();
    if (!highlightEnabled) return;
    const upper = char.toUpperCase();
    const keyEl = $(`.key[data-key="${upper === ' ' ? ' ' : upper}"]`);
    if (keyEl) keyEl.classList.add('highlight');
  }

  function flashKey(char, type) {
    const upper = char.toUpperCase();
    const keyEl = $(`.key[data-key="${upper === ' ' ? ' ' : upper}"]`);
    if (!keyEl) return;
    keyEl.classList.remove('highlight', 'correct-flash', 'wrong-flash');
    void keyEl.offsetWidth;
    keyEl.classList.add(type === 'correct' ? 'correct-flash' : 'wrong-flash');
    setTimeout(() => keyEl.classList.remove('correct-flash', 'wrong-flash'), 300);
  }

  // --- Render Target ---
  function renderTarget() {
    if (!isPlaying) return;

    let html = '';
    const currentWord = challengeQueue[queueIndex];

    // Chinese hint
    const isWordLike = currentMode === 'words' || currentMode === 'favorites';
    if (isWordLike && currentWord && currentWord.cn && chineseHintEnabled) {
      // In dictation mode without Chinese, the user still might need to replay sound, let's just show Chinese if enabled
      html += `<div class="chinese-hint">🇨🇳 ${currentWord.cn}</div>`;
    }

    if (isWordLike && audioDictationEnabled) {
      html += `<div class="audio-replay" style="cursor:pointer; font-size: 2rem; margin-bottom: 20px;" onclick="playDictationWord()">🔊 重播读音</div>`;
    }

    // Target characters
    // if dictation mode is on, we don't want to show any character boxes until they are typed
    // actually they want to see the blanks? Let's hide the characters
    const hiddenClass = isWordLike ? ' hidden-word' : '';
    html += `<div class="target-display${hiddenClass}">`;
    targetChars.forEach((ch, i) => {
      let cls = 'waiting';

      if (i < currentIndex) {
        cls = 'done';
      } else if (audioDictationEnabled) {
        cls = 'waiting dictation-hidden'; // keep blank visible but text invisible
      } else if (i === currentIndex && highlightEnabled) {
        cls = 'current';
      }
      const display = ch === ' ' ? '&nbsp;' : ch;
      html += `<span class="char ${cls}" id="char-${i}">${display}</span>`;
    });
    html += '</div>';

    // Progress
    const progressPct = challengeQueue.length > 0 ? Math.round((queueIndex / challengeQueue.length) * 100) : 0;
    html += `<div class="progress-bar"><div class="progress-fill" style="width:${progressPct}%"></div></div>`;

    // Info line
    if (currentMode === 'speed') {
      html += `<div class="timer-bar"><div class="timer-fill" id="timerFill" style="width:${(speedTimeLeft / SPEED_TIME) * 100}%"></div></div>`;
      html += `<div class="word-info">剩余 ${speedTimeLeft} 秒</div>`;
    } else {
      html += `<div class="word-info">${queueIndex + 1} / ${challengeQueue.length}</div>`;
    }

    html += '<div class="input-hint">在键盘上按下对应的键 ⬆️</div>';

    practiceArea.innerHTML = html;

    if (currentIndex < targetChars.length) {
      highlightKey(targetChars[currentIndex]);
    }
  }

  // --- Generate Challenges ---
  function generateLetterChallenge() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters.map(l => ({ text: l }));
  }

  function generateSpeedChallenge() {
    const letters = [];
    for (let i = 0; i < 200; i++) {
      letters.push({ text: String.fromCharCode(65 + Math.floor(Math.random() * 26)) });
    }
    return letters;
  }

  function generateWordChallenge(lessonNum) {
    const lessonData = nceWords[lessonNum];
    if (!lessonData) return [];
    const words = [...lessonData.words];
    for (let i = words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [words[i], words[j]] = [words[j], words[i]];
    }
    return words.map(w => ({ text: w.en, cn: w.cn }));
  }

  function generateFavoritesChallenge() {
    let favs = loadFavorites();
    if (selectedFavGroup !== 'all') {
      favs = favs.filter(f => {
        const key = f.lesson || 0;
        const groupNum = Math.ceil(key / 16);
        const start = (groupNum - 1) * 16 + 1;
        const end = groupNum * 16;
        return selectedFavGroup === `${start}-${end}`;
      });
    }
    if (selectedFavLesson !== 'all') {
      favs = favs.filter(f => String(f.lesson) === String(selectedFavLesson));
    }
    if (favs.length === 0) return [];
    const shuffled = [...favs];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.map(w => ({ text: w.en, cn: w.cn, lesson: w.lesson }));
  }

  // --- Start Game ---
  function startGame() {
    score = 0; combo = 0; maxCombo = 0;
    totalKeys = 0; correctKeys = 0; charCount = 0;
    startTime = Date.now();
    queueIndex = 0; currentIndex = 0; currentWrongCount = 0;
    isPlaying = true;

    switch (currentMode) {
      case 'letters':
        challengeQueue = generateLetterChallenge(); break;
      case 'speed':
        challengeQueue = generateSpeedChallenge();
        speedTimeLeft = SPEED_TIME; startSpeedTimer(); break;
      case 'words':
        challengeQueue = generateWordChallenge(selectedLesson); break;
      case 'favorites':
        challengeQueue = generateFavoritesChallenge(); break;
    }

    if (challengeQueue.length === 0) {
      const msg = currentMode === 'favorites'
        ? '收藏夹为空<br>打错的单词会自动加入这里'
        : '请选择其他课次';
      practiceArea.innerHTML = `<div class="start-prompt"><h3>😢 没有找到单词</h3><p>${msg}</p></div>`;
      isPlaying = false;
      return;
    }

    const isWordLike = currentMode === 'words' || currentMode === 'favorites';
    if (isWordLike) {
      highlightToggleBar.style.display = 'flex';
      highlightToggleBar.classList.add('show-display-toggles');
    }

    loadNextTarget();
    updateStats();
  }

  function loadNextTarget() {
    if (queueIndex >= challengeQueue.length) { finishGame(); return; }
    const item = challengeQueue[queueIndex];
    targetChars = item.text.split('');
    currentIndex = 0;
    currentWrongCount = 0;
    currentWordHadError = false;
    renderTarget();

    const isWordLike = currentMode === 'words' || currentMode === 'favorites';
    if (isWordLike && audioDictationEnabled) {
      window.playDictationWord(item.text);
    }
  }

  // --- Speed Timer ---
  function startSpeedTimer() {
    if (speedTimer) clearInterval(speedTimer);
    speedTimer = setInterval(() => {
      speedTimeLeft--;
      if (speedTimeLeft <= 0) { clearInterval(speedTimer); speedTimer = null; finishGame(); return; }
      const fill = $('#timerFill');
      if (fill) fill.style.width = (speedTimeLeft / SPEED_TIME) * 100 + '%';
      const info = practiceArea.querySelector('.word-info');
      if (info) info.textContent = `剩余 ${speedTimeLeft} 秒`;
    }, 1000);
  }

  // --- Handle Key Press ---
  function handleKeyPress(e) {
    if (!isPlaying) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const key = e.key;
    if (key.length !== 1) return;
    e.preventDefault();
    totalKeys++;

    const expected = targetChars[currentIndex];
    const isCorrect = key.toLowerCase() === expected.toLowerCase();

    if (isCorrect) {
      correctKeys++; charCount++; combo++;
      if (combo > maxCombo) maxCombo = combo;
      currentWrongCount = 0;
      score += 10 + Math.min(combo * 2, 50);

      const charEl = $(`#char-${currentIndex}`);
      if (charEl) {
        charEl.classList.remove('current', 'waiting', 'dictation-hidden', 'reveal-hint');
        charEl.classList.add('done');
        const rect = charEl.getBoundingClientRect();
        spawnParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, 'var(--neon-green)', 6);
      }
      flashKey(expected, 'correct');
      playCorrect();

      if (combo > 0 && combo % 10 === 0) {
        playCombo();
        comboEl.classList.add('combo-fire');
        setTimeout(() => comboEl.classList.remove('combo-fire'), 300);
      }

      currentIndex++;

      if (currentIndex >= targetChars.length) {
        queueIndex++;
        const currentWord = challengeQueue[queueIndex - 1];
        const isWordLike = currentMode === 'words' || currentMode === 'favorites';
        let delay = 300;

        if (isWordLike) {
          if (!currentWordHadError) {
            recordFavCorrect(currentWord.text);
          } else {
            // 如果输错了，将该词重新插入队列，要求连输3次
            challengeQueue.splice(queueIndex, 0, currentWord, currentWord);
          }
        }

        if (isWordLike && !audioDictationEnabled) {
          window.playDictationWord(currentWord.text);
          delay = 1200;
        } else if (isWordLike && audioDictationEnabled) {
          delay = 600;
        }

        setTimeout(() => loadNextTarget(), delay);
      } else {
        const nextEl = $(`#char-${currentIndex}`);
        if (highlightEnabled) {
          highlightKey(targetChars[currentIndex]);
          if (nextEl) { nextEl.classList.remove('waiting'); nextEl.classList.add('current'); }
        } else {
          // completely disable any visual change for nextEl, keep it 'waiting'
          // no action needed.
        }
      }
    } else {
      // Wrong
      combo = 0;
      score = Math.max(0, score - 5);
      currentWordHadError = true;

      // Auto-add to favorites when typing a word wrong
      const isWordLike = currentMode === 'words' || currentMode === 'favorites';
      if (isWordLike) {
        const currentWord = challengeQueue[queueIndex];
        if (currentWord && currentWord.cn) {
          addToFavorites(currentWord.text, currentWord.cn, currentWord.lesson || selectedLesson, nceWords[currentWord.lesson || selectedLesson]?.title || '');
          recordFavWrong(currentWord.text);
        }
      }

      // 恢复输入错误的提示：发声和字符晃动
      currentWrongCount++;
      const charEl = $(`#char-${currentIndex}`);
      if (charEl) {
        charEl.classList.add('error');
        setTimeout(() => charEl.classList.remove('error'), 400);
        if (currentWrongCount >= 3) {
          charEl.classList.add('reveal-hint');
        }
      }
      flashKey(key, 'wrong');
      playWrong();
    }
    updateStats();
  }

  window.playDictationWord = function (wordText) {
    if (!wordText && isPlaying) {
      const currentWord = challengeQueue[queueIndex];
      if (currentWord) wordText = currentWord.text;
    }

    if (wordText && soundEnabled) {
      const cleanText = wordText.trim();

      if (window.currentAudio) {
        window.currentAudio.pause();
        window.currentAudio = null;
      }
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }

      const ttsUrls = [
        `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(cleanText)}&type=1`,
        `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(cleanText)}&type=2`,
      ];

      let currentTtsIndex = 0;
      let resolved = false;

      function tryNextTTS() {
        if (resolved) return;

        if (currentTtsIndex >= ttsUrls.length) {
          resolved = true;
          if (window.speechSynthesis) {
            const utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);
          }
          return;
        }

        const url = ttsUrls[currentTtsIndex++];
        const audio = new Audio();
        window.currentAudio = audio;

        const timeout = setTimeout(() => {
          if (!resolved) {
            audio.pause();
            audio.src = '';
            tryNextTTS();
          }
        }, 3000);

        audio.onloadeddata = () => {
          if (audio.duration > 0.1) {
            clearTimeout(timeout);
            resolved = true;
            audio.play().catch(() => {
              resolved = false;
              tryNextTTS();
            });
          } else {
            clearTimeout(timeout);
            audio.pause();
            tryNextTTS();
          }
        };

        audio.onerror = () => {
          clearTimeout(timeout);
          tryNextTTS();
        };

        audio.src = url;
        audio.load();
      }

      tryNextTTS();
    }
  };

  // --- Finish Game ---
  function finishGame() {
    isPlaying = false;
    if (speedTimer) { clearInterval(speedTimer); speedTimer = null; }
    clearKeyHighlights();
    playComplete();

    const minutes = (Date.now() - startTime) / 60000;
    const wpm = minutes > 0.05 ? Math.round((charCount / 5) / minutes) : 0;
    const accuracy = totalKeys > 0 ? Math.round((correctKeys / totalKeys) * 100) : 100;

    let titleText = '太棒了！🎉';
    if (accuracy >= 95) titleText = '完美表现！🌟';
    else if (accuracy >= 80) titleText = '做得很好！👏';
    else titleText = '继续加油！💪';

    celebrationTitle.textContent = titleText;
    celebrationStats.innerHTML = `
      得分: <span>${score}</span><br>
      准确率: <span>${accuracy}%</span><br>
      速度: <span>${wpm} WPM</span><br>
      最高连击: <span>${maxCombo}</span>
    `;
    celebration.classList.add('show');

    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight * 0.5;
        const colors = ['#00d4ff', '#a855f7', '#f472b6', '#34d399', '#fbbf24'];
        spawnParticles(x, y, colors[Math.floor(Math.random() * colors.length)], 4);
      }, i * 50);
    }
  }

  // --- Guide Mode ---
  function renderGuide() {
    keyboard.classList.add('finger-colors');

    let legendHtml = '';
    for (const [id, info] of Object.entries(fingerMap)) {
      if (id === 'thumb') continue;
      legendHtml += `<div class="finger-legend-item"><span class="finger-dot" style="background:${info.color}"></span>${info.label}: ${info.keys.join(' ')}</div>`;
    }

    // Build hand groups
    const leftFingers = ['left-pinky', 'left-ring', 'left-middle', 'left-index'];
    const rightFingers = ['right-index', 'right-middle', 'right-ring', 'right-pinky'];

    function buildHandKeys(fingers) {
      let html = '<div class="hand-keys">';
      for (const fid of fingers) {
        const info = fingerMap[fid];
        for (const k of info.keys) {
          html += `<div class="hand-key" style="border-color:${info.color};color:${info.color};background:${info.color}15">${k}</div>`;
        }
      }
      html += '</div>';
      return html;
    }

    practiceArea.innerHTML = `
      <div class="guide-content">
        <h3>🖐️ 打字指法教学</h3>
        <p>每个手指负责按特定的键。下面用颜色标出每个手指对应的按键区域。<br>
        看看键盘上的颜色，记住每个手指的位置！</p>

        <div class="finger-legend">${legendHtml}</div>

        <div class="guide-hands">
          <div class="hand-group">
            <h4>🤚 左手</h4>
            ${buildHandKeys(leftFingers)}
          </div>
          <div class="hand-group">
            <h4>🤚 右手</h4>
            ${buildHandKeys(rightFingers)}
          </div>
        </div>

        <div class="guide-tip">
          💡 <strong>小提示：</strong>把左手食指放在 <strong>F</strong> 键上，右手食指放在 <strong>J</strong> 键上 — 这两个键上有小突起，方便你不看键盘也能找到位置。这就是"起始位置"！
        </div>
      </div>
    `;
  }

  // --- Favorites View ---
  function renderFavorites() {
    const favs = loadFavorites();

    let html = '<div class="favorites-list">';
    html += '<h3>⭐ 收藏夹</h3>';
    html += '<p class="fav-subtitle">打字出错的单词会自动添加到这里 · 累计正确5次自动掌握 ✨</p>';

    if (favs.length === 0) {
      html += '<div class="fav-empty">还没有收藏的单词 👍<br>继续保持！</div>';
    } else {
      // Group by chunks of 16 (matching lesson selector)
      const chunkGroups = {}; // { '1-16': { lessons: { 1: { label:'L1', words:[...] } } } }
      favs.forEach(f => {
        const key = f.lesson || 0;
        const groupNum = Math.ceil(key / 16) || 1;
        const start = (groupNum - 1) * 16 + 1;
        const end = groupNum * 16;
        const groupName = `${start}-${end}`;

        if (!chunkGroups[groupName]) chunkGroups[groupName] = { lessons: {} };
        if (!chunkGroups[groupName].lessons[key]) {
          chunkGroups[groupName].lessons[key] = { label: 'L' + key, words: [] };
        }
        chunkGroups[groupName].lessons[key].words.push(f);
      });

      html += '<div class="fav-filter-bar">';
      html += `<button class="fav-filter-btn ${selectedFavGroup === 'all' ? 'active' : ''}" data-fav-group="all">全部 (${favs.length})</button>`;
      for (const [gName, gData] of Object.entries(chunkGroups)) {
        const cnt = Object.values(gData.lessons).reduce((s, l) => s + l.words.length, 0);
        html += `<button class="fav-filter-btn ${selectedFavGroup === gName ? 'active' : ''}" data-fav-group="${gName}">${gName} (${cnt})</button>`;
      }
      html += '</div>';

      if (selectedFavGroup !== 'all' && chunkGroups[selectedFavGroup]) {
        const lessons = chunkGroups[selectedFavGroup].lessons;
        html += '<div class="fav-filter-bar" style="margin-top:-8px">';
        html += `<button class="fav-filter-btn ${selectedFavLesson === 'all' ? 'active' : ''}" data-fav-lesson="all">全部</button>`;
        for (const [lKey, lData] of Object.entries(lessons)) {
          html += `<button class="fav-filter-btn ${String(selectedFavLesson) === String(lKey) ? 'active' : ''}" data-fav-lesson="${lKey}">${lData.label} (${lData.words.length})</button>`;
        }
        html += '</div>';
      }

      let displayFavs = favs;
      if (selectedFavGroup !== 'all' && chunkGroups[selectedFavGroup]) {
        const lKeys = Object.keys(chunkGroups[selectedFavGroup].lessons);
        displayFavs = favs.filter(f => lKeys.includes(String(f.lesson)));
        if (selectedFavLesson !== 'all') {
          displayFavs = displayFavs.filter(f => String(f.lesson) === String(selectedFavLesson));
        }
      }

      for (const fav of displayFavs) {
        const streak = fav.correctStreak || 0;
        const dots = Array.from({ length: 5 }, (_, i) =>
          `<span style="display:inline-block;width:8px;height:8px;border-radius:50%;margin:0 1px;background:${i < streak ? 'var(--neon-green)' : 'rgba(255,255,255,0.12)'}"></span>`
        ).join('');
        html += `
          <div class="fav-word-item">
            <span class="fav-word-en">${fav.en}</span>
            <span class="fav-word-cn">${fav.cn}</span>
            <span class="fav-word-streak" title="累计正确 ${streak}/5">${dots}</span>
            <button class="fav-word-remove" data-word="${fav.en}">移除</button>
          </div>`;
      }
      html += `
        <div class="fav-actions">
          <button id="btnPracticeFavs">📝 练习${selectedFavGroup === 'all' ? '全部' : '当前筛选'}单词</button>
          <button id="btnClearFavs" class="danger">🗑️ 清空全部</button>
        </div>`;
    }
    html += '</div>';
    practiceArea.innerHTML = html;

    $$('[data-fav-group]').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedFavGroup = btn.dataset.favGroup;
        selectedFavLesson = 'all';
        renderFavorites();
      });
    });

    $$('[data-fav-lesson]').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedFavLesson = btn.dataset.favLesson === 'all' ? 'all' : btn.dataset.favLesson;
        renderFavorites();
      });
    });

    $$('.fav-word-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        removeFromFavorites(btn.dataset.word);
        renderFavorites();
      });
    });

    const btnPractice = $('#btnPracticeFavs');
    if (btnPractice) {
      btnPractice.addEventListener('click', () => {
        currentMode = 'favorites';
        startGame();
      });
    }

    const btnClear = $('#btnClearFavs');
    if (btnClear) {
      btnClear.addEventListener('click', () => {
        if (confirm('确定要清空所有收藏的单词吗？')) {
          clearAllFavorites();
          renderFavorites();
        }
      });
    }
  }

  // --- Mode Switch ---
  function setMode(mode) {
    currentMode = mode;
    isPlaying = false;
    if (speedTimer) { clearInterval(speedTimer); speedTimer = null; }
    clearKeyHighlights();

    // Remove finger colors if not guide mode
    keyboard.classList.toggle('finger-colors', mode === 'guide');

    // Update tabs
    $$('.mode-tab').forEach(tab => tab.classList.toggle('active', tab.dataset.mode === mode));

    // Show/hide lesson selector
    lessonSelector.classList.toggle('show', mode === 'words');

    // Show/hide highlight toggle bar (not needed in guide or favorites-view mode)
    highlightToggleBar.style.display = (mode === 'guide' || mode === 'favorites') ? 'none' : 'flex';

    // Show dictation and chinese toggle only in word-like modes
    const isWordLike = (mode === 'words' || mode === 'favorites');
    highlightToggleBar.classList.toggle('show-display-toggles', mode === 'words');

    // Reset stats
    score = 0; combo = 0; totalKeys = 0; correctKeys = 0; charCount = 0;
    updateStats();

    // Special modes
    if (mode === 'guide') {
      renderGuide();
      return;
    }

    if (mode === 'favorites') {
      renderFavorites();
      return;
    }

    // Show start prompt for playable modes
    let title = '', desc = '';
    switch (mode) {
      case 'letters':
        title = '🔤 字母认识';
        desc = '随机出现一个字母，在键盘上找到它并按下对应的键<br>熟悉每个字母的位置';
        break;
      case 'speed':
        title = '⚡ 字母连打';
        desc = `在 ${SPEED_TIME} 秒内尽可能多地打出字母<br>看看你能达到多快的速度！`;
        break;
      case 'words':
        title = '📚 单词挑战';
        desc = '看中文提示，打出英文单词<br>边练打字，边背单词！打错的单词会自动加入收藏夹';
        break;
    }

    practiceArea.innerHTML = `
      <div class="start-prompt">
        <h3>${title}</h3>
        <p>${desc}</p>
        <button class="btn-start" id="btnStart">开 始 练 习</button>
      </div>
    `;
    $('#btnStart').addEventListener('click', startGame);
  }

  // --- Build Lesson Selector ---
  function buildLessonSelector() {
    const sortedKeys = Object.keys(nceWords).map(Number).sort((a, b) => a - b);

    const groupingSize = 16;
    const groupEntries = [];
    const groupMap = {};

    sortedKeys.forEach(key => {
      const groupNum = Math.ceil(key / groupingSize);
      const start = (groupNum - 1) * groupingSize + 1;
      const end = groupNum * groupingSize;
      const groupName = `${start}-${end}`;
      if (!groupMap[groupName]) {
        groupMap[groupName] = [];
        groupEntries.push(groupName);
      }
      groupMap[groupName].push(key);
    });

    let barHtml = '<div class="lesson-groups-bar">';
    groupEntries.forEach(name => {
      barHtml += `<button class="lesson-group-btn" data-group="${name}">${name}</button>`;
    });
    barHtml += '</div>';
    barHtml += '<div class="lesson-detail-bar" id="lessonDetailBar"></div>';

    lessonSelector.innerHTML = barHtml;
    const detailBar = $('#lessonDetailBar');

    function showGroup(groupName) {
      $$('.lesson-group-btn').forEach(b => b.classList.toggle('active', b.dataset.group === groupName));
      const keys = groupMap[groupName] || [];
      let html = '';
      keys.forEach(key => {
        const isActive = key === selectedLesson ? 'active' : '';
        html += `<button class="lesson-btn ${isActive}" data-lesson="${key}" title="${nceWords[key].title}">L${key}</button>`;
      });
      detailBar.innerHTML = html;

      $$('.lesson-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          selectedLesson = parseInt(btn.dataset.lesson);
          $$('.lesson-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          if (isPlaying) startGame();
        });
      });
    }

    $$('.lesson-group-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        showGroup(btn.dataset.group);
      });
    });

    const defaultGroupNum = Math.ceil(selectedLesson / groupingSize);
    const defaultStart = (defaultGroupNum - 1) * groupingSize + 1;
    const defaultEnd = defaultGroupNum * groupingSize;
    showGroup(`${defaultStart}-${defaultEnd}`);
  }

  // --- Init ---
  function init() {
    buildLessonSelector();

    // Add fav badge to the favorites tab
    const favTab = $('[data-mode="favorites"]');
    if (favTab) {
      const badge = document.createElement('span');
      badge.className = 'fav-badge hidden';
      badge.textContent = '0';
      favTab.appendChild(badge);
    }
    updateFavBadge();

    // Mode tabs
    $$('.mode-tab').forEach(tab => {
      tab.addEventListener('click', () => setMode(tab.dataset.mode));
    });

    // Start button
    btnStart.addEventListener('click', startGame);

    // Continue button
    btnContinue.addEventListener('click', () => {
      celebration.classList.remove('show');
      setMode(currentMode);
    });

    // Keyboard input
    document.addEventListener('keydown', handleKeyPress);

    // Virtual keyboard clicks
    $$('.key').forEach(keyEl => {
      keyEl.addEventListener('mousedown', (e) => {
        e.preventDefault();
        const keyChar = keyEl.dataset.key;
        if (keyChar) {
          handleKeyPress({
            key: keyChar.toLowerCase(),
            preventDefault: () => { },
            ctrlKey: false, metaKey: false, altKey: false,
            length: keyChar.length
          });
          keyEl.classList.add('pressed');
          setTimeout(() => keyEl.classList.remove('pressed'), 150);
        }
      });
    });

    // Sound toggle
    soundToggle.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      soundToggle.textContent = soundEnabled ? '🔊' : '🔇';
    });

    // Highlight toggle
    highlightToggle.addEventListener('click', () => {
      highlightEnabled = !highlightEnabled;
      highlightStatus.textContent = highlightEnabled ? '开' : '关';
      highlightIcon.textContent = highlightEnabled ? '💡' : '🔒';
      highlightToggle.classList.toggle('off', !highlightEnabled);
      if (!highlightEnabled) clearKeyHighlights();
      else if (isPlaying && currentIndex < targetChars.length) highlightKey(targetChars[currentIndex]);

      // Re-render target to update the blinking cursor state
      if (isPlaying) {
        renderTarget();
      }
    });

    const chineseToggle = $('#chineseToggle');
    if (chineseToggle) {
      chineseToggle.addEventListener('click', () => {
        chineseHintEnabled = !chineseHintEnabled;
        chineseToggle.innerHTML = `🇨🇳 中文提示：<strong>${chineseHintEnabled ? '开' : '关'}</strong>`;
        chineseToggle.classList.toggle('off', !chineseHintEnabled);
        if (isPlaying) renderTarget();
      });
    }

    const audioDictationToggle = $('#audioDictationToggle');
    if (audioDictationToggle) {
      audioDictationToggle.addEventListener('click', () => {
        audioDictationEnabled = !audioDictationEnabled;
        audioDictationToggle.innerHTML = `🎧 听写模式：<strong>${audioDictationEnabled ? '开' : '关'}</strong>`;
        audioDictationToggle.classList.toggle('off', !audioDictationEnabled);

        // When dictation is turned ON, we should play the current word, and hide target word
        if (isPlaying && audioDictationEnabled && targetChars.length > 0) {
          playDictationWord();
        }
        if (isPlaying) renderTarget();
      });
    }

    // Prevent space scrolling
    document.addEventListener('keydown', (e) => {
      if (e.key === ' ' && isPlaying) e.preventDefault();
    });
  }

  init();
})();
