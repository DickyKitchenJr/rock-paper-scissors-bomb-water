import { useState } from "react";
import BattleResult from "./BattleResult";
import RobotWelcoming from "../assets/images/robot-character/robot-welcoming.webp";
import RobotAngry from "../assets/images/robot-character/robot-angry.webp";
import RobotCelebrating from "../assets/images/robot-character/robot-celebrating.webp";
import RobotBored from "../assets/images/robot-character/robot-bored.webp";
import RobotImpatient from "../assets/images/robot-character/robot-impatient.webp";
import BombCard from "../assets/images/bomb-character/bomb-card.webp";
import PaperCard from "../assets/images/paper-character/paper-card.webp";
import RockCard from "../assets/images/rock-character/rock-card.webp";
import ScissorsCard from "../assets/images/scissors-character/scissors-card.webp";
import WaterCard from "../assets/images/water-character/water-card.webp";
import "./StartOfBattle.css";

type StartOfBattleProps = {
  robotChoice: string;
  selectedChoice: string;
  onSelectChoice: (choice: string) => void;
  onResetRound: () => void;
};

type Choice = "bomb" | "paper" | "rock" | "scissors" | "water";

const CHOICE_BEATS: Record<Choice, Choice[]> = {
  bomb: ["rock", "paper"],
  paper: ["rock", "water"],
  rock: ["scissors", "water"],
  scissors: ["paper", "bomb"],
  water: ["bomb", "scissors"],
};

const CARD_OPTIONS = [
  {
    value: "bomb",
    image: BombCard,
    alt: "Bomb character card showing bomb beats rock and paper, but loses to scissors and water",
  },
  {
    value: "paper",
    image: PaperCard,
    alt: "Paper character card showing paper beats rock and water, but loses to bomb and scissors",
  },
  {
    value: "rock",
    image: RockCard,
    alt: "Rock character card showing rock beats scissors and water, but loses to bomb and paper",
  },
  {
    value: "scissors",
    image: ScissorsCard,
    alt: "Scissors character card showing scissors beats paper and bomb, but loses to rock and water",
  },
  {
    value: "water",
    image: WaterCard,
    alt: "Water character card showing water beats bomb and scissors, but loses to rock and paper",
  },
];

function StartOfBattle({
  robotChoice,
  selectedChoice,
  onSelectChoice,
  onResetRound,
}: StartOfBattleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const previousIndex =
    currentIndex === 0 ? CARD_OPTIONS.length - 1 : currentIndex - 1;
  const nextIndex =
    currentIndex === CARD_OPTIONS.length - 1 ? 0 : currentIndex + 1;

  const moveToPrevious = () => {
    setCurrentIndex((index) =>
      index === 0 ? CARD_OPTIONS.length - 1 : index - 1,
    );
  };

  const moveToNext = () => {
    setCurrentIndex((index) =>
      index === CARD_OPTIONS.length - 1 ? 0 : index + 1,
    );
  };

  const currentCard = CARD_OPTIONS[currentIndex];
  const previousCard = CARD_OPTIONS[previousIndex];
  const nextCard = CARD_OPTIONS[nextIndex];
  const hasBattleResult = robotChoice !== "" && selectedChoice !== "";

  let headingText = "Choose Your Warrior!";
  let robotImage = RobotWelcoming;
  let robotImageAlt = "Robot Player sitting behind a table in a welcoming pose";

  if (hasBattleResult) {
    if (robotChoice === selectedChoice) {
      headingText = `You matched my ${robotChoice}...`;
      robotImage = RobotImpatient;
      robotImageAlt = "Robot player looking impatient after a tied round";
    } else if (
      (CHOICE_BEATS[selectedChoice as Choice] ?? []).includes(
        robotChoice as Choice,
      )
    ) {
      headingText = `Your ${selectedChoice} beat my ${robotChoice}!`;
      robotImage = RobotAngry;
      robotImageAlt = "Robot player looking angry after losing the round";
    } else {
      headingText = `My ${robotChoice} beat your ${selectedChoice}!`;
      robotImage = RobotCelebrating;
      robotImageAlt = "Robot player celebrating after winning the round";
    }
  }

  return (
    <>
      <section className="battle-select">
        <h1 className="start-of-battle-h1">{headingText}</h1>

        <img
          src={robotImage}
          alt={robotImageAlt}
          className="battle-robot-image"
        />

        {hasBattleResult ? (
          <>
            <BattleResult
              computerChoice={robotChoice}
              playerChoice={selectedChoice}
              imageClassName="carousel-card-image"
            />
            <button
              type="button"
              className="carousel-select"
              onClick={onResetRound}
            >
              Play another round
            </button>
          </>
        ) : (
          <>
            <div
              className="battle-carousel"
              aria-label="Player choice carousel"
            >
              <button
                type="button"
                className="carousel-nav"
                onClick={moveToPrevious}
                aria-label="Previous card"
              >
                Previous
              </button>

              <div className="carousel-track" aria-live="polite">
                <div
                  className="carousel-card-shell carousel-card-shell-side"
                  aria-hidden="true"
                >
                  <img
                    src={previousCard.image}
                    alt={previousCard.alt}
                    className="carousel-card-image"
                  />
                  <p className="carousel-card-name">{previousCard.value}</p>
                </div>

                <div className="carousel-card-shell carousel-card-shell-active">
                  <img
                    src={currentCard.image}
                    alt={currentCard.alt}
                    className="carousel-card-image"
                  />
                  <p className="carousel-card-name">{currentCard.value}</p>
                </div>

                <div
                  className="carousel-card-shell carousel-card-shell-side"
                  aria-hidden="true"
                >
                  <img
                    src={nextCard.image}
                    alt={nextCard.alt}
                    className="carousel-card-image"
                  />
                  <p className="carousel-card-name">{nextCard.value}</p>
                </div>
              </div>

              <button
                type="button"
                className="carousel-nav"
                onClick={moveToNext}
                aria-label="Next card"
              >
                Next
              </button>
            </div>

            <button
              type="button"
              className="carousel-select"
              onClick={() => onSelectChoice(currentCard.value)}
            >
              Choose {currentCard.value}
            </button>
          </>
        )}

        {selectedChoice !== "" ? (
          <p className="carousel-selected">Selected: {selectedChoice}</p>
        ) : null}
      </section>
    </>
  );
}

export default StartOfBattle;
