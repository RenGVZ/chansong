export interface SpotifyObj {
  access_token?: string;
}

export type ChildrenProps = {
  children?: React.ReactNode;
};

export type SpotifyUserContent = {
  user: User;
  isLoggedIn: boolean;
  savedTracks: SavedTracksInterface;
  getSavedTracks: () => void;

  topArtists: TopArtistsInterface;
  getTopArtists: () => void;

  savedAlbums: SavedAlbumsInterface;
  getSavedAlbums: () => void;

  artistRecommendations: ArtistRecommendationsInterface;
  getArtistRecommendations: () => void;

  currentTrack: CurrentTrackInterface;
  getCurrentTrack: () => void;

  currentTrackProg: number;
  usersPlaylists: UsersPlaylistsInterface;
  getUsersPlaylists: () => void;

  getSeveralEpisodes: () => void;
  episodes: EpisodesInterface;
};

export type Artist = {
  id: string;
  name: string;
  type: string;
};

export type Album = {
  id: string;
  artists?: {
    name: string;
  }[];
  name: string;
  images: {
    url: string;
  }[];
};

export interface User {
  country?: string;
  display_name?: string;
  email?: string;
  href?: string;
  images?: ImageItem[];
}

export interface ImageItem {
  height?: number | null;
  url?: string;
  width?: number | null;
}

export interface SavedTracksInterface {
  items?: SavedTracks[];
}

export type SavedTracks = {
  added_at?: string;
  track: {
    id: string;
    name: string;
    duration_ms: number;
    album: Album;
  };
};

export interface TopArtistsInterface {
  items?: TopArtists[];
}

export type TopArtists = {
  id: string;
  name: string;
  type: string;
  images: {
    url: string;
  }[];
};

export interface SavedAlbumsInterface {
  items?: SavedAlbums[];
}

export type SavedAlbums = {
  album: Album;
};

export interface ArtistRecommendationsInterface {
  tracks?: Recommendations[];
}

export type Recommendations = {
  id: string;
  name: string;
  album?: Album;
  artists: {
    name: string;
  }[];
};

export interface CurrentTrackInterface {
  id?: string;
  duration_ms?: string;
  name?: string;
  album?: Album;
  artists?: Artist[];
}

export interface UsersPlaylistsInterface {
  items?: Playlists[];
}

export type Playlists = {
  description?: string;
  id?: string;
  name?: string;
  images?: {
    url: string;
  }[];
  owner?: {
    display_name: string;
  };
};

export interface EpisodesInterface {
  items?: EpisodeWrap[];
}

export type EpisodeWrap = {
  episode: Episode;
};
export type Episode = {
  id: string;
  description: string;
  images?: {
    url: string;
  }[];
  name: string;
  show: {
    name: string;
  };
};
