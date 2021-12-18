import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '@/styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
