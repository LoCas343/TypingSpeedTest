export const words = [
  "time","speed","code","design","logic","focus",
  "nojaid","typing","keyboard","developer","project","flutter","dart",
  "javascript","simple","clean","modern","smooth",
  "frontend","backend","system","pattern","lecture","software","mobile","android",
  "life","learning","growth","goal","challenge","solution","nojaid",
  "discipline","creativity","experience","communication",
  "algorithm","function","variable","object","class","api",
  "database","debugging","testing","performance","security","login","register",
  "architecture","refactor","scalability","async","git","github"
];

export function generateWords(count = 50) {
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(words[Math.floor(Math.random() * words.length)]);
  }
  return result.join(" ");
}
