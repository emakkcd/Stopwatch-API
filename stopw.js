let display = document.getElementById("time-display");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resumeBtn = document.getElementById("resume");
let resetBtn = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer = null;

// Update display
function updateDisplay() {
    let h = hours.toString().padStart(2, "0");
    let m = minutes.toString().padStart(2, "0");
    let s = seconds.toString().padStart(2, "0");
    let ms = milliseconds.toString().padStart(2, "0");
    display.textContent = `${h}:${m}:${s}.${ms}`;
}

// Update button states
function updateButtons(isRunning) {
    startBtn.disabled = isRunning;
    stopBtn.disabled = !isRunning;
    resumeBtn.disabled = isRunning; // only enabled when stopped
    resetBtn.disabled = false;
}

// Start
startBtn.addEventListener("click", function() {
    if (timer !== null) return; // already running
    updateButtons(true);
    timer = setInterval(updateTime, 10);
});

// Resume
resumeBtn.addEventListener("click", function() {
    if (timer !== null) return; // already running
    updateButtons(true);
    timer = setInterval(updateTime, 10);
});

// Stop
stopBtn.addEventListener("click", function() {
    clearInterval(timer);
    timer = null;
    updateButtons(false);
});

// Reset
resetBtn.addEventListener("click", function() {
    clearInterval(timer);
    timer = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    updateButtons(false);
});

// Timer increment function
function updateTime() {
    milliseconds += 1;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds += 1;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes += 1;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours += 1;
    }
    updateDisplay();
}

// Initialize
updateDisplay();
updateButtons(false);
