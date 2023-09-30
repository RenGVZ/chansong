import { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Just_Me_Again_Down_Here } from 'next/font/google';
import { UserContextProvider } from '../context/SpotifyUserContext';
import MainContainer from '../components/MainContainer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

// eslint-disable-next-line new-cap
const customFont = Just_Me_Again_Down_Here({
  subsets: ['latin'],
  weight: ['400'],
});
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Chansong',
  description: 'The better Spotify',
};
/**
 * Renders the root layout of the application.
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The nested layouts or pages.
 * @return {JSX.Element} - The root layout component.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className={customFont.className}>
          <UserContextProvider>
            <MainContainer>{children}</MainContainer>
          </UserContextProvider>
        </main>
      </body>
    </html>
  );
}
