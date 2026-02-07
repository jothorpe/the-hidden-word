// ===== src/components/GameBoard.jsx =====
import Row from "../components/Row";

export default function GameBoard({ game }) {
  const rows = 9; // 6 hard + 3 verse stage
  const cols = game.wordLength;

  const grid = [];
  for (let r = 0; r < rows; r++) {
    grid.push(
      <Row
        key={r}
        cols={cols}
        guess={game.guesses[r] || ""}
        evaluation={game.evaluations[r]}
      />
    );
  }

  return <div style={{ display: "grid", gap: 4 }}>{grid}</div>;
}