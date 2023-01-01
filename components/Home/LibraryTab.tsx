import { useContext, useEffect, useCallback } from 'react';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHeart, faCircleMinus, faPlay } from '@fortawesome/free-solid-svg-icons'
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
    <div className="library w-full flex flex-col shadow-cust rounded-[10px]">
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
        {savedTracks && savedTracks?.items?.slice(0, 5).map((item: SavedTracks, i) => (
          <div key={i} className="flex items-center">
            <Image src={item.track.album?.images[0].url} width={40} height={40} alt=""></Image>
            <div className="flex flex-col">
              <p className="text-lg">{item.track.album.artists && item.track.album.artists[0].name}</p>
              <p className="text-sm">{item.track.name}</p>
            </div>
            <FontAwesomeIcon icon={faHeart} className="text-xs" />
            <FontAwesomeIcon icon={faCircleMinus} className="text-xs" />
            <p>{new Date(item?.track?.duration_ms).toISOString().slice(14, 19)}</p>
            <FontAwesomeIcon icon={faPlay} className="text-xs" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LibraryTab