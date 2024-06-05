// global.d.ts or telegram.d.ts

// interface TelegramWebApp {
//     WebApp: any;
//   }

//   interface Window {
//     Telegram: TelegramWebApp;
//   }

import { Telegram } from "@twa-dev/types";

declare global {
  interface Window {
    Telegram: Telegram;
  }
}


declare module 'racer' {
  export interface Racer {
  }
}

declare module 'gsap'
declare module 'paper'