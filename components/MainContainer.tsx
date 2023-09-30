'use client';
import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../context/SpotifyUserContext';
import { ChildrenProps } from '../types';
import LoginView from './LoginView';
import Sidebar from './Sidebar';
import PlayerSide from './PlayerSidePc/PlayerSide';

const MainContainer = ({ children }: ChildrenProps) => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <>
      <Link href="test">Test Link</Link>
      {!isLoggedIn ? (
        <LoginView />
      ) : (
        <div className="bg-dark min-h-screen h-auto overflow-scroll w-full flex justify-end py-2 pr-2">
          <Sidebar />
          <div className="bg-white w-full rounded-l-[40px]">{children}</div>
          <PlayerSide />
        </div>
      )}
    </>
  );
};

export default MainContainer;
