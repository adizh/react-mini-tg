 import type { ComponentType } from 'react';

import About from '../pages/About';
import Main from '../pages/Main';

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
     { path: '/', Component: Main },
  { path: '/about', Component: About},
  ]);