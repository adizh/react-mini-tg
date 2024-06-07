import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import heartFilled from '../assets/images/heart-filled.svg'
import heartVoid from '../assets/images/heart-void.svg'
function GameLives() {

const livesFromLocal = localStorage.getItem('lives') &&  localStorage.getItem('lives')!==null ? Number(localStorage.getItem('lives')) :5

    const [rating, setRating] = useState(livesFromLocal);
    const ratingArray = Array.from({ length: rating }, (_, index) => index + 1);
    const voidItems = Array.from({ length: 5-rating }, (_, index) => index + 1); 

    useEffect(()=>{
localStorage.setItem('lives',rating.toString())
    },[])
  return  (
    <div className='game-lives'>
{ratingArray?.map((item:number)=>(
    <img src={heartFilled}  key={item+10}/>
))}
{voidItems?.length>0 && voidItems?.map((item:number)=>(
    <img src={heartVoid}  key={item}/>
))}
    </div>
  )
}

export default GameLives;
