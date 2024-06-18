import { useState, useEffect } from "react";

type TimerHookReturnType = [number, number | null, boolean];

function useTimer(initialRating: number): TimerHookReturnType {
  const [rating, setRating] = useState<number>(initialRating);
  const [timeLeft, setTimeLeft] = useState<number | null>(15);
  const [isStarted, setIsStarted] = useState<boolean>(false);

  useEffect(() => {
    let startTimestamp: number;
    const storedStartTime = localStorage.getItem("gameLiveStart");
    if (!storedStartTime || isNaN(parseInt(storedStartTime))) {
      //startTimestamp = Math.floor(Date.now() / 1000);
    } else {
      startTimestamp = parseInt(storedStartTime);
    }

    const updateRatingAndTimeLeft = () => {
      setIsStarted(true);
      const currentTime = Math.floor(Date.now() / 1000);
      const elapsedTime = currentTime - startTimestamp;
      const newRating = Math.min(
        initialRating + Math.floor(elapsedTime / 15),
        5,
      );

        setRating(newRating);
      const newTimeLeft = 15 - (elapsedTime % 15);
      setTimeLeft(newRating >= 5 ? null : newTimeLeft);
    };

    setIsStarted(true);
    const ratingInterval = setInterval(updateRatingAndTimeLeft, 1000);


    return () => clearInterval(ratingInterval);
  }, [initialRating]);

  useEffect(() => {
    if (timeLeft !== null) {
      const timeInterval = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft !== null && prevTimeLeft > 0) {
            return prevTimeLeft - 1;
          } else {
            return 0;
          }
        });
      }, 1000);

      return () => clearInterval(timeInterval);
    }
  }, [timeLeft]);

  useEffect(() => {
  if (rating >= 5) {
      localStorage.removeItem("gameLiveStart");
      setIsStarted(false);
      setTimeLeft(0);
     // localStorage.setItem("lives", (5)?.toString());
    }
  }, [rating]);

  return [rating, timeLeft, isStarted];
}

export default useTimer;
