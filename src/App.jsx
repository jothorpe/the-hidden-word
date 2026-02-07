// ===== src/App.jsx =====
import { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import Keyboard from "./components/Keyboard";
import Modal from "./components/Modal";
import VersePanel from "./components/VersePanel";
import QuizPanel from "./components/QuizPanel";
import { getDailyWord } from "./services/dailyWordService";
import { evaluateGuess } from "./utils/evaluateGuess";

export default function App() {
  const [game, setGame] = useState({
    targetWord: "",
    wordLength: 0,
    guesses: [],
    evaluations: [],
    stage: 1, // 1 = pure Wordle, 2 = verse mode
    status: "loading", // loading | playing | won | lost
  });

  const [currentGuess, setCurrentGuess] = useState("");

  useEffect(() => {
    const word = getDailyWord();
    setGame(g => ({
      ...g,
      targetWord: word,
      wordLength: word.length,
      status: "playing",
    }));
  }, []);

  const submitGuess = () => {
    if (currentGuess.length !== game.wordLength) return;

    const evaluation = evaluateGuess(currentGuess, game.targetWord);

    const newGuesses = [...game.guesses, currentGuess];
    const newEvals = [...game.evaluations, evaluation];

    let newStatus = game.status;
    let newStage = game.stage;

    if (currentGuess === game.targetWord) {
      newStatus = "won"; // wins still see verse
    } else if (newGuesses.length >= 6 && game.stage === 1) {
      newStage = 2; // unlock verse stage
    } else if (newGuesses.length >= 9) {
      newStatus = "lost";
    }

    setGame(g => ({
      ...g,
      guesses: newGuesses,
      evaluations: newEvals,
      stage: newStage,
      status: newStatus,
    }));

    setCurrentGuess("");
  };

  if (game.status === "loading") return <div>Loading...</div>;

  return (
    <div style={{ maxWidth: 480, margin: "0 auto", padding: 16 }}>
      <h1>The Hidden Word</h1>
      <GameBoard game={game} />
      {game.status === "playing" && (
        <Keyboard
          wordLength={game.wordLength}
          currentGuess={currentGuess}
          setCurrentGuess={setCurrentGuess}
          onEnter={submitGuess}
        />
      )}

      {(game.status === "won" || game.status === "lost") && (
        <>
          <Modal status={game.status} targetWord={game.targetWord} />
          <VersePanel word={game.targetWord} />
          <QuizPanel word={game.targetWord} />
        </>
      )}
    </div>
  );
}
