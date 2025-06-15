import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head';

import localFont from "next/font/local";
import Header from "@/components/header/header";

// 나눔 스퀘어 폰트를 적용 

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
    <Head>
      <title>do it</title>
      <link rel="icon" href="../public/assets/favicon.png" />
    </Head>
    <div className={`${nanumSquare.variable}`}>
       <Header/>
      <Component {...pageProps} />;
    </div>
    
    </>
  )
}
