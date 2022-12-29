export interface SpotifyObj {
  access_token?: string
}

export type ChildrenProps = {
  children?: React.ReactNode
}

export type SpotifyUserContent = {
  user: User,
  setUser: (u: User) => void,
  spotifyToken: string,
  setSpotifyToken: (t: string) => void,
  isLoggedIn: boolean,
  getTopArtists: () => void,

  savedTracks: SavedTracks,
  setSavedTracks: (s: SavedTracks) => void,
  getSavedTracks: () => void,
}

export interface User {
  country?: string,
  display_name?: string,
  email?: string,
  href?: string,
  images?: ImageItem[]
}

export interface SavedTracks {
  track?: {
    name?: string,
    album?: {
      name?: string,
      artists?: {
        name?: string
      }[]
    }
  }
}

export interface ImageItem {
  height?: number | null,
  url?: string,
  width?: number | null
}