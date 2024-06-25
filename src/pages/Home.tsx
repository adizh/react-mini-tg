import Footer from "../components/Footer";
import "../styles/home.scss";
import MiniBlue from "../assets/images/cars/mini-blue.png";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Mining from "../components/Mining";
import GameLives from "../components/GameLives";
import useTimer from "../hooks/gameLivesTimer";
function Home() {
  const navigate = useNavigate();
  const tg = window.Telegram.WebApp;
  const livesFromLocal =
    localStorage.getItem("lives") && localStorage.getItem("lives") !== null
      ? Number(localStorage.getItem("lives"))
      : 5;

      const mdcPointsFromLocal =
      localStorage.getItem("totalPoints") && localStorage.getItem("totalPoints") !== null
        ? Number(localStorage.getItem("totalPoints"))
        : 0;

      const localMdc =   localStorage.getItem("mdcPoints") && localStorage.getItem("mdcPoints") !== null
      ? Number(localStorage.getItem("mdcPoints"))
      : 0;

  const [lives, setLives] = useState(livesFromLocal);

  const [rating, timeLeft, isStarted] = useTimer(+livesFromLocal);

  const [mdcPoints,setMdcPoints]=useState<number>(0)


  useEffect(() => {
    setLives(rating);
  }, [rating]);


  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(tg.initDataUnsafe.user?.first_name as string);
    tg.expand();
    if (rating === 5) {
      localStorage.removeItem("gameLiveStart");
    }

    const getMdcPointsFromLocalStorage = () => {
      const storedPoints = localStorage.getItem('totalPoints');
      return storedPoints ? Number(storedPoints) : 0;
    };
    const getStoredMdcPoints = () => {
      const storedMdcPoints = localStorage.getItem('mdcPoints');
      return storedMdcPoints ? Number(storedMdcPoints) : 0;
    };
    const initialPoints = getMdcPointsFromLocalStorage();
    const storedMdcPoints = getStoredMdcPoints();
    const updatedMdcPoints = Number((storedMdcPoints + initialPoints).toFixed(2));
    setMdcPoints(updatedMdcPoints);
  
    localStorage.setItem('mdcPoints', updatedMdcPoints?.toString());
    localStorage.setItem('totalPoints', '0');
  }, []);





  const handlePlayClick = () => {
    location.href = "game.html";
  };

  return (
    <div className="scroll-section">
    
      <div className="home-section">
        <div className="home-header">
          <div className="profile">
            <div className="user-logo"></div>
            <div className="user-info">
              {" "}
              <span className="grey-text">{userName}</span>
              <span className="basic-white-text">LVL 1</span>
            </div>
          </div>
          <div
            onClick={() => navigate("/react-mini-tg/tasks", { replace: true })}
            className="home-tasks"
          >
            <div className="tasks">
              <div className="tasks-icon">
                <span className="basic-white-text">Tasks</span>
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.427734 3.49958C0.427734 2.76076 0.721228 2.05221 1.24365 1.52978C1.76607 1.00736 2.47463 0.713867 3.21345 0.713867H14.7849C15.5237 0.713867 16.2323 1.00736 16.7547 1.52978C17.2771 2.05221 17.5706 2.76076 17.5706 3.49958V13.8959C17.4672 13.9644 17.3697 14.0444 17.2783 14.1359L16.2849 15.1293V3.49958C16.2849 3.10176 16.1268 2.72023 15.8455 2.43892C15.5642 2.15762 15.1827 1.99958 14.7849 1.99958H3.21345C2.81562 1.99958 2.43409 2.15762 2.15279 2.43892C1.87148 2.72023 1.71345 3.10176 1.71345 3.49958V18.4996C1.71345 19.3276 2.38545 19.9996 3.21345 19.9996H10.1289L11.4146 21.2853H3.21345C2.47463 21.2853 1.76607 20.9918 1.24365 20.4694C0.721228 19.947 0.427734 19.2384 0.427734 18.4996V3.49958ZM5.99916 6.49958C5.99916 6.78374 5.88628 7.05626 5.68535 7.2572C5.48442 7.45813 5.2119 7.57101 4.92773 7.57101C4.64357 7.57101 4.37105 7.45813 4.17012 7.2572C3.96919 7.05626 3.85631 6.78374 3.85631 6.49958C3.85631 6.21542 3.96919 5.9429 4.17012 5.74197C4.37105 5.54104 4.64357 5.42815 4.92773 5.42815C5.2119 5.42815 5.48442 5.54104 5.68535 5.74197C5.88628 5.9429 5.99916 6.21542 5.99916 6.49958ZM4.92773 12.071C5.2119 12.071 5.48442 11.9581 5.68535 11.7572C5.88628 11.5563 5.99916 11.2837 5.99916 10.9996C5.99916 10.7154 5.88628 10.4429 5.68535 10.242C5.48442 10.041 5.2119 9.92815 4.92773 9.92815C4.64357 9.92815 4.37105 10.041 4.17012 10.242C3.96919 10.4429 3.85631 10.7154 3.85631 10.9996C3.85631 11.2837 3.96919 11.5563 4.17012 11.7572C4.37105 11.9581 4.64357 12.071 4.92773 12.071ZM4.92773 16.571C5.2119 16.571 5.48442 16.4581 5.68535 16.2572C5.88628 16.0563 5.99916 15.7837 5.99916 15.4996C5.99916 15.2154 5.88628 14.9429 5.68535 14.742C5.48442 14.541 5.2119 14.4282 4.92773 14.4282C4.64357 14.4282 4.37105 14.541 4.17012 14.742C3.96919 14.9429 3.85631 15.2154 3.85631 15.4996C3.85631 15.7837 3.96919 16.0563 4.17012 16.2572C4.37105 16.4581 4.64357 16.571 4.92773 16.571ZM7.92773 5.85672C7.75724 5.85672 7.59373 5.92445 7.47317 6.04501C7.35261 6.16557 7.28488 6.32909 7.28488 6.49958C7.28488 6.67008 7.35261 6.83359 7.47317 6.95415C7.59373 7.07471 7.75724 7.14244 7.92773 7.14244H13.4992C13.6697 7.14244 13.8332 7.07471 13.9537 6.95415C14.0743 6.83359 14.142 6.67008 14.142 6.49958C14.142 6.32909 14.0743 6.16557 13.9537 6.04501C13.8332 5.92445 13.6697 5.85672 13.4992 5.85672H7.92773ZM7.28488 10.9996C7.28488 10.8291 7.35261 10.6656 7.47317 10.545C7.59373 10.4245 7.75724 10.3567 7.92773 10.3567H13.4992C13.6697 10.3567 13.8332 10.4245 13.9537 10.545C14.0743 10.6656 14.142 10.8291 14.142 10.9996C14.142 11.1701 14.0743 11.3336 13.9537 11.4542C13.8332 11.5747 13.6697 11.6424 13.4992 11.6424H7.92773C7.75724 11.6424 7.59373 11.5747 7.47317 11.4542C7.35261 11.3336 7.28488 11.1701 7.28488 10.9996ZM7.92773 14.8567C7.75724 14.8567 7.59373 14.9245 7.47317 15.045C7.35261 15.1656 7.28488 15.3291 7.28488 15.4996C7.28488 15.6701 7.35261 15.8336 7.47317 15.9542C7.59373 16.0747 7.75724 16.1424 7.92773 16.1424H13.4992C13.6697 16.1424 13.8332 16.0747 13.9537 15.9542C14.0743 15.8336 14.142 15.6701 14.142 15.4996C14.142 15.3291 14.0743 15.1656 13.9537 15.045C13.8332 14.9245 13.6697 14.8567 13.4992 14.8567H7.92773ZM19.0963 15.9539L13.9535 21.0967C13.8329 21.2171 13.6695 21.2847 13.4992 21.2847C13.3288 21.2847 13.1654 21.2171 13.0449 21.0967L10.4752 18.527C10.3616 18.4051 10.2998 18.244 10.3027 18.0774C10.3057 17.9109 10.3731 17.752 10.4909 17.6342C10.6087 17.5164 10.7676 17.4489 10.9341 17.446C11.1007 17.4431 11.2619 17.5049 11.3837 17.6184L13.4992 19.733L18.1877 15.0444C18.2471 14.9831 18.318 14.9341 18.3965 14.9005C18.4749 14.8668 18.5593 14.8491 18.6446 14.8484C18.73 14.8477 18.8146 14.864 18.8936 14.8964C18.9726 14.9288 19.0444 14.9765 19.1047 15.0369C19.165 15.0973 19.2127 15.1691 19.245 15.2481C19.2773 15.3271 19.2935 15.4118 19.2928 15.4971C19.292 15.5825 19.2742 15.6669 19.2405 15.7453C19.2067 15.8237 19.1577 15.8946 19.0963 15.9539Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="tasks-info">
              <span className="grey-text">You have 10 available tasks</span>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="main-logo-content">
            <span>Balance</span>
            <p>{mdcPoints} MDC</p>
          </div>

          <Mining />

          <div className="home-game">
            <div>
              <h1>Racing Game</h1>
              <p className="grey-text">Play to earn more MDC!</p>
              <GameLives />

              <button
                className="white-btn"
                onClick={() => handlePlayClick()}
                disabled={lives ===5 ? false : true}
              >
                Play
              </button>
            </div>
            <div>
              <img width={55} src={MiniBlue} alt="car" className="home-car" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
