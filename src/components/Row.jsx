// ===== src/components/Row.jsx =====
import Cell from "./Cell";

export default function Row({ cols, guess, evaluation }) {
  const cells = [];
  for (let c = 0; c < cols; c++) {
    const letter = guess[c] || "";
    const status = evaluation ? evaluation[c] : null; // green | yellow | gray
    cells.push(<Cell key={c} letter={letter} status={status} />);
  }
  return <div style={{ display: "flex", gap: 4 }}>{cells}</div>;
}
