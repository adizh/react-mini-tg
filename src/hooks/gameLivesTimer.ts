import { useState, useEffect } from "react";

type TimerHookReturnType = [number, number | null, boolean];

function useTimer(initialRating: number): TimerHookReturnType {
  const [rating, setRating] = useState<number>(() => {
    const lives = localStorage.getItem("lives");
    return lives ? parseInt(lives) : initialRating;
  });
  const [timeLeft, setTimeLeft] = useState<number | null>(15);
  const [isStarted, setIsStarted] = useState<boolean>(false);

  useEffect(() => {
    let startTimestamp: number;
    const storedStartTime = localStorage.getItem("gameLiveStart");
    if (!storedStartTime || isNaN(parseInt(storedStartTime))) {
      startTimestamp = Math.floor(Date.now() / 1000);
     // localStorage.setItem("gameLiveStart", startTimestamp.toString());
    } else {
      startTimestamp = parseInt(storedStartTime);
    }
    const seconds =5;

    const updateRatingAndTimeLeft = () => {
      const currentTime = Math.floor(Date.now() / 1000);
      const elapsedTime = currentTime - startTimestamp;
      const newRating = Math.min(initialRating + Math.floor(elapsedTime / seconds), 5);

      if (newRating !== rating) {
        setRating(newRating);
        const nowTime = Math.floor(Date.now() / 1000);
        //localStorage.setItem("gameLiveStart", nowTime.toString());
      }

      const newTimeLeft = seconds - (elapsedTime % seconds);
      setTimeLeft(newRating >= 5 ? null : newTimeLeft);
    };

    setIsStarted(true);
    const intervalId = setInterval(updateRatingAndTimeLeft, 1000);

    return () => clearInterval(intervalId);
  }, [initialRating, rating]);

  useEffect(() => {
    if (timeLeft !== null) {
      const intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft !== null && prevTimeLeft > 0) {
            return prevTimeLeft - 1;
          } else {
            return 0;
          }
        });
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (rating >= 5) {
     // localStorage.removeItem("gameLiveStart");
      setIsStarted(false);
      setTimeLeft(0);
     // localStorage.setItem("lives", "5");
    }
  }, [rating]);

  return [rating, timeLeft, isStarted];
}

export default useTimer;
