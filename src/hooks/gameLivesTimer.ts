import { useState, useEffect } from 'react';

type TimerHookReturnType = [number, number | null, boolean];

function useTimer(initialRating: number): TimerHookReturnType {
    const [rating, setRating] = useState<number>(initialRating);
    const [timeLeft, setTimeLeft] = useState<number | null>(3);
    const [isStarted, setIsStarted] = useState<boolean>(false);

    useEffect(() => {
      if(rating<5){
        let storedStartTime: number | null = parseInt(localStorage.getItem('gameLiveStart') || '');
        if (!storedStartTime || isNaN(storedStartTime)) {
            storedStartTime = Math.floor(Date.now() / 1000); // Set startTime if not available in localStorage
            localStorage.setItem('gameLiveStart', storedStartTime.toString());
        }

        const intervalId = setInterval(() => {
            setIsStarted(true);
            const currentTime = Math.floor(Date.now() / 1000);
            let elapsedTime = currentTime - storedStartTime!; // Calculate elapsed time since start

            if (elapsedTime >= 7200) { // Update rating every 3 seconds until the rating reaches 5 or 16 seconds have passed
                const updatedRating = rating + Math.floor(elapsedTime / 7200); // Increment rating based on elapsed time
                const newRating = Math.min(updatedRating, 5); // Ensure rating does not exceed 5
                setRating(newRating);
                localStorage.setItem('lives', newRating.toString());
            } else {
                
                setTimeLeft(0);
            }
            const remainingTime = 7200 - (elapsedTime % 7200);
            setTimeLeft(remainingTime);
        }, 1000);

        return () => {
            clearInterval(intervalId);
            setIsStarted(false);
        };
      } else if (rating === 5) {

        localStorage.removeItem('gameLiveStart');
        setIsStarted(false);
        setTimeLeft(0);
      }
    }, []); 

    return [rating, timeLeft, isStarted];
}

export default useTimer;
