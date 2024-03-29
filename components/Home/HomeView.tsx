'use client';
import React, { useState, useContext } from 'react';
import { UserContext } from '@context/SpotifyUserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import LibraryTab from '@components/Home/Tabs/LibraryTab';
import PodcastTab from '@components/Home/Tabs/PodcastTab';
import TopArtists from '@components/Home/TopArtists';
import RecentAlbums from '@components/Home/RecentAlbums';
import Recommendations from '@components/Home/Recommendations';
import RadioTab from '@components/Home/Tabs/RadioTab';

const HomeView = () => {
  const [activeTab, setActiveTab] = useState<string>('music');
  const { topArtists } = useContext(UserContext);
  // const { user } = useContext(UserContext)

  const tabs: string[] = ['music', 'podcasts', 'radio', 'discover'];

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="w-[88%] flex flex-col items-start pt-10 space-y-6">
        <div className="w-full flex items-center shadow-cust rounded-full p-4">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-sm text-mid px-2" />
          <p className="text-dark text-sm">Search</p>
        </div>
        <div className="tab-area w-full flex flex-col space-y-4">
          <ul className="flex space-x-24 pl-8">
            {tabs.map((tab, i) => (
              <li
                key={i}
                className={tab == activeTab ? 'underline capitalize cursor-pointer' : 'capitalize cursor-pointer'}
                onClick={(event: React.MouseEvent<HTMLElement>) => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
          <div className="music-tab w-full flex flex-col">
            {activeTab === 'music' ? (
              <LibraryTab />
            ) : activeTab === 'podcasts' ? (
              <PodcastTab />
            ) : activeTab === 'radio' ? (
              <RadioTab />
            ) : activeTab === 'discover' ? (
              <div>Discover</div>
            ) : null}
          </div>
        </div>
        <TopArtists />
        <RecentAlbums />
        {Object.keys(topArtists).length > 0 && <Recommendations />}
        {/* {user && (
          <>
            <p>{user.country}</p>
            <p>{user.display_name}</p>
            {user?.images && (
              <Image width={10} height={10} src={"https://i.scdn.co/image/ab6775700000ee855b2a089e5eaf309a133f8cd6"} alt="profile pic" />
            )}
          </>
        )}
        <Link href="/artist">Go to artist page</Link> */}
      </div>
    </div>
  );
};

export default HomeView;
