
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