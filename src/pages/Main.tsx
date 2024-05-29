import { useEffect } from "react";
import LogoImg from '../assets/images/mdc-logo.png';
import { useNavigate } from 'react-router-dom';

function Main() {

const navigate = useNavigate();
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
<button className="blue-btn" onClick={()=>navigate(`/react-mini-tg/home`)}>home</button>
<button className="blue-btn" onClick={()=>navigate(`/react-mini-tg/friends`)}>friends</button>
<button className="white-btn" onClick={()=>navigate(`/react-mini-tg/login`)}>Login</button>
</div>
  </div>;

}

export default Main;
