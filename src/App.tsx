
import { AppRoot } from '@telegram-apps/telegram-ui';
import { type FC, useEffect, useMemo } from 'react';
import {
  Navigate,
  Route,
  Router,
  Routes,
} from 'react-router-dom';

import Main from './pages/Main';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

export const App: FC = () => {

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

 return (
  <AppRoot className='section'>
     <Routes>
        <Route path="/react-mini-tg" element={<Main />} />
        <Route path="/react-mini-tg/about" element={<About />} />
        <Route path="/react-mini-tg/login" element={<Login />} />
        <Route path="/react-mini-tg/register" element={<Register />} />
        <Route path="/react-mini-tg/home" element={<Home />} />
        </Routes>
  </AppRoot>
         
    
  );
};