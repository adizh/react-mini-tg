import { useState, useEffect } from 'react';

type TimerHookReturnType = [number, number | null, boolean];

function useTimer(initialRating: number): TimerHookReturnType {
    const [rating, setRating] = useState<number>(initialRating);
    const [timeLeft, setTimeLeft] = useState<number | null>(3);
    const [isStarted, setIsStarted] = useState<boolean>(false);
     const seconds=10
    useEffect(() => {
      if(rating<5){
        let storedStartTime: number | null = parseInt(localStorage.getItem('gameLiveStart') || '');
        if (!storedStartTime || isNaN(storedStartTime)) {
            storedStartTime = Math.floor(Date.now() / 1000); 
            localStorage.setItem('gameLiveStart', storedStartTime.toString());
        }

        const intervalId = setInterval(() => {
            setIsStarted(true);
            const currentTime = Math.floor(Date.now() / 1000);
            let elapsedTime = currentTime - storedStartTime!; 

            if (elapsedTime >= seconds) { 
                const updatedRating = rating + Math.floor(elapsedTime / seconds);
                const newRating = Math.min(updatedRating, 5); 
                setRating(newRating);
                localStorage.setItem('lives', newRating.toString());
                window.parent.postMessage(newRating,'*')
                console.log('window parent post message setn')
                
            } else { 
                
                setTimeLeft(0);
            }
            const remainingTime = seconds - (elapsedTime % seconds);
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
