import { useContext, useEffect, useCallback } from "react"
import { UserContext } from "../../context/SpotifyUserContext"
import SectionContainerInner from "../SectionContainerInner"
import SectionContainerOuter from "../SectionContainerOuter"
// import Image from "next/image"

const Recommendations = () => {
  const { getRecommendations } = useContext(UserContext)

  useEffect(() => {
    getRecommendations()
  }, [])

  return (
    <SectionContainerOuter>
      <SectionContainerInner classname={"recommendations"} title={"Recommendations"}>

      </SectionContainerInner>
    </SectionContainerOuter>

  )
}

export default Recommendations