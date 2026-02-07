// ===== src/components/Modal.jsx =====
export default function Modal({ status, targetWord }) {
  return (
    <div style={{ marginTop: 16, padding: 8, border: "1px solid #ccc" }}>
      {status === "won" ? "You found it!" : "Not today."}
      <div>The word was: {targetWord}</div>
    </div>
  );
}