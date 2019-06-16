import buzz from "buzz";
import React, { useState } from "react";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";
import Progress from "../Progress/Progress";
import Timer from "../Timer/Timer";
import "./App.css";

const App = () => {
  const [focusCount, setFocusCount] = useState(0);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [breakCount, setBreakCount] = useState(0);

  const chime = new buzz.sound(
    "https://soundbible.com/mp3/Electronic_Chime-KevanGC-495939803.mp3"
  );
  chime.mute();

  const toggleMute = () => {
    this.chime.toggleMute();
    setMuted(!muted);
  };

  const handleComplete = timerType => {
    if (!muted) {
      this.chime.play();
    }

    timerType === "focus"
      ? setFocusCount(focusCount + 1)
      : setBreakCount(breakCount + 1);
  };

  const handleTick = (timerInfo, nextStop) => {
    setProgress(1 - timerInfo.total / (nextStop.duration * 60 * 1000));
  };

  return (
    <div className="App">
      <Timer
        onTick={handleTick}
        onComplete={handleComplete}
        key={`${focusCount + breakCount}$`}
      />
      <div className="App-progress">
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
