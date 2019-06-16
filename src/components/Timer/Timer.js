import React from "react";
import Countdown from "react-countdown-now";
import Number from "../Number/Number";
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
    endMinute: 60,
    type: "break"
  }
];

const Timer = ({ onComplete, onTick }) => {
  const currentTime = new Date();
  const minute = currentTime.getMinutes();

  // Determine which minute we're counting down to.
  let nextStop;
  for (const stop of stops) {
    if (minute < stop.endMinute) {
      nextStop = stop;
      break;
    }
  }

  // Create a time for the timer to count down to.
  const countdownTime = new Date(currentTime.getTime());
  countdownTime.setMinutes(nextStop.endMinute);
  countdownTime.setSeconds(0);

  return (
    <div className="Timer">
      <Countdown
        date={countdownTime}
        onComplete={onComplete}
        onTick={timerInfo => onTick(timerInfo, nextStop)}
        renderer={({ minutes, seconds }) => (
          <div className="Timer-clock">
            <Number value={minutes} deemphasizeZeros={true} />
            <span className="Timer-clock-colon">:</span>
            <Number value={seconds} />
          </div>
        )}
      />
    </div>
  );
};

export default Timer;
