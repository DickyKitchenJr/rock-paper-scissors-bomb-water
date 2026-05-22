import { useState } from "react";
import "./App.css";
import AreYouReadyToPlay from "./components/AreYouReadyToPlay.tsx";
import Game from "./components/Game.tsx";

function App() {
  const [readyToPlay, setReadyToPlay] = useState(false);

  const handleReadyToPlay = () => {
    setReadyToPlay(true);
  };

  return (
    <>
      {!readyToPlay ? (
        <AreYouReadyToPlay onReady={handleReadyToPlay} />
      ) : (
        <Game />
      )}
    </>
  );
}

export default App;
