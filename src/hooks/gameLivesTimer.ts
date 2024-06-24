import { useState, useEffect } from 'react';

type TimerHookReturnType = [number, number | null, boolean];

function useTimer(initialRating: number): TimerHookReturnType {
    const [rating, setRating] = useState<number>(initialRating);
    const [timeLeft, setTimeLeft] = useState<number | null>(null);
    const [isStarted, setIsStarted] = useState<boolean>(false);
    const [devRating,setDevRating]=useState(rating)
     const seconds=15;
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
                const updatedRating = devRating + Math.floor(elapsedTime / seconds);
                const newRating = Math.min(updatedRating, 5); 
                setRating(newRating);
                localStorage.setItem('lives',newRating?.toString())
               const  newTime = Math.floor(Date.now() / 1000); 
                localStorage.setItem('gameLiveStart', newTime.toString());
                if(updatedRating>=5){
                  localStorage.removeItem('gameLiveStart')
                }
                if(newRating<=5){
                  //   localStorage.setItem('lives', newRating.toString());
                }                
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
      } 
      
      else if (rating === 5) {
        localStorage.removeItem('gameLiveStart');
        setIsStarted(false);
        setTimeLeft(0);
      }
    }, []); 

    return [rating, timeLeft, isStarted];
}

export default useTimer;