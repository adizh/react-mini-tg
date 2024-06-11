import { useState, useEffect } from 'react';

type TimerHookReturnType = [number, number | null,boolean];

function useTimer(initialRating: number): TimerHookReturnType {
    console.log('initialRating',initialRating)
    const timeForFill=10
    const [rating, setRating] = useState<number>(initialRating);
    const [timeLeft, setTimeLeft] = useState<number | null>(null);
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        const storedStartTime = localStorage.getItem("startTime");
   
        
        if (storedStartTime) {
            const startTime = parseInt(storedStartTime, 10);
            const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
            const storedTimeLeft = parseInt(rating.toString(), 10) < 5 ? timeForFill-1 - (elapsedTime % timeForFill) : null;
            
            setTimeLeft(storedTimeLeft);
            setRating(parseInt(rating.toString(), 10));
        } else {
            localStorage.setItem("startTime", Date.now().toString());
            setTimeLeft(timeForFill-1);
        }

        const intervalId = setInterval(() => {
            setIsStarted(true)
            if (rating < 5 && timeLeft !== null) {
                setTimeLeft(prevTimeLeft => (prevTimeLeft ? prevTimeLeft - 1 : timeForFill-1));
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [rating, timeLeft]);

    useEffect(() => {
        if (rating < 5 && timeLeft === 0) {
            setRating(prevRating => prevRating + 1);
            setTimeLeft(timeForFill-1); 
            localStorage.setItem("startTime", Date.now().toString());
            localStorage.setItem('lives',rating?.toString())
        }
        if(rating===5){
            setTimeLeft(0)
            localStorage.setItem('lives',5?.toString())
            localStorage.removeItem('startTime')
            setIsStarted(false)

            console.log("setIsStarted",isStarted)

         
        }
    }, [rating, timeLeft]);

    return [rating, timeLeft,isStarted];
}

export default useTimer;
