import React, { useState, useEffect } from "react";

interface TimerProps {
  onTimeEnd?: () => void;
}

const Timer = ({ onTimeEnd }: TimerProps) => {
  const randomProblemInitialSeconds = 600;
  const [timeRemainingInSeconds, setTimeRemaining] = useState(randomProblemInitialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeRemainingInSeconds > 0) {
        setTimeRemaining(timeRemainingInSeconds - 1);
      } else {
        clearInterval(interval);
        onTimeEnd?.();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeRemainingInSeconds, onTimeEnd]);

  const minutes = Math.floor(timeRemainingInSeconds / 60);
  const seconds = timeRemainingInSeconds % 60;

  return (
    <div className="bg-white border-black border-2 text-black rounded w-40 h-30 flex items-center justify-center text-4xl">
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default Timer;
