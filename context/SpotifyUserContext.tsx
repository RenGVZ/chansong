import React, { createContext, useContext, useState, useEffect } from 'react'
import { getTokenFromUrl } from '../utilities'
import { SpotifyObj, User, SavedTracksInterface, SpotifyUserContent, ChildrenProps, TopArtistsInterface, SavedAlbumsInterface, ArtistRecommendationsInterface, CurrentTrackInterface, UsersPlaylistsInterface } from '../types'
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi()

export const UserContext = createContext<SpotifyUserContent>({
  // set default values
  user: {},
  isLoggedIn: false,
  savedTracks: {},
  getSavedTracks: () => { },
  topArtists: {},
  getTopArtists: () => { },
  savedAlbums: {},
  getSavedAlbums: () => { },
  artistRecommendations: {},
  getArtistRecommendations: () => { },
  currentTrack: {},
  getCurrentTrack: () => { },
  currentTrackProg: 0,
  getUsersPlaylists: () => { },
  usersPlaylists: {}
})

export const UserContextProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<User>({})
  const [savedTracks, setSavedTracks] = useState<SavedTracksInterface>({})
  const [topArtists, setTopArtists] = useState<TopArtistsInterface>({})
  const [savedAlbums, setSavedAlbums] = useState<SavedAlbumsInterface>({})
  const [artistRecommendations, setArtistRecommendations] = useState<ArtistRecommendationsInterface>({})
  const [currentTrack, setCurrentTrack] = useState<CurrentTrackInterface>({})
  const [currentTrackProg, setCurrentTrackProg] = useState<number>(0)
  const [usersPlaylists, setUsersPlaylists] = useState<UsersPlaylistsInterface>({})
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
    // console.log('user info:', user);
    (Object.keys(user).length !== 0) ? setIsLoggedIn(true) : setIsLoggedIn(false)
  }, [user])

  const getSavedTracks = () => {
    let tracks: SavedTracksInterface = {}
    spotify.getMySavedTracks().then((data) => {
      if (data && data.items) {
        tracks = data
        setSavedTracks(tracks)
      }
    })
  }

  const getTopArtists = () => {
    spotify.getMyTopArtists().then((data) => {
      setTopArtists(data)
    })
  }

  const getSavedAlbums = () => {
    spotify.getMySavedAlbums().then((data) => {
      setSavedAlbums(data)
    })
  }

  const getArtistRecommendations = () => {
    // console.log('top artists:', topArtists);
    var seeds = {
      // seed_tracks: savedTracks.items?.splice(0, 5).map((song) => song.track.id),
      seed_artists: topArtists.items?.splice(0, 5).map((artist) => artist.id),
      // seed_genres: [
      //   "classical,country"
      // ],
    };
    spotify.getRecommendations(seeds).then((data) => {
      setArtistRecommendations(data);
    })
  }

  const getCurrentTrack = async () => {
    let data = null
    try {
      const result = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          'Authorization': `Bearer ${spotifyToken}`,
          'Content-Type': 'application/json'
        }
      })
      data = await result.json()
      // console.log('currentTrack data:', data);
      setCurrentTrackProg(data?.progress_ms)
      setCurrentTrack(data?.item)
    } catch (err) {
      console.error(err)
    }
  }

  const getUsersPlaylists = async () => {
    try {
      const results = await fetch('https://api.spotify.com/v1/me/playlists', {
        headers: {
          'Authorization': `Bearer ${spotifyToken}`,
          'Content-Type': "application/json"
        }
      })
      let data = await results.json()
      setUsersPlaylists(data)

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedIn,
        getSavedTracks,
        savedTracks,
        getTopArtists,
        topArtists,
        getSavedAlbums,
        savedAlbums,
        getArtistRecommendations,
        artistRecommendations,
        getCurrentTrack,
        currentTrack,
        currentTrackProg,
        getUsersPlaylists,
        usersPlaylists
      }}>
      {children}
    </UserContext.Provider>
  )
}