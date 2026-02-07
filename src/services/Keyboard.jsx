// ===== src/components/Keyboard.jsx =====
const KEYS = [
  ["Q","W","E","R","T","Y","U","I","O","P"],
  ["A","S","D","F","G","H","J","K","L"],
  ["ENTER","Z","X","C","V","B","N","M","⌫"],
];

export default function Keyboard({ wordLength, currentGuess, setCurrentGuess, onEnter }) {
  const press = key => {
    if (key === "ENTER") {
      onEnter();
    } else if (key === "⌫") {
      setCurrentGuess(g => g.slice(0, -1));
    } else if (currentGuess.length < wordLength) {
      setCurrentGuess(g => g + key);
    }
  };

  return (
    <div style={{ marginTop: 16 }}>
      {KEYS.map((row, i) => (
        <div key={i} style={{ display: "flex", justifyContent: "center" }}>
          {row.map(k => (
            <button key={k} onClick={() => press(k)} style={{ margin: 2 }}>
              {k}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
