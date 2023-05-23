import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from '../components/Head';
import { MetaProps } from './../types/layout';

const MyApp = ({
  Component,
  pageProps,
}: AppProps & { pageProps: { customMeta?: MetaProps } }): JSX.Element => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Head customMeta={pageProps.customMeta} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
};

export default MyApp;
