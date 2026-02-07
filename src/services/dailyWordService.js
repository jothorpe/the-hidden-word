// ===== src/services/dailyWordService.js =====
const WORD_LIST = [
  "FAITH",
  "GRACE",
  "DAVID",
  "MOSES",
  "ANGEL",
  "JESUS",
  "COVENANT",
  "PROPHET",
  "REDEMPTION",
  "PSALM",
];

export function getDailyWord() {
  const start = new Date("2025-01-01");
  const today = new Date();
  const days = Math.floor((today - start) / (1000 * 60 * 60 * 24));
  const index = days % WORD_LIST.length;
  return WORD_LIST[index];
}