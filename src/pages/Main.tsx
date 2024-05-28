import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LogoImg from '../assets/images/mdc-logo.png';
import { initBackButton } from '@tma.js/sdk';
import { useNavigate } from 'react-router-dom';
import { postEvent } from '@tma.js/sdk';
import { SDKProvider } from '@tma.js/sdk-react';
import {
  useBackButton,
  useBackButtonRaw,
  useViewport,
  useViewportRaw,
  useBiometryManagerRaw,
} from '@tma.js/sdk-react';
function Main() {
const navigate = useNavigate();

//postEvent('web_app_setup_back_button', { is_visible: true });

useEffect(() => {
    const overflow = 100;
    document.body.style.overflowY = 'hidden';
    document.body.style.marginTop = `${overflow}px`;
    document.body.style.height = `${window.innerHeight + overflow}px`;
   // document.body.style.paddingBottom = `${overflow}px`;
    window.scrollTo(0, overflow);

    return () => {
      document.body.style.overflowY = '';
      document.body.style.marginTop = '';
      document.body.style.height = '';
     // document.body.style.paddingBottom = '';
    };
  }, []);

 
  return   <div>

<div className="header">
    <img className='logo-img' src={LogoImg} alt="logo" />
    <h1 className='header-h1'>MyDataCoin</h1>
    <p className='basic-text'>
    This is the beginning of a reliable system
    </p>
</div>

<div className='footer'>
<button className="blue-btn" onClick={()=>navigate(`/react-mini-tg/register`)}>Create account</button>
<button className="white-btn" onClick={()=>navigate(`/react-mini-tg/login`)}>Login</button>
</div>
  </div>;

}

export default Main;
