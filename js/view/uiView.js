export function renderWords(text) {
  const box = document.getElementById("words");
  box.innerHTML = "";
  text.split("").forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.className = "char";
    box.appendChild(span);
  });
}

export function setActive(i) {
  document
    .querySelectorAll(".char")
    .forEach((c) => c.classList.remove("active"));
  document.querySelectorAll(".char")[i]?.classList.add("active");
}

export function markChar(i, correct) {
  const c = document.querySelectorAll(".char")[i];
  if (!c) return;
  c.classList.add(correct ? "correct" : "wrong");
}

export function clearChar(i) {
  const c = document.querySelectorAll(".char")[i];
  if (!c) return;
  c.className = "char";
}

export const updateTime = (t) =>
  (document.getElementById("time").textContent = t);

export const updateScore = (s) =>
  (document.getElementById("score").textContent = s);

export function showResult(score, wpm) {
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("final-score").textContent = score;
  document.getElementById("final-wpm").textContent = wpm;
}
