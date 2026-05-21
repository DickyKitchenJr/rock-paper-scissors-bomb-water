import { useState } from 'react'
import './App.css'
import AreYouReadyToPlay from './components/AreYouReadyToPlay'

function App() {
  const [readyToPlay, setReadyToPlay] = useState(false)

  const handleReadyToPlay = () => {
    setReadyToPlay(true)
  }

  return (
    <>
      {!readyToPlay ? 
      <AreYouReadyToPlay onReady={handleReadyToPlay} />
      : null}
    </>
  )
}

export default App
