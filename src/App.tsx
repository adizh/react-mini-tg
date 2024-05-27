import { useIntegration } from '@tma.js/react-router-integration';
import {
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
  initNavigator, useLaunchParams,
  useMiniApp,
  useThemeParams,
  useViewport,
} from '@tma.js/sdk-react';
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

export const App: FC = () => {

  // useEffect(() => {
  //   return bindMiniAppCSSVars(miniApp, themeParams);
  // }, [miniApp, themeParams]);

  // useEffect(() => {
  //   return bindThemeParamsCSSVars(themeParams);
  // }, [themeParams]);

  // useEffect(() => {
  //   return viewport && bindViewportCSSVars(viewport);
  // }, [viewport]);

  // // Create new application navigator and attach it to the browser history, so it could modify
  // // it and listen to its changes.
  // const navigator = useMemo(() => initNavigator('app-navigation-state'), []);
  // const [location, reactNavigator] = useIntegration(navigator);

  // // Don't forget to attach the navigator to allow it to control the BackButton state as well
  // // as browser history.
  // useEffect(() => {
  //   navigator.attach();
  //   return () => navigator.detach();
  // }, [navigator]);

  return (
  <AppRoot className='section'>
     <Routes>
        <Route path="/react-mini-tg" element={<Main />} />
        <Route path="/react-mini-tg/about" element={<About />} />
        </Routes>
  </AppRoot>
         
    
  );
};