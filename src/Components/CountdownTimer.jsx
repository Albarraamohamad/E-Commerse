import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Set initial time (3 days, 23 hours, 19 minutes, 56 seconds)
  const initialTime = 3 * 24 * 60 * 60 + 23 * 60 * 60 + 19 * 60 + 56;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) return; // Stop if countdown reaches zero

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [timeLeft]);

  // Convert seconds into Days, Hours, Minutes, Seconds
  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex gap-3 font-bold text-4xl">
      <span>{days}d </span>:
      <span>{hours}h </span>:
      <span>{minutes}m </span>:
      <span>{seconds}s</span>
    </div>
  );
};

export default CountdownTimer;
