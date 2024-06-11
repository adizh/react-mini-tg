import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import heartFilled from "../assets/images/heart-filled.svg";
import heartVoid from "../assets/images/heart-void.svg";
import { useConvertUnixTime } from "../hooks/unixTimeConvert";
import useTimer from '../hooks/gameLivesTimer'
function GameLives() {

    const livesFromLocal =
    localStorage.getItem("lives") && localStorage.getItem("lives") !== null
      ? Number(localStorage.getItem("lives"))
      : 5;
      console.log("livesFromLocal in GAME COMPONENT",livesFromLocal)

  const [lives, setLives] = useState(livesFromLocal);
const [rating, timeLeft,isStarted] = useTimer(+livesFromLocal);


  const ratingArray = Array.from({ length: rating }, (_, index) => index + 1);
  const voidItems = Array.from({ length: 5 - rating }, (_, index) => index + 1);

  useEffect(() => {
    localStorage.setItem("lives", rating.toString());
    let livesFromLoc = localStorage.getItem("lives");
    if (livesFromLoc && livesFromLoc !== undefined) {
      setLives(+livesFromLoc);
    }

   
  }, []);


  useEffect(()=>{
setLives(rating)
if(rating===5){
  localStorage.removeItem('gameLiveStart')
}
  },[rating]);


  function formatTimeLeft(timeLeft: number | null): string {
    if (timeLeft === null) return "";
    
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    const formattedHours = hours > 0 ? hours + "h" : "";
    const formattedMinutes = minutes > 0 ? minutes + "min" : "";
    const formattedSeconds = seconds > 0 ? seconds + "sec" : "";

    let formattedTime = "";

    if (formattedHours) {
        formattedTime += formattedHours;
    }

    if (formattedMinutes) {
        formattedTime += (formattedHours ? ":" : "") + formattedMinutes;
    }

    if (formattedSeconds) {
        formattedTime += (formattedHours || formattedMinutes ? ":" : "") + formattedSeconds;
    }

    return formattedTime;
}




  return (

    <div className="game-lives">
   <div>

    {ratingArray?.map((item: number) => (
        <img src={heartFilled} key={item + 10} />
      ))}


      {voidItems?.length > 0 &&
        voidItems?.map((item: number) => <img src={heartVoid} key={item} />)}

   </div>
       {rating!==5 && <p className="grey-text">{formatTimeLeft(timeLeft as number)} left</p> }
       {/* <p className="grey-text">{formatTimeLeft(timeLeft as number)} left</p>  */}
  
</div>
  );
}

export default GameLives;
