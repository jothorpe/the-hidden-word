// ===== src/components/Cell.jsx =====
export default function Cell({ letter, status }) {
  const bg = {
    green: "#6aaa64",
    yellow: "#c9b458",
    gray: "#787c7e",
  }[status || "white"] || "white";

  return (
    <div
      style={{
        width: 48,
        height: 48,
        border: "1px solid #ccc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 24,
        fontWeight: "bold",
        background: bg,
        color: status ? "white" : "black",
      }}
    >
      {letter}
    </div>
  );
}

