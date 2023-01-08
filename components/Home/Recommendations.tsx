import { useContext, useEffect, useCallback } from "react"
import { UserContext } from "../../context/SpotifyUserContext"
import SectionContainerInner from "../SectionContainerInner"
import SectionContainerOuter from "../SectionContainerOuter"
import Image from "next/image"

const Recommendations = () => {
  const { getArtistRecommendations, artistRecommendations } = useContext(UserContext)

  const getArtistRecommendationsCallback = useCallback(() => {
    getArtistRecommendations()
  }, [])

  useEffect(() => {
    getArtistRecommendationsCallback()
  }, [getArtistRecommendationsCallback])

  console.log('artist recommendations:', artistRecommendations);


  return (
    <SectionContainerOuter>
      <SectionContainerInner classname={"recommendations"} title={"Recommendations"}>
        {artistRecommendations && artistRecommendations?.tracks?.slice(0, 4).map((rec) => (
          <div key={rec.id} className="flex flex-col items-center">
            <Image src={rec.album.images[0].url} className="rounded-[10px] max-h-[150px]" alt="rec_album_image" width={150} height={150}></Image>
            <h1 className="leading-none captalize text-base self-start">{rec?.name}</h1>
            <h1 className="leading-none captalize text-sm self-start">{rec.artists[0].name}</h1>
          </div>
        ))}
      </SectionContainerInner>
    </SectionContainerOuter>

  )
}

export default Recommendations