import { startGame, restartGame } from "./controller/appController.js";

window.onload = startGame;
document.getElementById("restart").onclick = restartGame;
