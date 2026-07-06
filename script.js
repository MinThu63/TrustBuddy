// ===== TrustBuddy - Anti-Scam Assistant =====
// Production n8n webhook URL
const N8N_WEBHOOK_URL = "https://n8ngc.codeblazar.org/webhook/d3705ce9-d2b0-48dc-ba72-5bdb76011802";

// Feedback webhook URL (Hsu's workflow)
const FEEDBACK_WEBHOOK_URL = "https://hsumyatsan123.app.n8n.cloud/webhook/c416126d-2807-4872-8328-bc97b1017a7e";

// ===== TRANSLATIONS (Singapore's 4 official languages) =====
const translations = {
    en: {
        tagline: "Your friendly scam-checking assistant",
        langLabel: "Language:",
        sizeLabel: "Text Size:",
        tabCheck: "🔍 Check a Message",
        tabHistory: "📋 History",
        inputLabel: "<strong>Paste a suspicious message below and I'll check it for you:</strong>",
        placeholder: "Paste here..",
        privacyNote: "🔒 Your message is checked securely. We do not store your personal data.",
        checkBtn: "🔍 Check This Message",
        loadingLabel: "Analysing — please wait...",
        resultHeader: "TrustBuddy says:",
        errorHeader: "Connection Issue",
        errorMessage: "We could not reach the scam-checking service right now. Please check your internet connection and try again.",
        copyBtn: "📋 Copy Result",
        resetBtn: "🔄 Check Another Message",
        copied: "✅ Copied!",
        historyTitle: "Previous Checks",
        clearHistory: "🗑️ Clear All",
        historyEmpty: "No messages checked yet. Your history will appear here.",
        clearConfirm: "Are you sure you want to clear all history?",
        connectionOk: '✅ <strong>Connected to AI</strong> — TrustBuddy is ready',
        connectionFail: '⚠️ <strong>Connection issue</strong> — Please try again',
        emergencyTitle: "🚨 Think you've been scammed?",
        emergencyLine1: 'Call the <strong>Anti-Scam Helpline</strong>: <a href="tel:1800-722-6688">1800-722-6688</a>',
        emergencyLine2: 'Report via <strong>ScamShield App</strong> or visit <a href="https://www.scamshield.org.sg" target="_blank" rel="noopener">scamshield.org.sg</a>',
        emergencyLine3: 'In an emergency, call the <strong>Singapore Police</strong>: <a href="tel:999">999</a>',
        footerPrivacy: "🔒 100% Free — Your messages are never stored on our servers."
    },
    zh: {
        tagline: "您的防诈骗好帮手",
        langLabel: "语言：",
        sizeLabel: "字体大小：",
        tabCheck: "🔍 检查信息",
        tabHistory: "📋 历史记录",
        inputLabel: "<strong>将可疑信息粘贴在下方，我帮您检查：</strong>",
        placeholder: "粘贴在这里..",
        privacyNote: "🔒 您的信息将被安全检查。我们不会储存您的个人资料。",
        checkBtn: "🔍 检查此信息",
        loadingLabel: "正在分析 — 请稍候...",
        resultHeader: "TrustBuddy 分析结果：",
        errorHeader: "连接问题",
        errorMessage: "目前无法连接到防诈骗服务。请检查您的网络连接，然后再试一次。",
        copyBtn: "📋 复制结果",
        resetBtn: "🔄 检查另一条信息",
        copied: "✅ 已复制！",
        historyTitle: "检查记录",
        clearHistory: "🗑️ 清除全部",
        historyEmpty: "尚未检查任何信息。您的记录将显示在这里。",
        clearConfirm: "您确定要清除所有记录吗？",
        connectionOk: '✅ <strong>已连接 AI</strong> — TrustBuddy 已就绪',
        connectionFail: '⚠️ <strong>连接问题</strong> — 请重试',
        emergencyTitle: "🚨 怀疑自己被骗了？",
        emergencyLine1: '拨打 <strong>反诈骗热线</strong>：<a href="tel:1800-722-6688">1800-722-6688</a>',
        emergencyLine2: '通过 <strong>ScamShield 应用</strong> 举报或浏览 <a href="https://www.scamshield.org.sg" target="_blank" rel="noopener">scamshield.org.sg</a>',
        emergencyLine3: '紧急情况请拨打 <strong>新加坡警察</strong>：<a href="tel:999">999</a>',
        footerPrivacy: "🔒 100% 免费 — 您的信息不会被储存在我们的服务器上。"
    },
    ms: {
        tagline: "Pembantu anti-penipuan anda",
        langLabel: "Bahasa:",
        sizeLabel: "Saiz Teks:",
        tabCheck: "🔍 Semak Mesej",
        tabHistory: "📋 Sejarah",
        inputLabel: "<strong>Tampal mesej yang mencurigakan di bawah dan saya akan semak untuk anda:</strong>",
        placeholder: "Tampal di sini..",
        privacyNote: "🔒 Mesej anda disemak dengan selamat. Kami tidak menyimpan data peribadi anda.",
        checkBtn: "🔍 Semak Mesej Ini",
        loadingLabel: "Sedang menganalisis — sila tunggu...",
        resultHeader: "TrustBuddy berkata:",
        errorHeader: "Masalah Sambungan",
        errorMessage: "Kami tidak dapat menghubungi perkhidmatan semakan penipuan sekarang. Sila semak sambungan internet anda dan cuba lagi.",
        copyBtn: "📋 Salin Keputusan",
        resetBtn: "🔄 Semak Mesej Lain",
        copied: "✅ Disalin!",
        historyTitle: "Semakan Terdahulu",
        clearHistory: "🗑️ Padam Semua",
        historyEmpty: "Belum ada mesej yang disemak. Sejarah anda akan dipaparkan di sini.",
        clearConfirm: "Adakah anda pasti mahu memadamkan semua sejarah?",
        connectionOk: '✅ <strong>Disambungkan ke AI</strong> — TrustBuddy sedia',
        connectionFail: '⚠️ <strong>Masalah sambungan</strong> — Sila cuba lagi',
        emergencyTitle: "🚨 Rasa anda telah ditipu?",
        emergencyLine1: 'Hubungi <strong>Talian Anti-Penipuan</strong>: <a href="tel:1800-722-6688">1800-722-6688</a>',
        emergencyLine2: 'Lapor melalui <strong>Aplikasi ScamShield</strong> atau layari <a href="https://www.scamshield.org.sg" target="_blank" rel="noopener">scamshield.org.sg</a>',
        emergencyLine3: 'Dalam kecemasan, hubungi <strong>Polis Singapura</strong>: <a href="tel:999">999</a>',
        footerPrivacy: "🔒 100% Percuma — Mesej anda tidak disimpan di pelayan kami."
    },
    ta: {
        tagline: "உங்கள் நம்பகமான மோசடி-சோதனை உதவியாளர்",
        langLabel: "மொழி:",
        sizeLabel: "எழுத்து அளவு:",
        tabCheck: "🔍 செய்தியை சோதிக்க",
        tabHistory: "📋 வரலாறு",
        inputLabel: "<strong>சந்தேகமான செய்தியை கீழே ஒட்டவும், நான் உங்களுக்காக சோதிக்கிறேன்:</strong>",
        placeholder: "இங்கே ஒட்டவும்..",
        privacyNote: "🔒 உங்கள் செய்தி பாதுகாப்பாக சோதிக்கப்படுகிறது. உங்கள் தனிப்பட்ட தரவை நாங்கள் சேமிப்பதில்லை.",
        checkBtn: "🔍 இந்த செய்தியை சோதிக்கவும்",
        loadingLabel: "பகுப்பாய்வு செய்யப்படுகிறது — தயவுசெய்து காத்திருங்கள்...",
        resultHeader: "TrustBuddy கூறுகிறது:",
        errorHeader: "இணைப்பு பிரச்சனை",
        errorMessage: "மோசடி-சோதனை சேவையை இப்போது அணுக முடியவில்லை. உங்கள் இணைய இணைப்பை சரிபார்த்து மீண்டும் முயற்சிக்கவும்.",
        copyBtn: "📋 முடிவை நகலெடு",
        resetBtn: "🔄 வேறு செய்தியை சோதிக்க",
        copied: "✅ நகலெடுக்கப்பட்டது!",
        historyTitle: "முந்தைய சோதனைகள்",
        clearHistory: "🗑️ அனைத்தையும் அழி",
        historyEmpty: "இதுவரை எந்த செய்தியும் சோதிக்கப்படவில்லை. உங்கள் வரலாறு இங்கே தோன்றும்.",
        clearConfirm: "அனைத்து வரலாற்றையும் அழிக்க விரும்புகிறீர்களா?",
        connectionOk: '✅ <strong>AI உடன் இணைக்கப்பட்டது</strong> — TrustBuddy தயாராக உள்ளது',
        connectionFail: '⚠️ <strong>இணைப்பு பிரச்சனை</strong> — மீண்டும் முயற்சிக்கவும்',
        emergencyTitle: "🚨 நீங்கள் மோசடிக்கு ஆளானதாக நினைக்கிறீர்களா?",
        emergencyLine1: '<strong>மோசடி எதிர்ப்பு உதவி எண்</strong>: <a href="tel:1800-722-6688">1800-722-6688</a> அழைக்கவும்',
        emergencyLine2: '<strong>ScamShield செயலி</strong> மூலம் புகாரளிக்கவும் அல்லது <a href="https://www.scamshield.org.sg" target="_blank" rel="noopener">scamshield.org.sg</a> பார்க்கவும்',
        emergencyLine3: 'அவசரநிலையில், <strong>சிங்கப்பூர் காவல்துறை</strong>: <a href="tel:999">999</a> அழைக்கவும்',
        footerPrivacy: "🔒 100% இலவசம் — உங்கள் செய்திகள் எங்கள் சேவையகங்களில் சேமிக்கப்படுவதில்லை."
    }
};

// State
let currentLang = 'en';
let currentSize = 20;
let lastResult = null; // Store last result so we can re-render on lang change
let originalResultText = ''; // Always keep the original English response for translations

const MIN_SIZE = 16;
const MAX_SIZE = 28;
const LANG_ORDER = ['en', 'zh', 'ms', 'ta'];

// DOM Elements
const inputField = document.getElementById('scamInput');
const checkButton = document.getElementById('checkButton');
const loadingStatus = document.getElementById('loadingStatus');
const resultBox = document.getElementById('resultBox');

// ===== LANGUAGE SWITCHING =====
function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('silverShieldLang', lang);
    applyTranslations();
}

function applyTranslations() {
    const t = translations[currentLang];

    // Static UI elements (with null checks for pages that don't have all elements)
    const setEl = (id, prop, val) => { const el = document.getElementById(id); if (el) el[prop] = val; };
    setEl('tagline', 'textContent', t.tagline);
    setEl('langLabel', 'textContent', t.langLabel);
    setEl('sizeLabel', 'textContent', t.sizeLabel);
    setEl('tabCheckLabel', 'textContent', t.tabCheck);
    setEl('tabHistoryLabel', 'textContent', t.tabHistory);
    setEl('inputLabel', 'innerHTML', t.inputLabel);
    setEl('privacyNote', 'innerHTML', t.privacyNote);
    setEl('checkBtnLabel', 'innerHTML', t.checkBtn);
    setEl('loadingLabel', 'textContent', t.loadingLabel);
    setEl('historyTitle', 'textContent', t.historyTitle);
    setEl('clearHistoryBtn', 'innerHTML', t.clearHistory);
    setEl('emergencyTitle', 'textContent', t.emergencyTitle);
    setEl('emergencyLine1', 'innerHTML', t.emergencyLine1);
    setEl('emergencyLine2', 'innerHTML', t.emergencyLine2);
    setEl('emergencyLine3', 'innerHTML', t.emergencyLine3);
    setEl('footerPrivacy', 'innerHTML', t.footerPrivacy);
    setEl('connectionStatus', 'innerHTML', t.connectionOk);

    const scamInput = document.getElementById('scamInput');
    if (scamInput) scamInput.placeholder = t.placeholder;

    // Update html lang attribute
    const langMap = { en: 'en', zh: 'zh-SG', ms: 'ms-SG', ta: 'ta-SG' };
    document.documentElement.lang = langMap[currentLang] || 'en';

    // Update active language button
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => btn.classList.remove('active'));
    const langIdx = LANG_ORDER.indexOf(currentLang);
    if (langIdx >= 0 && langBtns[langIdx]) {
        langBtns[langIdx].classList.add('active');
    }

    // Re-render result box if a result is currently showing
    if (lastResult && resultBox.classList.contains('visible')) {
        showResult(lastResult.message, lastResult.type);
    }

    // Re-render history if history panel is active
    if (document.getElementById('panelHistory').classList.contains('active')) {
        renderHistory();
    }

    // Update history empty state if visible in check panel
    const historyEmpty = document.querySelector('.history-empty');
    if (historyEmpty) {
        historyEmpty.textContent = t.historyEmpty;
    }
}

// ===== TEXT SIZE CONTROLS =====
function changeTextSize(action) {
    if (action === 'increase' && currentSize < MAX_SIZE) {
        currentSize += 2;
    } else if (action === 'decrease' && currentSize > MIN_SIZE) {
        currentSize -= 2;
    } else if (action === 'reset') {
        currentSize = 20;
    }

    document.documentElement.style.fontSize = currentSize + 'px';
    updateSizeButtons();
    localStorage.setItem('silverShieldTextSize', currentSize);
}

function updateSizeButtons() {
    const btns = document.querySelectorAll('.size-btn');
    btns.forEach(btn => btn.classList.remove('active'));
    if (currentSize === 20) btns[1].classList.add('active');
    else if (currentSize > 20) btns[2].classList.add('active');
    else btns[0].classList.add('active');
}

// ===== TAB SWITCHING =====
function switchTab(tab) {
    document.getElementById('tabCheck').classList.toggle('active', tab === 'check');
    document.getElementById('tabHistory').classList.toggle('active', tab === 'history');
    document.getElementById('panelCheck').classList.toggle('active', tab === 'check');
    document.getElementById('panelHistory').classList.toggle('active', tab === 'history');

    if (tab === 'history') renderHistory();
}

// ===== CHECK MESSAGE =====
async function checkMessage() {
    const messageText = inputField.value.trim();

    if (!messageText) {
        shakeButton();
        inputField.focus();
        return;
    }

    setLoadingState(true);

    // Map language code to full name for n8n AI Agent
    const langNames = { en: 'English', zh: 'Chinese (Simplified)', ms: 'Malay', ta: 'Tamil' };

    try {
        const response = await fetch(N8N_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_message: messageText
            })
        });

        if (!response.ok) {
            // Try to read the body anyway — n8n sometimes returns data with non-200 status
            try {
                const data = await response.json();
                const aiReply = data.output || data.text || '';
                if (aiReply) {
                    originalResultText = aiReply;
                    showResult(aiReply, 'success');
                    saveToHistory(messageText, aiReply);
                    return;
                }
            } catch (e) {}
            throw new Error(`Server responded with status ${response.status}`);
        }

        const data = await response.json();
        const aiReply = data.output || data.text || JSON.stringify(data);

        // Store original English text for future translations
        originalResultText = aiReply;
        showResult(aiReply, 'success');
        saveToHistory(messageText, aiReply);
        updateConnectionStatus(true);

    } catch (error) {
        console.error("Error communicating with backend:", error);
        const t = translations[currentLang];
        showResult(t.errorMessage, 'error');
        updateConnectionStatus(false);
    } finally {
        setLoadingState(false);
    }
}

// ===== UI STATE =====
function setLoadingState(isLoading) {
    inputField.disabled = isLoading;
    checkButton.disabled = isLoading;
    loadingStatus.classList.toggle('active', isLoading);

    if (isLoading) {
        checkButton.style.display = 'none';
        resultBox.classList.remove('visible');
    } else {
        checkButton.style.display = 'flex';
    }
}

function showResult(message, type) {
    const t = translations[currentLang];
    const icon = type === 'success' ? '🛡️' : '⚠️';
    const headerText = type === 'success' ? t.resultHeader : t.errorHeader;

    // Store last result for re-rendering on language change
    lastResult = { message, type };

    resultBox.className = `result-box visible ${type}`;
    resultBox.innerHTML = `
        <div class="result-header">${icon} ${headerText}</div>
        <div class="result-content">${formatMessage(message)}</div>
        <div class="translate-bar">
            <span class="translate-label">Translate to:</span>
            <button class="translate-btn" onclick="translateResult('en')" type="button">English</button>
            <button class="translate-btn" onclick="translateResult('zh')" type="button">中文</button>
            <button class="translate-btn" onclick="translateResult('ms')" type="button">Melayu</button>
            <button class="translate-btn" onclick="translateResult('ta')" type="button">தமிழ்</button>
        </div>
        <div class="result-actions">
            <button class="btn-copy" onclick="copyResult()" type="button">📋 Copy Result</button>
            <button class="btn-copy" onclick="readAloud()" type="button" id="readAloudBtn">🔊 Read Aloud</button>
            <button class="btn-reset" onclick="resetForm()" type="button">${t.resetBtn}</button>
        </div>
        <div class="feedback-section" id="feedbackSection" style="display:none;">
            <div class="feedback-form">
                <p class="feedback-question"><strong>How did we do?</strong></p>
                <div class="feedback-row">
                    <button class="fb-btn" onclick="setFeedback('helpful', 'helpful', this)" type="button">👍 Helpful</button>
                    <button class="fb-btn" onclick="setFeedback('helpful', 'not_helpful', this)" type="button">👎 Not Helpful</button>
                </div>

                <p class="feedback-question">Was the verdict correct?</p>
                <div class="feedback-row">
                    <button class="fb-btn" onclick="setFeedback('accurate', 'yes', this)" type="button">Yes</button>
                    <button class="fb-btn" onclick="setFeedback('accurate', 'no', this)" type="button">No</button>
                    <button class="fb-btn" onclick="setFeedback('accurate', 'not_sure', this)" type="button">Not Sure</button>
                </div>

                <p class="feedback-question">Was it easy to understand?</p>
                <div class="feedback-row">
                    <button class="fb-btn" onclick="setFeedback('clarity', 'easy', this)" type="button">😊 Easy</button>
                    <button class="fb-btn" onclick="setFeedback('clarity', 'ok', this)" type="button">😐 OK</button>
                    <button class="fb-btn" onclick="setFeedback('clarity', 'confusing', this)" type="button">😕 Confusing</button>
                </div>

                <p class="feedback-question">Anything else? (optional)</p>
                <textarea id="feedbackComment" class="feedback-comment" placeholder="Tell us more..." rows="2"></textarea>

                <button class="btn-submit-feedback" onclick="submitFeedback()" type="button">✅ Submit Feedback</button>
            </div>
        </div>
    `;

    setTimeout(() => {
        resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

function formatMessage(text) {
    return text
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

function copyResult() {
    const t = translations[currentLang];
    const resultContent = resultBox.querySelector('.result-content');
    const textToCopy = resultContent ? resultContent.innerText : '';

    navigator.clipboard.writeText(textToCopy).then(() => {
        const copyBtn = resultBox.querySelector('.btn-copy');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = t.copied;
        setTimeout(() => { copyBtn.innerHTML = originalText; }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    });
}

// ===== READ ALOUD (Web Speech API) =====
let isSpeaking = false;

function readAloud() {
    const btn = document.getElementById('readAloudBtn');

    // If already speaking, stop
    if (isSpeaking) {
        window.speechSynthesis.cancel();
        isSpeaking = false;
        btn.innerHTML = '🔊 Read Aloud';
        return;
    }

    const resultContent = resultBox.querySelector('.result-content');
    if (!resultContent) return;

    const textToRead = resultContent.innerText;
    if (!textToRead) return;

    // Set language for speech
    const langMap = { en: 'en', zh: 'zh', ms: 'ms', ta: 'ta' };
    const targetLang = langMap[currentLang] || 'en';

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 0.85; // Slightly slower for seniors
    utterance.pitch = 1;

    // Try to find a matching voice for the language
    const voices = window.speechSynthesis.getVoices();
    const matchingVoice = voices.find(v => v.lang.startsWith(targetLang)) 
        || voices.find(v => v.lang.includes(targetLang))
        || voices.find(v => v.lang.startsWith('en')); // fallback to English

    if (matchingVoice) {
        utterance.voice = matchingVoice;
        utterance.lang = matchingVoice.lang;
    } else {
        utterance.lang = targetLang;
    }

    utterance.onstart = () => {
        isSpeaking = true;
        btn.innerHTML = '⏹️ Stop Reading';
    };

    utterance.onend = () => {
        isSpeaking = false;
        btn.innerHTML = '🔊 Read Aloud';
    };

    utterance.onerror = () => {
        isSpeaking = false;
        btn.innerHTML = '🔊 Read Aloud';
    };

    window.speechSynthesis.speak(utterance);
}

// Pre-load voices (some browsers need this)
if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => { window.speechSynthesis.getVoices(); };
}

function resetForm() {
    inputField.value = '';
    inputField.disabled = false;
    inputField.focus();
    resultBox.classList.remove('visible');
    lastResult = null;
    originalResultText = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function shakeButton() {
    checkButton.style.animation = 'shake 0.4s ease';
    setTimeout(() => { checkButton.style.animation = ''; }, 400);
}

// ===== CONNECTION STATUS =====
function updateConnectionStatus(isConnected) {
    const statusEl = document.getElementById('connectionStatus');
    if (!statusEl) return; // Element was removed from page
    const t = translations[currentLang];
    if (isConnected) {
        statusEl.innerHTML = t.connectionOk;
        statusEl.parentElement.style.color = '#15803d';
    } else {
        statusEl.innerHTML = t.connectionFail;
        statusEl.parentElement.style.color = '#b91c1c';
    }
}

// ===== HISTORY (localStorage) =====
function saveToHistory(message, result) {
    const history = getHistory();
    history.unshift({
        message: message,
        result: result,
        time: new Date().toLocaleString()
    });
    if (history.length > 20) history.pop();
    localStorage.setItem('silverShieldHistory', JSON.stringify(history));
}

function getHistory() {
    try {
        return JSON.parse(localStorage.getItem('silverShieldHistory')) || [];
    } catch { return []; }
}

function renderHistory() {
    const t = translations[currentLang];
    const historyList = document.getElementById('historyList');
    const history = getHistory();

    if (history.length === 0) {
        historyList.innerHTML = `<p class="history-empty">${t.historyEmpty}</p>`;
        return;
    }

    historyList.innerHTML = history.map(item => `
        <div class="history-item">
            <div class="history-message">"${escapeHtml(item.message)}"</div>
            <div class="history-result">${formatMessage(item.result)}</div>
            <div class="history-time">${item.time}</div>
        </div>
    `).join('');
}

function clearHistory() {
    const t = translations[currentLang];
    if (confirm(t.clearConfirm)) {
        localStorage.removeItem('silverShieldHistory');
        renderHistory();
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== TRANSLATE RESULT =====
async function translateResult(targetLang) {
    const resultContent = resultBox.querySelector('.result-content');
    if (!resultContent || !originalResultText) return;

    // If target is English, just show the original
    if (targetLang === 'en') {
        resultContent.innerHTML = formatMessage(originalResultText);
        lastResult.message = originalResultText;
        highlightTranslateBtn(targetLang);
        return;
    }

    // Language codes for MyMemory API
    const langCodes = { en: 'en', zh: 'zh-CN', ms: 'ms', ta: 'ta' };
    const target = langCodes[targetLang];

    // Show translating state
    const translateBar = resultBox.querySelector('.translate-bar');
    const originalBarHTML = translateBar.innerHTML;
    translateBar.innerHTML = '<span class="translate-label">Translating...</span>';

    try {
        // Always translate from the original English text
        const chunks = splitText(originalResultText, 450);
        let translatedChunks = [];

        for (const chunk of chunks) {
            const encoded = encodeURIComponent(chunk);
            const response = await fetch(
                `https://api.mymemory.translated.net/get?q=${encoded}&langpair=en|${target}`
            );
            const data = await response.json();

            if (data.responseStatus === 200 && data.responseData) {
                translatedChunks.push(data.responseData.translatedText);
            } else {
                translatedChunks.push(chunk);
            }
        }

        const translatedText = translatedChunks.join(' ');
        resultContent.innerHTML = formatMessage(translatedText);

        // Update lastResult for copy/re-render, but DON'T overwrite originalResultText
        lastResult.message = translatedText;

        // Restore translate bar and highlight active
        translateBar.innerHTML = originalBarHTML;
        highlightTranslateBtn(targetLang);

    } catch (error) {
        console.error('Translation error:', error);
        translateBar.innerHTML = originalBarHTML;
        translateBar.insertAdjacentHTML('beforeend', 
            '<span style="color:#b91c1c; font-size:0.8rem; margin-left:0.5rem;">Translation failed. Try again.</span>'
        );
        setTimeout(() => {
            const errorMsg = translateBar.querySelector('span[style]');
            if (errorMsg) errorMsg.remove();
        }, 3000);
    }
}

function highlightTranslateBtn(activeLang) {
    const btns = resultBox.querySelectorAll('.translate-btn');
    const order = ['en', 'zh', 'ms', 'ta'];
    btns.forEach((btn, i) => {
        btn.classList.toggle('active', order[i] === activeLang);
    });
}

function splitText(text, maxLength) {
    const sentences = text.split(/(?<=[.!?।\n])\s*/);
    const chunks = [];
    let current = '';

    for (const sentence of sentences) {
        if ((current + ' ' + sentence).length > maxLength && current.length > 0) {
            chunks.push(current.trim());
            current = sentence;
        } else {
            current = current ? current + ' ' + sentence : sentence;
        }
    }
    if (current.trim()) chunks.push(current.trim());

    // If any chunk is still too long, force-split it
    const result = [];
    for (const chunk of chunks) {
        if (chunk.length > maxLength) {
            for (let i = 0; i < chunk.length; i += maxLength) {
                result.push(chunk.substring(i, i + maxLength));
            }
        } else {
            result.push(chunk);
        }
    }
    return result;
}

// ===== FEEDBACK SYSTEM =====
let feedbackData = { helpful: '', accurate: '', clarity: '' };

function toggleFeedbackForm() {
    const section = document.getElementById('feedbackSection');
    if (section.style.display === 'none') {
        section.style.display = 'block';
        section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
        section.style.display = 'none';
    }
}

function setFeedback(field, value, btn) {
    feedbackData[field] = value;

    // Highlight selected button in its row
    const row = btn.parentElement;
    row.querySelectorAll('.fb-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
}

async function submitFeedback() {
    const comment = document.getElementById('feedbackComment')?.value || '';

    const payload = {
        user_message: inputField.value.trim(),
        ai_verdict: originalResultText,
        helpful: feedbackData.helpful,
        accurate: feedbackData.accurate,
        clarity: feedbackData.clarity,
        comment: comment,
        language: currentLang
    };

    // Replace feedback section with thank you message
    const section = document.getElementById('feedbackSection');
    section.innerHTML = '<p class="feedback-thanks">🙏 Thank you! Your feedback helps us protect more seniors.</p>';

    // Send to feedback webhook
    try {
        await fetch(FEEDBACK_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
    } catch (error) {
        console.error("Feedback submission error:", error);
    }

    feedbackData = { helpful: '', accurate: '', clarity: '' };
}

async function submitStandaloneFeedback() {
    const comment = document.getElementById('feedbackCommentStandalone')?.value || '';

    const payload = {
        user_message: inputField.value.trim() || '(no message submitted)',
        ai_verdict: originalResultText || '(no verdict yet)',
        helpful: feedbackData.helpful,
        accurate: feedbackData.accurate,
        clarity: feedbackData.clarity,
        comment: comment,
        language: currentLang
    };

    const msgDiv = document.getElementById('standaloneFeedbackMsg');
    msgDiv.innerHTML = '<p class="feedback-thanks">🙏 Thank you! Your feedback helps us protect more seniors.</p>';

    try {
        await fetch(FEEDBACK_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
    } catch (error) {
        console.error("Feedback submission error:", error);
        msgDiv.innerHTML = '<p style="color:#b91c1c;">Something went wrong. Please try again.</p>';
    }

    // Reset
    feedbackData = { helpful: '', accurate: '', clarity: '' };
    document.querySelectorAll('#panelFeedback .fb-btn').forEach(b => b.classList.remove('selected'));
    document.getElementById('feedbackCommentStandalone').value = '';
}

// ===== KEYBOARD SHORTCUT =====
inputField.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
        checkMessage();
    }
});

// ===== INIT: LOAD SAVED PREFERENCES =====
(function init() {
    // Load text size
    const savedSize = localStorage.getItem('silverShieldTextSize');
    if (savedSize) {
        currentSize = parseInt(savedSize);
        document.documentElement.style.fontSize = currentSize + 'px';
        updateSizeButtons();
    }

    // Load language
    const savedLang = localStorage.getItem('silverShieldLang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
        applyTranslations();
    }
})();
