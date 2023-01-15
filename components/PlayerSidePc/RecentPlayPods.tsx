import { useState, useContext, useCallback, useEffect } from "react"
import SectionContainerOuter from "../Common/SectionContainerOuter"
import { UserContext } from "../../context/SpotifyUserContext"
import PodPlayItem from "./PodPlayItem"
import { Playlists } from "../../types"

const RecentPlaylistsPods = () => {
  const [playlistSelected, setPlaylistSelected] = useState<boolean>(true)
  const { getUsersPlaylists, usersPlaylists } = useContext(UserContext)
  const items = usersPlaylists?.items ?? []

  const getUsersPlaylistsCallback = useCallback(() => {
    getUsersPlaylists()
  }, [])

  useEffect(() => {
    getUsersPlaylistsCallback()
  }, [getUsersPlaylistsCallback])

  console.log('usersPlaylists:', usersPlaylists);

  return (
    <SectionContainerOuter>
      <div className="recent-play-pods flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex space-x-1">
            <h1 className="text-lg uppercase">Recent</h1> &nbsp;
            <button className={`text-${playlistSelected ? 'black' : 'mid'} text-lg uppercase`} onClick={() => setPlaylistSelected(true)}>Playlists</button>
            /
            <button className={`text-${playlistSelected ? 'mid' : 'black'} text-lg uppercase`} onClick={() => setPlaylistSelected(false)}>Podcasts</button>
          </div>
          <div className="flex flex-col">
            {playlistSelected ? (
              items.slice(0, 4).map((playlist: Playlists) => (
                <PodPlayItem key={playlist.id} playlist={playlist} />
              ))
            ) : (
              <p>podcasts</p>
            )}
          </div>
        </div>
      </div>
    </SectionContainerOuter>
  )
}

export default RecentPlaylistsPods