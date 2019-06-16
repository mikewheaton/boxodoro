import buzz from "buzz";
import React, { useState } from "react";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";
import Progress from "../Progress/Progress";
import Timer from "../Timer/Timer";
import "./App.css";

const App = () => {
  const [completed, setCompleted] = useState(0);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const chime = new buzz.sound(
    "https://soundbible.com/mp3/Electronic_Chime-KevanGC-495939803.mp3"
  );
  chime.mute();

  const toggleMute = () => {
    this.chime.toggleMute();
    setMuted(!muted);
  };

  const handleComplete = () => {
    if (!muted) {
      this.chime.play();
    }

    // Increment the timer's key so that it starts the next countdown.
    setCompleted(completed + 1);
  };

  const handleTick = (timerInfo, nextStop) => {
    setProgress(1 - timerInfo.total / (nextStop.duration * 60 * 1000));
  };

  return (
    <div className="App">
      <Timer onTick={handleTick} onComplete={handleComplete} key={completed} />
      <div className="App-progressWrapper">
        <Progress progress={progress} />
      </div>
      <button
        className={`App-toggleMuteButton ${muted && "is-muted"}`}
        onClick={toggleMute}
      >
        {muted ? <MdVolumeOff /> : <MdVolumeUp />}
      </button>
    </div>
  );
};

export default App;
