'use client';
import { useState, useContext, useEffect } from 'react';
import SectionContainerOuter from '../Common/SectionContainerOuter';
import { UserContext } from '../../context/SpotifyUserContext';
import PodPlayItem from './PodPlayItem';
import { EpisodeWrap, Playlists } from '../../types';

const RecentPlaylistsPods = () => {
  const [playlistSelected, setPlaylistSelected] = useState<boolean>(true);
  const { getUsersPlaylists, usersPlaylists, getSeveralEpisodes, episodes } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);
      getUsersPlaylists();
      getSeveralEpisodes();
      setIsLoading(false);
    }
  }, [isLoading]);

  // console.log('episodes:', episodes);

  return (
    <SectionContainerOuter>
      <div className="recent-play-pods flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex space-x-1">
            <h1 className="text-lg uppercase">Recent</h1> &nbsp;
            <button
              className={`text-${playlistSelected ? 'black' : 'mid'} text-lg uppercase`}
              onClick={() => setPlaylistSelected(true)}
            >
              Playlists
            </button>
            /
            <button
              className={`text-${playlistSelected ? 'mid' : 'black'} text-lg uppercase`}
              onClick={() => setPlaylistSelected(false)}
            >
              Podcasts
            </button>
          </div>
          <div className="flex flex-col w-full space-y-4 py-4">
            {playlistSelected
              ? usersPlaylists.items?.slice(0, 4).map((playlist: Playlists) => (
                  <>
                    <PodPlayItem key={playlist.id} content={playlist} type="playlist" />
                  </>
                ))
              : episodes.items?.slice(0, 4).map((episode: EpisodeWrap) => (
                  <>
                    {/* {episode.episode.name} */}
                    <PodPlayItem key={episode.episode.id} content={episode.episode} type="podcast" />
                  </>
                ))}
          </div>
        </div>
      </div>
    </SectionContainerOuter>
  );
};

export default RecentPlaylistsPods;
