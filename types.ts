export interface SpotifyObj {
  access_token?: string
}

export type ChildrenProps = {
  children?: React.ReactNode
}

export type SpotifyUserContent = {
  user: User,
  isLoggedIn: boolean,
  getTopArtists: () => void,

  savedTracks: SavedTracksInterface,
  getSavedTracks: () => void,
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
  href?: string,
  items?: SavedTracks[],
  limit?: number,
  next?: string,
  offset?: number,
  previous?: string | number,
  total?: number
}

export type SavedTracks = {
  added_at?: string
  track: {
    name: string,
    album: {
      name: string,
      images: {
        url: string
      }[],
      artists: {
        name: string
      }[]
    }
  }
}