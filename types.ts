export interface SpotifyObj {
  access_token?: string
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