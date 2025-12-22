import { generateWords } from "../model/wordsModel.js";
import {
  renderWords,
  setActive,
  markChar,
  clearChar,
  updateTime,
  updateScore,
} from "../view/uiView.js";

let text = "";
let index = 0;
let time = 60;
let correctChars = 0;
let timer = null;
let started = false;

const sound = new Audio("assets/sounds/type.mp3");
sound.volume = 0.125;

export function startGame() {
  loadNewWords();

  index = 0;
  time = 60;
  correctChars = 0;
  started = false;

  setActive(0);
  updateTime(time);
  updateScore(0);

  const input = document.getElementById("word-input");
  input.value = "";
  input.disabled = false;
  input.focus();

  input.addEventListener("keydown", handleTyping);
}

function loadNewWords() {
  text = generateWords(50);
  renderWords(text);
  index = 0;
  setActive(0);
}

function startTimer() {
  if (started) return;
  started = true;

  timer = setInterval(() => {
    time--;
    updateTime(time);
    if (time <= 10) {
      document.getElementById("time").style.color = "red";
    }
    if (time === 0) finishGame();
  }, 1000);
}

function handleTyping(e) {
  if (time === 0) return;

  sound.currentTime = 0;
  sound.play();
  startTimer();

  if (e.key === "Backspace") {
    if (index > 0) {
      index--;
      clearChar(index);
      setActive(index);
    }
    return;
  }

  if (e.key.length !== 1) return;

  if (e.key === text[index]) {
    markChar(index, true);
    correctChars++;
    updateScore(correctChars);
  } else {
    markChar(index, false);
  }

  index++;
  setActive(index);

  if (index >= text.length) {
    loadNewWords();
  }
}

function finishGame() {
  clearInterval(timer);

  const input = document.getElementById("word-input");
  const wordsBox = document.getElementById("words");
  const resultBox = document.getElementById("result");

  input.disabled = true;
  wordsBox.classList.add("hidden");

  const minutes = (60 - time) / 60 || 1;
  const wpm = Math.round(correctChars / 5 / minutes);

  resultBox.classList.remove("hidden");
  document.getElementById("final-score").textContent = correctChars;
  document.getElementById("final-wpm").textContent = wpm;
}

export function restartGame() {
  location.reload();
}
