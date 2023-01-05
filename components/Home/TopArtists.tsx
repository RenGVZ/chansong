import { useContext, useEffect, useCallback } from "react"
import { UserContext } from "../../context/SpotifyUserContext"
import SectionContainerOuter from "../SectionContainerOuter"
import { TopArtists } from "../../types"
import Image from "next/image"

const TopArtists = () => {
  const { getTopArtists, topArtists } = useContext(UserContext)

  const getTopArtistsCallback = useCallback(() => {
    getTopArtists()
  }, [])

  useEffect(() => {
    getTopArtistsCallback()
  }, [getTopArtistsCallback])

  // console.log('artists from topArtists componet', topArtists);


  return (
    <SectionContainerOuter>
      <div className="top-artists flex w-full justify-between items-center">
        <h1 className="text-lg uppercase pl-3">Top Artists</h1>
        <div className="flex flex-row items-baseline space-x-4 pr-4">
          <p className="text-dark">See More</p>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex w-11/12 justify-between items-center">
          {topArtists && topArtists?.items?.slice(0, 4).map((artist: TopArtists) => (
            <div key={artist.id} className="flex flex-col">
              <Image src={artist?.images[0].url} className="rounded-[10px] max-h-[150px]" alt="artist_image" width={150} height={150}></Image>
              <h1 className="leading-none captalize text-base">{artist.name}</h1>
              <h1 className="leading-none captalize text-sm">{artist.type}</h1>
            </div>
          ))}
        </div>

      </div>
    </SectionContainerOuter>
  )
}

export default TopArtists