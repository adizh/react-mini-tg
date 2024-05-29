import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() { 
  
  const navigate = useNavigate();
  const tg=window.Telegram.WebApp;

tg.expand();
const btn= tg.BackButton;

btn.show()

btn.onClick(()=>{
navigate(-1);
});

useEffect(()=>{
return ()=>{
  btn.hide() 
}
})

  return <div className='login-section'>
    
    <h1>Login</h1>

    <p className='grey-text'>
    Welcome back! We've added some exciting new features - check them out!
    </p>


    <input type="text" className='basic-input'placeholder="Nickname" />

    <div className='bottom-part'>
      <button className="blue-btn">Login</button>
    </div>
  </div>;
}

export default Login;
