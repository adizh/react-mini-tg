import { useState, useEffect } from 'react';

type TimerHookReturnType = [number, number | null];

function useTimer(initialRating: number): TimerHookReturnType {
    const [rating, setRating] = useState<number>(initialRating);
    const [timeLeft, setTimeLeft] = useState<number | null>(null);

    useEffect(() => {
        const storedStartTime = localStorage.getItem("startTime");
   
        
        if (storedStartTime) {
            const startTime = parseInt(storedStartTime, 10);
            const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
            const storedTimeLeft = parseInt(rating.toString(), 10) < 5 ? 7199 - (elapsedTime % 7200) : null;
            
            setTimeLeft(storedTimeLeft);
            setRating(parseInt(rating.toString(), 10));
        } else {
            localStorage.setItem("startTime", Date.now().toString());
            setTimeLeft(7199);
        }

        const intervalId = setInterval(() => {
            if (rating < 5 && timeLeft !== null) {
                setTimeLeft(prevTimeLeft => (prevTimeLeft ? prevTimeLeft - 1 : 7199));
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [rating, timeLeft]);

    useEffect(() => {
        if (rating < 5 && timeLeft === 0) {
            setRating(prevRating => prevRating + 1);
            setTimeLeft(7199); 
            localStorage.setItem("startTime", Date.now().toString());
            localStorage.setItem('lives',rating?.toString())
        }
        if(rating===5){
            setTimeLeft(0)
            localStorage.setItem('lives',5?.toString())
            localStorage.removeItem('startTime')
        }
    }, [rating, timeLeft]);

    return [rating, timeLeft];
}

export default useTimer;
