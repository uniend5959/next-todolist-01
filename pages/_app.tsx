import "@/styles/globals.css";
import type { AppProps } from "next/app";

import localFont from "next/font/local";

export const nanumSquare = localFont({
  src: [
    {
      path: "../public/fonts/NanumSquareR.ttf",
      weight: "400", 
    },
    {
      path: "../public/fonts/NanumSquareB.ttf",
      weight: "700", 
    },
  ],
  variable: "--font-nanum-square", 
});



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <div className={`${nanumSquare.variable}`}>
      <Component {...pageProps} />;
    </div>
    
    </>
  )
}
