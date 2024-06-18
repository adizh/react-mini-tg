// import { useState, useEffect } from 'react';

// type TimerHookReturnType = [number, number | null, boolean];

// function useTimer(initialRating: number): TimerHookReturnType {
//     const [rating, setRating] = useState<number>(initialRating);
//     const [timeLeft, setTimeLeft] = useState<number | null>(15);
//     const [isStarted, setIsStarted] = useState<boolean>(false);
//     const [devRating,setDevRating]=useState(rating)
//      const seconds=15;



//     useEffect(() => {

//       if(rating<5){
//         let storedStartTime: number | null = parseInt(localStorage.getItem('gameLiveStart') || '');
//         const intervalId = setInterval(() => {
//             setIsStarted(true);
//             const currentTime = Math.floor(Date.now() / 1000);
//             let elapsedTime = currentTime - storedStartTime!; 

//             if (elapsedTime >= seconds) { 
//                 const updatedRating = devRating + Math.floor(elapsedTime / seconds);
//                 const newRating = Math.min(updatedRating, 5); 
//                 console.log("WHAT IS UPDATED RATING IN A HOOK",updatedRating)
//                 setRating(newRating);
//               if(newRating>=5){
//                 setIsStarted(false)
//                 setTimeLeft(0)
//               }
             
//             } else { 
//                 setTimeLeft(0);
//             }
//             const remainingTime = seconds - (elapsedTime % seconds);
//             setTimeLeft(remainingTime);
//         }, 1000);

//         return () => {
//             clearInterval(intervalId);
//             setIsStarted(false);
//         };
//       } else if (rating === 5) {
//         localStorage.removeItem('gameLiveStart');
//         setIsStarted(false);
//         setTimeLeft(0);
//       }

//     }, [rating,timeLeft]); 

//     return [rating, timeLeft, isStarted];
// }

// export default useTimer;



import { useState, useEffect } from 'react';

type TimerHookReturnType = [number, number | null, boolean];

function useTimer(initialRating: number): TimerHookReturnType {
    const [rating, setRating] = useState<number>(initialRating);
    const [timeLeft, setTimeLeft] = useState<number | null>(15);
    const [isStarted, setIsStarted] = useState<boolean>(false);

    useEffect(() => {
        let startTimestamp: number;
        const storedStartTime = localStorage.getItem('gameLiveStart');
        if (!storedStartTime || isNaN(parseInt(storedStartTime))) {
            startTimestamp = Math.floor(Date.now() / 1000);
           // localStorage.setItem('gameLiveStart', startTimestamp.toString());
        } else {
            startTimestamp = parseInt(storedStartTime);
        }

        const updateRatingAndTimeLeft = () => {
            const currentTime = Math.floor(Date.now() / 1000);
            const elapsedTime = currentTime - startTimestamp;
            const newRating = Math.min(initialRating + Math.floor(elapsedTime / 15), 5);
            if (newRating !== rating) {
              setRating(newRating);
              console.log('newRating',newRating)
            localStorage.setItem('lives', rating?.toString());
          }


            const newTimeLeft = 15 - (elapsedTime % 15);
            setTimeLeft(newRating >= 5 ? null : newTimeLeft);

            //localStorage.setItem('lives',newRating?.toString())
        };

        setIsStarted(true);
        const ratingInterval = setInterval(updateRatingAndTimeLeft, 1000);
      //  updateRatingAndTimeLeft();

        return () => clearInterval(ratingInterval);
    }, [initialRating]);

    useEffect(() => {
        if (timeLeft !== null) {
            const timeInterval = setInterval(() => {
                setTimeLeft((prevTimeLeft) => {
                    if (prevTimeLeft !== null && prevTimeLeft > 0) {
                        return prevTimeLeft - 1;
                    } else {
                        return 15;
                    }
                });
            }, 1000);

            return () => clearInterval(timeInterval);
        }
    }, [timeLeft]);

    useEffect(() => {
        if (rating >= 5) {
            localStorage.removeItem('gameLiveStart');
            setIsStarted(false);
            setTimeLeft(null);
            localStorage.setItem('lives', 5?.toString());
        }
    }, [rating]);

    return [rating, timeLeft, isStarted];
}

export default useTimer;
