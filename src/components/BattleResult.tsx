import BombVsBomb from "../assets/images/bomb-character/bomb-vs-bomb.webp";
import BombVsPaper from "../assets/images/bomb-character/bomb-vs-paper.webp";
import BombVsRock from "../assets/images/bomb-character/bomb-vs-rock.webp";
import PaperVsPaper from "../assets/images/paper-character/paper-vs-paper.webp";
import PaperVsRock from "../assets/images/paper-character/paper-vs-rock.webp";
import PaperVsWater from "../assets/images/paper-character/paper-vs-water.webp";
import RockVsRock from "../assets/images/rock-character/rock-vs-rock.webp";
import RockVsScissors from "../assets/images/rock-character/rock-vs-scissors.webp";
import RockVsWater from "../assets/images/rock-character/rock-vs-water.webp";
import ScissorsVsScissors from "../assets/images/scissors-character/scissors-vs-scissors.webp";
import ScissorsVsPaper from "../assets/images/scissors-character/scissors-vs-paper.webp";
import ScissorsVsBomb from "../assets/images/scissors-character/scissors-vs-bomb.webp";
import WaterVsWater from "../assets/images/water-character/water-vs-water.webp";
import WaterVsScissors from "../assets/images/water-character/water-vs-scissors.webp";
import WaterVsBomb from "../assets/images/water-character/water-vs-bomb.webp";

type BattleResultProps = {
  computerChoice: string;
  playerChoice: string;
  imageClassName?: string;
};

type ImageAndAltTextType = {
  Image: string;
  AltText: string;
};

function BattleResult({
  computerChoice,
  playerChoice,
  imageClassName,
}: BattleResultProps) {
  const robotChoice = computerChoice;
  const userChoice = playerChoice;
  let ImageAndAltText: ImageAndAltTextType = {
    Image: "",
    AltText: "",
  };

  const battleResults = (computerChoice: string, playerChoice: string) => {
    switch (playerChoice) {
      case "rock":
        switch (computerChoice) {
          case "rock":
            ImageAndAltText.Image = RockVsRock;
            ImageAndAltText.AltText = "Rock Ties Rock";
            return ImageAndAltText;
          case "paper":
            ImageAndAltText.Image = PaperVsRock;
            ImageAndAltText.AltText = "Paper beats Rock by wrapping around it";
            return ImageAndAltText;
          case "scissors":
            ImageAndAltText.Image = RockVsScissors;
            ImageAndAltText.AltText = "Rock beats Scissors by crushing them";
            return ImageAndAltText;
          case "bomb":
            ImageAndAltText.Image = BombVsRock;
            ImageAndAltText.AltText = "Bomb beats Rock by exploding";
            return ImageAndAltText;
          case "water":
            ImageAndAltText.Image = RockVsWater;
            ImageAndAltText.AltText =
              "Rock beats Water by causing it to splash apart";
            return ImageAndAltText;
        }
        break;
      case "paper":
        switch (computerChoice) {
          case "rock":
            ImageAndAltText.Image = PaperVsRock;
            ImageAndAltText.AltText = "Paper beats Rock by wrapping around it";
            return ImageAndAltText;
          case "paper":
            ImageAndAltText.Image = PaperVsPaper;
            ImageAndAltText.AltText = "Paper ties Paper";
            return ImageAndAltText;
          case "scissors":
            ImageAndAltText.Image = ScissorsVsPaper;
            ImageAndAltText.AltText = "Scissors beats Paper by cutting it";
            return ImageAndAltText;
          case "bomb":
            ImageAndAltText.Image = BombVsPaper;
            ImageAndAltText.AltText = "Bomb beats Paper by exploding";
            return ImageAndAltText;
          case "water":
            ImageAndAltText.Image = PaperVsWater;
            ImageAndAltText.AltText = "Paper beats Water by absorbing it";
            return ImageAndAltText;
        }
        break;
      case "scissors":
        switch (computerChoice) {
          case "rock":
            ImageAndAltText.Image = RockVsScissors;
            ImageAndAltText.AltText = "Rock beats Scissors by crushing them";
            return ImageAndAltText;
          case "paper":
            ImageAndAltText.Image = ScissorsVsPaper;
            ImageAndAltText.AltText = "Scissors beats Paper by cutting it";
            return ImageAndAltText;
          case "scissors":
            ImageAndAltText.Image = ScissorsVsScissors;
            ImageAndAltText.AltText = "Scissors ties Scissors";
            return ImageAndAltText;
          case "bomb":
            ImageAndAltText.Image = ScissorsVsBomb;
            ImageAndAltText.AltText = "Bomb beats Scissors by exploding";
            return ImageAndAltText;
          case "water":
            ImageAndAltText.Image = WaterVsScissors;
            ImageAndAltText.AltText = "Water beats Scissors by rusting them";
            return ImageAndAltText;
        }
        break;
      case "bomb":
        switch (computerChoice) {
          case "rock":
            ImageAndAltText.Image = BombVsRock;
            ImageAndAltText.AltText = "Bomb beats Rock by exploding";
            return ImageAndAltText;
          case "paper":
            ImageAndAltText.Image = BombVsPaper;
            ImageAndAltText.AltText = "Bomb beats Paper by exploding";
            return ImageAndAltText;
          case "scissors":
            ImageAndAltText.Image = ScissorsVsBomb;
            ImageAndAltText.AltText = "Scissors beats Bomb by cutting the fuse";
            return ImageAndAltText;
          case "bomb":
            ImageAndAltText.Image = BombVsBomb;
            ImageAndAltText.AltText = "Bomb ties Bomb";
            return ImageAndAltText;
          case "water":
            ImageAndAltText.Image = WaterVsBomb;
            ImageAndAltText.AltText = "Water beats Bomb by dousing its fuse";
            return ImageAndAltText;
        }
        break;
      case "water":
        switch (computerChoice) {
          case "rock":
            ImageAndAltText.Image = RockVsWater;
            ImageAndAltText.AltText =
              "Rock beats Water by causing it to splash apart";
            return ImageAndAltText;
          case "paper":
            ImageAndAltText.Image = PaperVsWater;
            ImageAndAltText.AltText = "Paper beats Water by absorbing it";
            return ImageAndAltText;
          case "scissors":
            ImageAndAltText.Image = WaterVsScissors;
            ImageAndAltText.AltText = "Water beats Scissors by rusting them";
            return ImageAndAltText;
          case "bomb":
            ImageAndAltText.Image = WaterVsBomb;
            ImageAndAltText.AltText = "Water beats Bomb by dousing its fuse";
            return ImageAndAltText;
          case "water":
            ImageAndAltText.Image = WaterVsWater;
            ImageAndAltText.AltText = "Water ties Water";
            return ImageAndAltText;
        }
        break;
    }
  };

  battleResults(robotChoice, userChoice);

  return (
    <>
      <img
        src={ImageAndAltText.Image}
        alt={ImageAndAltText.AltText}
        className={imageClassName}
      />
    </>
  );
}

export default BattleResult;
