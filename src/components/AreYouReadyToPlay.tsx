import "./AreYouReadyToPlay.css";
import HeroImage from "../assets/images/characters-hero-image.webp";

type AreYouReadyToPlayProps = {
  onReady: () => void;
};

function AreYouReadyToPlay({ onReady }: AreYouReadyToPlayProps) {
  return (
    <>
      <div className="hero-outer-div">
        <h1 className="hero-h1">ARE YOU READY TO PLAY</h1>
        <img
          src={HeroImage}
          alt="Cartoon Versions of Characters representing Rock, Paper, Scissors, Bomb, and Water"
          className="hero-image"
        />
        <div className="hero-buttons-div">
          <button className="hero-button yes" onClick={onReady}>YES</button>
          <button className="hero-button no">NO</button>
        </div>
      </div>
    </>
  );
}

export default AreYouReadyToPlay;
