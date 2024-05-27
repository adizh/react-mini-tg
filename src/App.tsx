
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

export const App: FC = () => {

 return (
  <AppRoot className='section'>
     <Routes>
        <Route path="/react-mini-tg" element={<Main />} />
        <Route path="/react-mini-tg/about" element={<About />} />
        <Route path="/react-mini-tg/login" element={<Login />} />
        </Routes>
  </AppRoot>
         
    
  );
};