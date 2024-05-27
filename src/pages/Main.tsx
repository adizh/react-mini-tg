import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LogoImg from '../assets/images/mdc-logo.png';

import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();
    const baseURL = import.meta.env.BASE_URL;
const tg=window.Telegram.WebApp as any;

tg.disableClosingConfirmation(true)
tg.SettingsButton.isVisible=true;
tg.ready()
tg.isClosingConfirmationEnabled = true;

console.log('tg',tg)
tg.expand()
useEffect(()=>{

},[])
  return <div>

<div className="header">
    <img className='logo-img' src={LogoImg} alt="" />
    <h1 className='header-h1'>MyDataCoin</h1>
    <p className='basic-text'>
    This is the beginning of a reliable system
    </p>
</div>

<div className='footer'>
<button className="blue-btn">Create account</button>
<button className="white-btn" onClick={()=>navigate(`/react-mini-tg/login`)}>Login</button>
</div>
  </div>;
}

export default Main;
