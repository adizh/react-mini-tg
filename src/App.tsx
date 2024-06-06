import { AppRoot } from "@telegram-apps/telegram-ui";
import { type FC, useEffect, useMemo, useRef, useState } from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import { on, off, type MiniAppsEventListener } from '@tma.js/sdk';
import Main from "./pages/Main";
import About from "./pages/About";
import { SDKProvider } from '@tma.js/sdk-react';
import Login from "./pages/Login";

import Register from "./pages/Register";
import Home from "./pages/Home";
import Boost from "./pages/Boost";
import { requestViewport } from '@tma.js/sdk';
import { setDebug } from '@tma.js/sdk';
import Friends from "./pages/Friends";
import Tasks from "./pages/Tasks";
import AppContext from "./components/AppContext";
import http from "./http";
import Game from "./pages/Game";
import { request } from '@tma.js/sdk';
import { postEvent } from '@tma.js/sdk';
import { parseLaunchParams, LaunchParams } from '@tma.js/sdk';
import {
  subscribe,
  unsubscribe,

} from '@tma.js/sdk';
export const App: FC = () => {







  const scrollableRef = useRef<HTMLDivElement | null>(null);
  const telegram = window.Telegram.WebApp;





  function ensureDocumentIsScrollable() {
    const isScrollable =
      document.documentElement.scrollHeight > window.innerHeight;
    if (!isScrollable) {
      document.documentElement.style.setProperty(
        "height",
        "calc(100vh + 1px)",
        "important",
      );
    }
  }

  function preventCollapse() {
    document.body.style.overflowY = "hidden";
    document.body.style.height = `${window.innerHeight + 100}px`;
    document.body.style.marginTop = `${100}px`;
    document.body.style.paddingBottom = `${100}px`;
    window.scrollTo(0, 100);
  }




  useEffect(() => {
    ensureDocumentIsScrollable();

 
    
  }, []);


  


  // useEffect(() => {
  //   scrollableRef.current?.addEventListener("touchstart", preventCollapse);
  //   return () => {
  //     scrollableRef.current?.removeEventListener("touchstart", preventCollapse);
  //     document.body.style.paddingBottom = "";
  //     document.body.style.overflowY = "";
  //     document.body.style.marginTop = "";
  //     document.body.style.height = "";
  //     window.scrollTo(0, 0);
  //   };
  // }, [scrollableRef]);

  return (
    // <SDKProvider acceptCustomStyles debug>
    <AppRoot className="scrollable-element" ref={scrollableRef}>
      <AppContext.Provider value={http}>
        <Routes>
          <Route path="/react-mini-tg" element={<Main />} />
          <Route path="/react-mini-tg/about" element={<About />} />
          <Route path="/react-mini-tg/login" element={<Login />} />
          <Route path="/react-mini-tg/register" element={<Register />} />
          <Route path="/react-mini-tg/home" element={<Home />} />
          <Route path="/react-mini-tg/friends" element={<Friends />} />
          <Route path="/react-mini-tg/boost" element={<Boost />} />
          <Route path="/react-mini-tg/tasks" element={<Tasks />} />
          <Route path="/react-mini-tg/game" element={<Game />} />
        </Routes>
      </AppContext.Provider>
    </AppRoot>
   //  </SDKProvider> 
  );
};
