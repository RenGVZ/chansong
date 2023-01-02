import React, { createContext, useContext, useState, useEffect } from 'react'
import { getTokenFromUrl, scopes } from '../utilities'
import { SpotifyObj, User, SavedTracksInterface, SpotifyUserContent, ChildrenProps } from '../types'
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi()

export const UserContext = createContext<SpotifyUserContent>({
  // set default values
  user: {},
  isLoggedIn: false,
  getTopArtists: () => { },
  savedTracks: {},
  getSavedTracks: () => { },
})

export const UserContextProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<User>({})
  const [savedTracks, setSavedTracks] = useState<SavedTracksInterface>({})
  const [spotifyToken, setSpotifyToken] = useState<string>("")
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

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
    console.log('setting isloggedIn status');
    (Object.keys(user).length !== 0) ? setIsLoggedIn(true) : setIsLoggedIn(false)
  }, [user])

  const getSavedTracks = () => {
    let tracks: SavedTracksInterface = {}
    spotify.getMySavedTracks().then((data) => {
      if (data && data.items) {
        tracks = data
        console.log('tracks:', tracks);
        setSavedTracks(tracks)
      }
    })
  }

  const getTopArtists = () => {
    spotify.getMyTopArtists().then((data) => {
      console.log('topartists:', data);

    })
  }

  return (
    <UserContext.Provider value={{ user, isLoggedIn, getTopArtists, getSavedTracks, savedTracks }}>
      {children}
    </UserContext.Provider>
  )
}