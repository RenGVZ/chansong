import React, { useState, useContext, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UserContext } from '../../context/SpotifyUserContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { SavedTracks } from '../../types'

const HomeView = () => {
  const [activeTab, setActiveTab] = useState<string>("music")
  const { user, getSavedTracks, savedTracks, getTopArtists } = useContext(UserContext)

  const tabs: string[] = ['music', 'podcasts', 'radio', 'discover']

  useEffect(() => {
    getSavedTracks()
    // console.log('savedTracks:', savedTracks);

  }, [getSavedTracks])

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="w-[88%] flex flex-col items-start pt-10 space-y-4">
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
              >{tab}</li>
            ))}
          </ul>
          <div className="music-tab w-full flex flex-col">
            {activeTab === 'music' ? (
              <div className="library h-[200px] w-full flex flex-col shadow-cust rounded-[10px]">
                <div className="flex w-full justify-between py-4 items-center">
                  <h1 className="text-lg uppercase pl-8">Library</h1>
                  <div className="flex flex-row w-4/12 items-baseline space-x-4">
                    <div className="flex w-8/12 items-center shadow-library-search rounded-full p-1.5">
                      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xs text-mid px-2" />
                      <p className="text-dark text-xs">Search</p>
                    </div>
                    <p className="text-dark">See More</p>
                  </div>
                </div>
                <div className="tracks">
                  {/* {savedTracks.map((SavedTracks: {track}) => (
                    <div></div>
                  ))} */}
                </div>
              </div>
            ) : activeTab === 'podcasts' ? (
              <div>Podcasts</div>
            ) : activeTab === 'radio' ? (
              <div>Radio</div>
            ) : activeTab === 'discover' ? (
              <div>Discover</div>
            ) :
              null}
          </div>
        </div>
        {user && (
          <>
            <p>{user.country}</p>
            <p>{user.display_name}</p>
            {user?.images && (
              <Image width={10} height={10} src={"https://i.scdn.co/image/ab6775700000ee855b2a089e5eaf309a133f8cd6"} alt="profile pic" />
            )}
          </>
        )}
        <button
          className="w-1/12 bg-slate-700 text-green-600 rounded-full p-3 font-bold hover:text-slate-700 hover:bg-slate-200"
          onClick={getSavedTracks}
        >
          Get Saved tracks
        </button>
        <Link href="/artist">Go to artist page</Link>

      </div>
    </div>
  )
}

export default HomeView