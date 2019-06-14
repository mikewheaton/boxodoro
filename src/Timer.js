import React from "react";
import Countdown from "react-countdown-now";
import Number from "./components/Number/Number";
import "./Timer.css";

const Timer = ({ onComplete }) => {
  // Get the current time and minutes.
  const currentTime = new Date();
  const minute = currentTime.getMinutes();

  // Determine which minute we're counting down to.
  const stops = [25, 30, 55, 60];
  let nextStop;
  for (let stop of stops) {
    if (minute < stop) {
      nextStop = stop;
      break;
    }
  }

  // Create a time for the timer to count down to.
  const countdownTime = new Date(currentTime.getTime());
  countdownTime.setMinutes(nextStop);
  countdownTime.setSeconds(0);

  return (
    <div className="Timer">
      <Countdown
        date={countdownTime}
        onComplete={onComplete}
        intervalDelay={500}
        renderer={({ minutes, seconds, milliseconds }) => (
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
