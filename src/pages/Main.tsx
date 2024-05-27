import React from "react";
import { Link } from "react-router-dom";
import LogoImg from '../assets/images/mdc-logo.png'
function Main() {
    
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
<button className="white-btn">Login</button>
</div>


  </div>;
}

export default Main;
