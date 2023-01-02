import { useContext, useEffect, useCallback } from "react"
import { UserContext } from "../../context/SpotifyUserContext"
import SectionContainer from "../SectionContainer"

const TopArtists = () => {
  const { getTopArtists } = useContext(UserContext)

  const getTopArtistsCallback = useCallback(() => {
    getTopArtists
  }, [])

  useEffect(() => {
    getTopArtistsCallback()
  }, [getTopArtistsCallback])

  return (
    <SectionContainer>
      <div className="top-artists flex w-full justify-between items-center">
        <h1 className="text-lg uppercase pl-3">Top Artists</h1>
        <div className="flex flex-row items-baseline space-x-4 pr-4">
          <p className="text-dark">See More</p>
        </div>
      </div>
    </SectionContainer>
  )
}

export default TopArtists