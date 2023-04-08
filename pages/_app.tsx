import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Just_Me_Again_Down_Here } from '@next/font/google';
import { UserContextProvider } from '../context/SpotifyUserContext';
import MainContainer from '../components/MainContainer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const customFont = Just_Me_Again_Down_Here({
  subsets: ['latin'],
  weight: ['400'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={customFont.className}>
      {/* <UserContextProvider> */}
      {/* <MainContainer> */}
      {/* <Component {...pageProps} /> */}
      {/* </MainContainer> */}
      {/* </UserContextProvider> */}
    </main>
  );
}
