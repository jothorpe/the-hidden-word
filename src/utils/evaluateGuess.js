// ===== src/utils/evaluateGuess.js =====
export function evaluateGuess(guess, target) {
  const result = Array(guess.length).fill("gray");
  const targetArr = target.split("");
  const used = Array(targetArr.length).fill(false);

  // First pass: greens
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === targetArr[i]) {
      result[i] = "green";
      used[i] = true;
    }
  }

  // Second pass: yellows
  for (let i = 0; i < guess.length; i++) {
    if (result[i] === "green") continue;
    const idx = targetArr.findIndex((ch, j) => ch === guess[i] && !used[j]);
    if (idx !== -1) {
      result[i] = "yellow";
      used[idx] = true;
    }
  }

  return result;
}