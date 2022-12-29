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
  getTopArtists: () => void,
  isLoggedIn: boolean
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