import React, { createContext, useContext, useState, useEffect } from 'react'
import { getTokenFromUrl, scopes } from '../utilities'
import { SpotifyObj, User, SpotifyUserContent } from '../types'
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi()

export const UserContext = createContext<SpotifyUserContent>({
  // set default values
  user: {},
  setUser: () => { },
  spotifyToken: "",
  setSpotifyToken: () => "",
  getTopArtists: () => { }
})

type Props = {
  children?: React.ReactNode
}

export const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>({})
  const [spotifyToken, setSpotifyToken] = useState<string>("")

  useEffect(() => {
    const _spotifyObject: SpotifyObj = getTokenFromUrl();
    window.location.hash = "";

    if (_spotifyObject.access_token) {
      setSpotifyToken(_spotifyObject.access_token)

      spotify.setAccessToken(_spotifyObject.access_token)

      spotify.getMe().then((user) => {
        const userData: User = user
        setUser(userData)
      })
    }
  }, [])

  useEffect(() => {
    console.log('user info:', user);
  }, [user])

  const getTopArtists = () => {
    spotify.getMyTopArtists().then((data) => {
      console.log(data);

    })
  }

  return (
    <UserContext.Provider value={{ user, setUser, spotifyToken, setSpotifyToken, getTopArtists }}>
      {children}
    </UserContext.Provider>
  )
}