import { useContext, useCallback, useEffect } from "react"
import { UserContext } from "../../context/SpotifyUserContext"
import SectionContainerOuter from "../Common/SectionContainerOuter"

const NowPlaying = () => {
  const { getCurrentTrack, currentTrack } = useContext(UserContext)

  const getCurrentTrackCallback = useCallback(() => {
    getCurrentTrack()
  }, [])

  useEffect(() => {
    getCurrentTrackCallback()
  }, [getCurrentTrackCallback])

  // getCurrentTrack()
  console.log('track', currentTrack);

  return (
    <SectionContainerOuter>
      <div className="now-playing flex flex-col w-full justify-center items-center">
        <h1 className="text-lg uppercase pl-3">Now Playing</h1>
        {currentTrack && currentTrack.item?.map((track) => (
          <div key={track.id} className="flex">
            {track.name}
          </div>
        ))}
      </div>
    </SectionContainerOuter>
  )
}

export default NowPlaying