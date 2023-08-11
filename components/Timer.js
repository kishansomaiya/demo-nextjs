import React, { useState, useEffect } from 'react';

const Timer = ({ onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(10); // Initial time in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000); // Update every second

    // Clear interval and trigger onTimeout when time reaches 0
    if (timeLeft === 0) {
      clearInterval(timer);
      onTimeout();
    }

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft, onTimeout]);

  return <div className="timer">Time remaining: {timeLeft} seconds</div>;
};

export default Timer;
