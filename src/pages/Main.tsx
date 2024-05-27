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
useEffect(() => {
    const overflow = 100;
    document.body.style.overflowY = 'hidden';
    document.body.style.marginTop = `${overflow}px`;
    document.body.style.height = `${window.innerHeight + overflow}px`;
    document.body.style.paddingBottom = `${overflow}px`;
    window.scrollTo(0, overflow);

    return () => {
      // Cleanup styles when the component is unmounted
      document.body.style.overflowY = '';
      document.body.style.marginTop = '';
      document.body.style.height = '';
      document.body.style.paddingBottom = '';
    };
  }, []);
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
