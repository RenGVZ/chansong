export interface SpotifyObj {
  access_token?: string
}

export type ChildrenProps = {
  children?: React.ReactNode
}

export type SpotifyUserContent = {
  user: User,
  isLoggedIn: boolean,
  savedTracks: SavedTracksInterface,
  getSavedTracks: () => void,

  topArtists: TopArtistsInterface,
  getTopArtists: () => void,
}

export interface User {
  country?: string,
  display_name?: string,
  email?: string,
  href?: string,
  images?: ImageItem[]
}

export interface ImageItem {
  height?: number | null,
  url?: string,
  width?: number | null
}

export interface SavedTracksInterface {
  items?: SavedTracks[],
}

export type SavedTracks = {
  added_at?: string
  track: {
    name: string,
    duration_ms: number,
    album: {
      name: string,
      images: {
        url: string
      }[],
      artists?: {
        name: string
      }[]
    }
  }
}

export interface TopArtistsInterface {
  items?: TopArtists[]
}

export type TopArtists = {
  name: string,
  type: string,
  images: {
    url: string
  }[],
  id: string
}