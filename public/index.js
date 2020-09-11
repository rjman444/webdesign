const startBtn = document.querySelector(".start-btn");
const timerText = document.querySelector(".timer-text");
const stopBtn = document.querySelector(".stop-btn");
const resetBtn = document.querySelector(".reset-btn");
const pomoBtn = document.querySelector(".pomo-btn");
const breakBtn = document.querySelector(".break-btn");
const playBtn = document.querySelector(".play");

let timerRunning = false;
let duration = 1500;
let timerSelection = "pomo";
let timerID;
let playing = false;

function display() {
  minutes = parseInt(duration / 60);
  seconds = parseInt(duration % 60);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  timerText.textContent = minutes + ":" + seconds;
}

function tick() {
  if (duration-- === 0) {
    document.getElementById("gate").play();
    window.alert("Time's Up!");
    timerSelection === "pomo" ? resetTimer(1500) : resetTimer(300);
    document.getElementById("gate").pause();
  }
  display();
}

function startTimer() {
  if (!timerRunning) {
    timerRunning = true;
    timerID = setInterval(tick, 1000);
  }
}

function stopTimer() {
  clearInterval(timerID);
  timerRunning = false;
}

function resetTimer(i) {
  clearInterval(timerID);
  duration = i;
  display();
  timerRunning = false;
}

function loadEventListeners() {
  startBtn.addEventListener("click", startTimer);
  stopBtn.addEventListener("click", stopTimer);
  resetBtn.addEventListener("click", () => {
    timerSelection === "pomo" ? resetTimer(1500) : resetTimer(300);
  });
  pomoBtn.addEventListener("click", () => {
    resetTimer(1500);
    startTimer();
    timerSelection = "pomo";
  });
  breakBtn.addEventListener("click", () => {
    resetTimer(300);
    startTimer();
    timerSelection = "break";
  });
  playBtn.addEventListener("click", () => {
    if (!playing) {
      document.getElementById("gate").play();
      playing = true;
    } else {
      document.getElementById("gate").pause();
      playing = false;
    }
  });
}

loadEventListeners();
