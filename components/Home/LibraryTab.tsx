import { useContext, useEffect, useCallback } from 'react';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHeart, faCircleMinus, faPlay } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../context/SpotifyUserContext';
import { SavedTracks } from '../../types';
import SectionContainer from '../SectionContainer';

const LibraryTab = () => {
  const { getSavedTracks, savedTracks } = useContext(UserContext)

  const getSavedTracksCallback = useCallback(() => {
    getSavedTracks()
  }, [])

  const getTrackPlaytime = (timestamp: number) => {
    let minutes = new Date(timestamp).getMinutes()
    if (minutes >= 60) {
      return new Date(timestamp).toISOString().slice(11, 19)
    } else {
      return new Date(timestamp).toISOString().slice(14, 19)
    }
  }

  useEffect(() => {
    getSavedTracksCallback()
  }, [getSavedTracksCallback])

  return (
    <SectionContainer>
      <div className="library flex w-full justify-between items-center">
        <h1 className="text-lg uppercase pl-3">Library</h1>
        <div className="flex flex-row md:w-4/12 items-baseline space-x-4">
          <div className="flex w-8/12 items-center shadow-library-search rounded-full p-1.5">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xs text-mid px-2" />
            <p className="text-dark text-xs">Search</p>
          </div>
          <p className="text-dark">See More</p>
        </div>
      </div>
      <div className="tracks flex flex-col space-y-3">
        {savedTracks && savedTracks?.items?.slice(0, 5).map((item: SavedTracks, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image className="rounded-[10px] object-cover" src={item.track.album?.images[0].url} width={42} height={42} alt="song_image"></Image>
              <div className="flex flex-col">
                <p className="text-lg leading-none">{item.track.album.artists && item.track.album.artists[0].name}</p>
                <p className="text-sm leading-none">{item.track.name}</p>
              </div>
            </div>
            <div className="flex items-center md:w-4/12">
              <div className="w-1/2 flex items-center justify-start space-x-6 pl-4">
                <FontAwesomeIcon icon={faHeart} className="text-xs" width={12} />
                <FontAwesomeIcon icon={faCircleMinus} className="text-xs" width={12} />
              </div>
              <div className="w-1/2 flex items-center justify-end space-x-6 pr-4">
                <p>{getTrackPlaytime(item.track.duration_ms)}</p>
                <FontAwesomeIcon icon={faPlay} className="text-xs" width={12} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}

export default LibraryTab