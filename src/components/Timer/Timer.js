import React, { useState } from "react";
import Countdown from "react-countdown-now";
import Number from "../Number/Number";
import Progress from "../Progress/Progress";
import "./Timer.css";

const stops = [
  {
    duration: 25,
    endMinute: 25,
    type: "work"
  },
  {
    duration: 5,
    endMinute: 30,
    type: "break"
  },
  {
    duration: 25,
    endMinute: 55,
    type: "work"
  },
  {
    duration: 5,
    endMinute: 65,
    type: "break"
  }
];

const Timer = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const currentTime = new Date();
  const minute = currentTime.getMinutes();

  // Determine which minute we're counting down to.
  let nextStop;
  for (let stop of stops) {
    if (minute < stop.endMinute) {
      nextStop = stop;
      break;
    }
  }

  // Create a time for the timer to count down to.
  const countdownTime = new Date(currentTime.getTime());
  countdownTime.setMinutes(nextStop.endMinute);
  countdownTime.setSeconds(0);

  // Update the progress bar.
  const updateProgress = timerInfo => {
    setProgress(1 - timerInfo.total / (nextStop.duration * 60 * 1000));
  };

  return (
    <div className="Timer">
      <Countdown
        date={countdownTime}
        onComplete={onComplete}
        onTick={timerInfo => updateProgress(timerInfo)}
        renderer={({ minutes, seconds, milliseconds }) => (
          <div className="Timer-clock">
            <Number value={minutes} deemphasizeZeros={true} />
            <span className="Timer-clock-colon">:</span>
            <Number value={seconds} />
          </div>
        )}
      />
      <Progress progress={progress} />
    </div>
  );
};

export default Timer;
