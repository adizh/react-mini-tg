import { useEffect } from "react";
import LogoImg from "../assets/images/mdc-logo.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../components/AppContext";

function Main() {
  const navigate = useNavigate();
  const tg = window.Telegram.WebApp;
  useEffect(() => {
    tg.expand();
  }, []);

  const myContext = useContext(AppContext);
  console.log("myContext", myContext);

  return (
    <div className='section'>
      <div className="header">
        <img className="logo-img" width={150} src={LogoImg} alt="logo" />
        <h1 className="header-h1">MyDataCoin</h1>
        <p className="basic-text">This is the beginning of a reliable system</p>
      </div>

      <div className="footer">
        <button
          className="blue-btn"
          onClick={() => navigate(`/react-mini-tg/register`)}
        >
          Create account
        </button>
        <button
          className="blue-btn"
          onClick={() => navigate(`/react-mini-tg/home`)}
        >
          Home
        </button>
        {/* <button className="blue-btn" onClick={()=>navigate(`/react-mini-tg/friends`)}>friends</button>
<button className="blue-btn" onClick={()=>navigate(`/react-mini-tg/tasks`)}>tasks</button> */}
        {/* <button className="white-btn" onClick={()=>navigate(`/react-mini-tg/login`)}>Login</button> */}
      </div>
    </div>
  );
}

export default Main;
