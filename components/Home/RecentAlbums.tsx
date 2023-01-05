import { useContext, useEffect, useCallback } from "react"
import { UserContext } from "../../context/SpotifyUserContext"
import SectionContainer from "../SectionContainer"
import Image from "next/image"

const RecentAlbums = () => {
  const { getSavedAlbums, savedAlbums } = useContext(UserContext)

  const getSavedAlbumsCallback = useCallback(() => {
    getSavedAlbums()
  }, [])

  useEffect(() => {
    getSavedAlbumsCallback()
  }, [getSavedAlbumsCallback])

  return (
    <SectionContainer>
      <div className="top-artists flex w-full justify-between items-center">
        <h1 className="text-lg uppercase pl-3">Saved Albums</h1>
        <div className="flex flex-row items-baseline space-x-4 pr-4">
          <p className="text-dark">See More</p>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex w-11/12 justify-between items-center">
          {savedAlbums && savedAlbums?.items?.slice(0, 4).map((item) => (
            <div key={item.album.id} className="flex flex-col">
              <Image src={item.album.images[0].url} className="rounded-[10px] max-h-[150px]" alt="album_image" width={150} height={150}></Image>
              <h1 className="leading-none captalize text-base">{item.album.name}</h1>
              <h1 className="leading-none captalize text-sm">{item.album.artists[0]?.name}</h1>
            </div>
          ))}
        </div>

      </div>
    </SectionContainer>
  )
}

export default RecentAlbums