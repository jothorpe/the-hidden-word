// ===== src/components/QuizPanel.jsx =====
const QUIZZES = {
  FAITH: {
    question: "According to Hebrews 11:1, faith relates to:",
    options: ["What we can see", "What we cannot see"],
    correctIndex: 1,
  },
};

export default function QuizPanel({ word }) {
  const q = QUIZZES[word];
  if (!q) return null;

  const answer = idx => {
    alert(idx === q.correctIndex ? "Correct!" : "Incorrect.");
  };

  return (
    <div style={{ marginTop: 16, padding: 8, border: "1px solid #ccc" }}>
      <p>{q.question}</p>
      {q.options.map((opt, i) => (
        <button key={i} onClick={() => answer(i)} style={{ display: "block", marginTop: 4 }}>
          {opt}
        </button>
      ))}
    </div>
  );
}