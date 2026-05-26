import { useState } from "react";
import "./AreYouReadyToPlay.css";
import HeroCharacters from "../assets/images/characters-hero-image.webp";
import RobotAngry from "../assets/images/robot-character/robot-angry.webp";
import RobotBored from "../assets/images/robot-character/robot-bored.webp";
import RobotMad from "../assets/images/robot-character/robot-mad.webp";

type AreYouReadyToPlayProps = {
  onReady: () => void;
};

function AreYouReadyToPlay({ onReady }: AreYouReadyToPlayProps) {
  const [howManyTimesClickedNo, setHowManyTimesClickedNo] = useState(0);
  let h1HeroText = "ARE YOU READY TO PLAY";
  let HeroImage = HeroCharacters;
  let heroAltText =
    "Cartoon Versions of Characters representing Rock, Paper, Scissors, Bomb, and Water";

  const handleNoClick = () => {
    setHowManyTimesClickedNo(howManyTimesClickedNo + 1);
  };

  if (howManyTimesClickedNo === 1) {
    h1HeroText = "THEN WHY ARE YOU HERE? CLICK YES!";
    HeroImage = RobotAngry;
    heroAltText =
      "A frustrated looking robot character with his hands on the desk in front of him, looking at the viewer with an annoyed expression on his face";
  }

  if (howManyTimesClickedNo === 2) {
    h1HeroText = "UGH, FINE. I'LL JUST WAIT HERE UNTIL YOU CLICK YES...";
    HeroImage = RobotBored;
    heroAltText =
      "A bored looking robot character with his head resting on his hand, looking at the viewer with a tired expression on his face";
  }

  if (howManyTimesClickedNo > 2 && howManyTimesClickedNo < 50) {
    h1HeroText = `I'VE ALREADY TOLD YOU ${howManyTimesClickedNo} TIMES TO CLICK YES.`;
    HeroImage = RobotBored;
    heroAltText =
      "A bored looking robot character with his head resting on his hand, looking at the viewer with a tired expression on his face";
  }

  if (howManyTimesClickedNo >= 50) {
    h1HeroText = "I SAID CLICK YES!";
    HeroImage = RobotMad;
    heroAltText =
      "A mad looking robot character with his fist on the desk in front of him, looking at the viewer with an angry expression on his face and steam coming out the side of his head";
  }

  return (
    <>
      <div className="hero-outer-div">
        <h1 className="hero-h1">{h1HeroText}</h1>
        <img src={HeroImage} alt={heroAltText} className="hero-image" />
        <div className="hero-buttons-div">
          <button className="hero-button yes" onClick={onReady}>
            YES
          </button>
          {howManyTimesClickedNo < 50 ? (
            <button className="hero-button no" onClick={handleNoClick}>
              NO
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default AreYouReadyToPlay;
