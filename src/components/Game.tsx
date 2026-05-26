import { useState, useEffect } from "react";
import StartOfBattle from "./StartOfBattle";

const CHOICE_OPTIONS = ["bomb", "paper", "rock", "scissors", "water"];

function Game() {
  const [robotChoice, setRobotChoice] = useState<string>("");
  const [playerChoice, setPlayerChoice] = useState<string>("");
  const [roundNumber, setRoundNumber] = useState(0);

  useEffect(() => {
    if (roundNumber > 0 && playerChoice !== "") {
      const randomIndex = Math.floor(Math.random() * CHOICE_OPTIONS.length);
      setRobotChoice(CHOICE_OPTIONS[randomIndex]);
    }
  }, [playerChoice, roundNumber]);

  const onPlayerChoiceChange = (choice: string) => {
    setRobotChoice("");
    setPlayerChoice(choice);
    setRoundNumber((currentRoundNumber) => currentRoundNumber + 1);
  };

  const onResetRound = () => {
    setRobotChoice("");
    setPlayerChoice("");
  };

  return (
    <>
      <StartOfBattle
        robotChoice={robotChoice}
        selectedChoice={playerChoice}
        onSelectChoice={onPlayerChoiceChange}
        onResetRound={onResetRound}
      />
    </>
  );
}

export default Game;
