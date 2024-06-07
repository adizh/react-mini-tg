import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import heartFilled from '../assets/images/heart-filled.svg'
import heartVoid from '../assets/images/heart-void.svg'
function GameLives() {
    const [rating, setRating] = useState(3);
    const ratingArray = Array.from({ length: rating }, (_, index) => index + 1);

    const voidItems = Array.from({ length: 5-rating }, (_, index) => index + 1);
    // const StarDrawing = (
    //     <path d="M6.9987 12.2343L6.03203 11.3543C2.5987 8.24098 0.332031 6.18098 0.332031 3.66764C0.332031 1.60764 1.94536 0.000976562 3.9987 0.000976562C5.1587 0.000976562 6.27203 0.540977 6.9987 1.38764C7.72536 0.540977 8.8387 0.000976562 9.9987 0.000976562C12.052 0.000976562 13.6654 1.60764 13.6654 3.66764C13.6654 6.18098 11.3987 8.24098 7.96536 11.3543L6.9987 12.2343Z" />
    //   );
    
    //   const customStyles = {
    //     itemShapes: StarDrawing,
    //     activeFillColor: "#EB3F3F",
    //     inactiveFillColor: "#7E848D",
    //   };
    
  return  (
    <div className='game-lives'>
{ratingArray?.map((item:number)=>(
    <img src={heartFilled} />
))}
{voidItems?.length>0 && voidItems?.map((item:number)=>(
    <img src={heartVoid} />
))}
    </div>
  )
}

export default GameLives;
