/* eslint-disable @next/next/no-img-element */
import { useContext, useCallback, useEffect } from "react"
import { UserContext } from "../../context/SpotifyUserContext"
import SectionContainerOuter from "../Common/SectionContainerOuter"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const NowPlaying = () => {
  const { getCurrentTrack, currentTrack, currentTrackProg } = useContext(UserContext)

  const getCurrentTrackCallback = useCallback(() => {
    getCurrentTrack()
  }, [])

  useEffect(() => {
    getCurrentTrackCallback()
  }, [getCurrentTrackCallback])

  // console.log('track', currentTrack);

  return (
    <SectionContainerOuter>
      <div className="now-playing flex flex-col w-full justify-center items-center space-y-4">
        <h1 className="text-lg uppercase">Now Playing</h1>
        {currentTrack?.album &&
          <img
            className="rounded-[10px] max-w-[317px] max-h-[317px]"
            src={currentTrack.album.images[0].url} alt="current_track_img"
          />
        }
        <div className="w-full flex flex-col">
          <div className="w-full items-center flex px-4">
            <h1 className="text-lg grow text-center">{currentTrack?.name}</h1>
            <div className="flex-none">
              <FontAwesomeIcon icon={faHeart} className="text-mid text-2xl" />
            </div>
          </div>
          {currentTrack?.artists && <h1 className="w-full text-center text-sm">{currentTrack?.artists[0]?.name}</h1>}
          {currentTrackProg && currentTrackProg} {currentTrack?.duration_ms}
        </div>
      </div>
    </SectionContainerOuter>
  )
}

export default NowPlaying