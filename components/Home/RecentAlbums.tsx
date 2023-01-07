import { useContext, useEffect, useCallback } from "react"
import { UserContext } from "../../context/SpotifyUserContext"
import SectionContainerInner from "../SectionContainerInner"
import SectionContainerOuter from "../SectionContainerOuter"
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
    <SectionContainerOuter>
      <SectionContainerInner classname={"recent-albums"} title={"Recent Albums"}>
        {savedAlbums && savedAlbums?.items?.slice(0, 4).map((item) => (
          <div key={item.album.id} className="flex flex-col items-center">
            <Image src={item.album.images[0].url} className="rounded-[10px] max-h-[150px]" alt="album_image" width={150} height={150}></Image>
            <h1 className="leading-none captalize text-base self-start">{item.album.name}</h1>
            <h1 className="leading-none captalize text-sm self-start">{item.album.artists[0]?.name}</h1>
          </div>
        ))}
      </SectionContainerInner>
    </SectionContainerOuter>
  )
}

export default RecentAlbums