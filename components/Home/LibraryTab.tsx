import { useContext, useEffect, useCallback } from 'react';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../context/SpotifyUserContext';
import { SavedTracks } from '../../types';

const LibraryTab = () => {
  const { getSavedTracks, savedTracks } = useContext(UserContext)

  const getSavedTracksCallback = useCallback(() => {
    getSavedTracks()
  }, [])

  useEffect(() => {
    getSavedTracksCallback()
  }, [getSavedTracksCallback])

  console.log('savedTracks:', savedTracks);

  return (
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
        {savedTracks && savedTracks.items?.map((item: SavedTracks, i) => (
          <div key={i}>
            <h1>{item.track.name}</h1>
            <Image src={item.track.album?.images[0].url} width={40} height={40} alt=""></Image>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LibraryTab