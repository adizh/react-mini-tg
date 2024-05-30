
import { AppRoot } from '@telegram-apps/telegram-ui';
import { type FC, useEffect, useMemo,useRef ,useState} from 'react';
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
import Boost from './pages/Boost';
import Friends from './pages/Friends';
import Tasks from './pages/Tasks';

export const App: FC = () => {

  useEffect(() => {
    const overflow = 100;
    document.body.style.overflowY = 'hidden';
    document.body.style.marginTop = `${overflow}px`;
    document.body.style.height = `${window.innerHeight + overflow}px`;
 //  document.body.style.paddingBottom = `${overflow}px`;
   window.scrollTo(0, overflow);

    return () => {
     document.body.style.overflowY = '';
      document.body.style.marginTop = '';
      document.body.style.height = '';
    // document.body.style.paddingBottom = '';
  //   window.scrollTo(0,0)
    };
  });
// const tg=window.Telegram.WebApp;

// console.log('tg',tg)

// tg.onEvent('viewportChanged', testhandler) 
// function testhandler(){
//   console.log('viewportChanged?????')
// 	if (tg.isExpanded){
// 	    tg.expand()
//     }
// }
 

 return (
  <AppRoot className='section' style={{ overflow: 'auto', height: '100vh' }}>
     <Routes>
        <Route path="/react-mini-tg" element={<Main />} />
        <Route path="/react-mini-tg/about" element={<About />} />
        <Route path="/react-mini-tg/login" element={<Login />} />
        <Route path="/react-mini-tg/register" element={<Register />} />
        <Route path="/react-mini-tg/home" element={<Home />} />
        <Route path="/react-mini-tg/friends" element={<Friends />} />
        <Route path="/react-mini-tg/boost" element={<Boost />} />
        <Route path="/react-mini-tg/tasks" element={<Tasks />} />
      </Routes>
  </AppRoot>
         
    
  );
}