const displayHours = document.getElementById("hours");
const displayMinutes = document.getElementById("minutes");
const displaySeconds = document.getElementById("seconds");
const displayMilliseconds = document.getElementById("milliseconds");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

let startTime = 0;
let currentTime = 0;
let elapsedTime = 0;
let timerInterval = null;

function updateTime() {
  currentTime = new Date().getTime();
  elapsedTime = currentTime - startTime;

  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor((elapsedTime % 3600000) / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = elapsedTime % 1000;

  displayHours.textContent = hours.toString().padStart(2, "0");
  displayMinutes.textContent = minutes.toString().padStart(2, "0");
  displaySeconds.textContent = seconds.toString().padStart(2, "0");
  displayMilliseconds.textContent = milliseconds.toString().padStart(3, "0");
}

function startTimer() {
  startTime = new Date().getTime() - elapsedTime;

  timerInterval = setInterval(() => {
    updateTime();
  }, 10);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);

  startTime = 0;
  currentTime = 0;
  elapsedTime = 0;

  displayHours.textContent = "00";
  displayMinutes.textContent = "00";
  displaySeconds.textContent = "00";
  displayMilliseconds.textContent = "000";
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
