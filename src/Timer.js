import React from "react";
import Countdown from "react-countdown-now";

const Timer = ({ onComplete }) => {
  // Get the current time and minutes.
  const currentTime = new Date();
  const minute = currentTime.getMinutes();

  // Determine which minute we're counting down to.
  var stops = [25, 30, 55, 60];
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
    <Countdown
      date={countdownTime}
      onComplete={onComplete}
      intervalDelay={500}
      renderer={({ minutes, seconds, milliseconds }) => (
        <div
          style={{
            fontSize: 200,
            fontFamily: "Space Mono, monospace",
            textAlign: "center"
          }}
        >
          {minutes}:{("0" + seconds).slice(-2)}
        </div>
      )}
    />
  );
};

export default Timer;
