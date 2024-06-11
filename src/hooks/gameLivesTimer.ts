import { useState, useEffect } from 'react';

type TimerHookReturnType = [number, number | null, boolean];

function useTimer(initialRating: number): TimerHookReturnType {
    const [rating, setRating] = useState<number>(initialRating);
    const [timeLeft, setTimeLeft] = useState<number | null>(3);
    const [isStarted, setIsStarted] = useState<boolean>(true);

    useEffect(() => {
        let storedStartTime: number | null = parseInt(localStorage.getItem('gameLiveStart') || '');
        if (!storedStartTime || isNaN(storedStartTime)) {
            storedStartTime = Math.floor(Date.now() / 1000); // Set startTime if not available in localStorage
            localStorage.setItem('gameLiveStart', storedStartTime.toString());
        }

        const intervalId = setInterval(() => {
            const currentTime = Math.floor(Date.now() / 1000);
            const elapsedTime = currentTime - storedStartTime!; // Calculate elapsed time since start
            const remainingTime = 3 - (elapsedTime % 3); // Calculate remaining time in current cycle

            setTimeLeft(remainingTime);

            if (elapsedTime >= 3 && elapsedTime % 3 === 0 && rating < 5)  { // Update rating every 3 seconds
                const updatedRating = rating + 1; // Increment rating by 1 (up to a maximum of 5)
                setRating(updatedRating);
                localStorage.setItem('lives', updatedRating.toString());
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, []); // We only want this effect to run once

    return [rating, timeLeft, isStarted];
}

export default useTimer;
