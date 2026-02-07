// ===== src/components/VersePanel.jsx =====
const VERSES = {
  FAITH: {
    reference: "Hebrews 11:1 (NIV)",
    text: "Now ____ is confidence in what we hope for and assurance about what we do not see.",
  },
};

export default function VersePanel({ word }) {
  const v = VERSES[word];
  if (!v) return null;

  return (
    <div style={{ marginTop: 16, padding: 8, border: "1px solid #ccc" }}>
      <strong>{v.reference}</strong>
      <p>{v.text.replace("____", word)}</p>
    </div>
  );
}
