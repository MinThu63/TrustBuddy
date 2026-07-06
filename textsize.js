// ===== Text Size Controls (shared across all pages) =====
let currentSize = 20;
const MIN_SIZE = 16;
const MAX_SIZE = 28;

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
    if (btns.length < 3) return;
    btns.forEach(btn => btn.classList.remove('active'));
    if (currentSize === 20) btns[1].classList.add('active');
    else if (currentSize > 20) btns[2].classList.add('active');
    else btns[0].classList.add('active');
}

// Load saved size on page load
(function loadTextSize() {
    const saved = localStorage.getItem('silverShieldTextSize');
    if (saved) {
        currentSize = parseInt(saved);
        document.documentElement.style.fontSize = currentSize + 'px';
        updateSizeButtons();
    }
})();
