import React, { useEffect } from "react";
import '../styles/game.scss';
import { Racer } from '../assets/js/racer';

function Game() {
  useEffect(()=>{
   Racer.Game.init();
  },[])
  return <div>
    
    {/* <svg version="1.1" id="track" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
     y="0px"
     viewBox="0 0 900 420" enable-background="new 0 0 900 420" xml:space="preserve">
    <path id="circuit" fill="none" stroke="#000000" stroke-width="7" d="
        M458.3,410.4c51.4,0.3,206.2,3.1,310.1-1.4c103.8-4.5,109.6-82.6,109.4-119.6c-0.2-37-24.8-117.4-105.2-114.7
        c-81.5,2.7-202-1.9-242.4-1.1c-40.5,0.8-138,1.5-188.5,2.5c-49,1-78.3,49.1-77.3,116.8c1.1,66.6,38.6,101.6,81.2,101.8
        c45.6,0.2,298.6,0.6,337.8-0.2c40.3-0.9,62.1-21.1,61.2-47c-1-25.8-13.1-51.3-60.7-50.4c-18.3,0.4-82.9,2.1-117,1.2
        c-35.2-0.9-141.3,7.3-179.6-10.6c-38.5-18.1-64.7-57.3-73.3-66.6c-9.2-9.9-68.8-78.8-99.7-112C184.1,77,148.1,10.5,137.8,8.6
        c-11.3-2-71.3,10.3-91,16.3C28.1,30.7,20,36,22.8,60.8c3.1,27.3,37.4,45.9,48.9,82.6c12,38.1,18.6,170.3,47.6,215
        c29.4,45.4,74.1,49.1,107.7,50S406.9,410.1,458.3,410.4z"/>
    </svg> */}

<div className="ui">
    <a className="start" href="#">Start Racing</a>
    <div className="ui-item lifes">
        <ul>
            <li><i className="fa fa-heart"></i></li>
            <li><i className="fa fa-heart"></i></li>
            <li><i className="fa fa-heart"></i></li>
            <li><i className="fa fa-heart"></i></li>
            <li><i className="fa fa-heart"></i></li>
        </ul>
    </div>

    <div className="ui-item score">
        SCORE: <span className="points">0</span>
    </div>

    <div className="ui-item best-score">
        BEST: <span className="best-points">0</span>
    </div>
</div>

<div id="track_container">
    <div id="track_car">
        <div className="image"></div>
    </div>
    <canvas id="track_canvas" width="900" height="420"></canvas>
</div>
  </div>;

}

export default Game;
