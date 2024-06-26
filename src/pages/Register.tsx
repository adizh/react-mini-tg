import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { retrieveLaunchParams } from "@tma.js/sdk";

function Register() {
  const { initDataRaw, initData } = retrieveLaunchParams();
  const navigate = useNavigate();
  const tg = window.Telegram.WebApp;
console.log('initData',initData)
console.log('initDataRaw',initDataRaw)
  const makeRequest = () => {
    fetch(
      "https://racing.mydatacoin.io/api/v1/User/authorize",
      {
        method: "POST",
        headers: {
          Authorization: `tma ${initData}`,
        },
      },
    )
      .then((response) => response.json())
      .then((data) => console.log('register auth response',data));
  };

  tg.expand();

  const btn = tg.BackButton;

  btn.show();

  btn.onClick(() => {
    navigate(-1);
  });

  useEffect(() => {
    return () => {
      btn.hide();
    };
  });
  return (
    <div className="login-section section">
      <h1>Create account</h1>
      <p className="grey-text">
        We have created a unique MyDataCin address for you, which is similar to
        your telegram nickname
      </p>
      <input type="text" className="basic-input" placeholder="Nickname" />
      <div className="bottom-part">
        <button onClick={makeRequest} className="blue-btn">
          Create
        </button>
      </div>
    </div>
  );
}

export default Register;
