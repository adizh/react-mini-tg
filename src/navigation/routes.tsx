 import type { ComponentType } from 'react';

import Friends from '../pages/Friends';
import Main from '../pages/Main';
import Login from '../pages/Login';

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
 // icon?: JSX.Element;
}

// export const routes: Route[] = [
//   { path: '/', Component: Main },
//   { path: '/about', Component: About, title: 'About us' },

// ];
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


  export const  router  = createBrowserRouter([
    { path: '/react-mini-tg', Component: Main },
    { path: '/react-mini-tg/friends', Component: Friends},
    { path: '/react-mini-tg/about', Component: Login},
    { path: '/react-mini-tg/login', Component: Login},
  ]);