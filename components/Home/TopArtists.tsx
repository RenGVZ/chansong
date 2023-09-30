import { useContext, useEffect, useCallback, memo } from 'react';
import { UserContext } from '../../context/SpotifyUserContext';
import SectionContainerInner from '../Common/SectionContainerInner';
import SectionContainerOuter from '../Common/SectionContainerOuter';
import { TopArtists } from '../../types';
import Image from 'next/image';

// eslint-disable-next-line react/display-name
const TopArtists = memo(() => {
  const { getTopArtists, topArtists } = useContext(UserContext);

  const getTopArtistsCallback = useCallback(() => {
    getTopArtists();
  }, []);

  useEffect(() => {
    getTopArtistsCallback();
  }, [getTopArtistsCallback]);

  // console.log('TopArtists component is rendering');

  return (
    <SectionContainerOuter>
      <SectionContainerInner classname={'top-artists'} title={'Top Artists'} link="artist">
        {topArtists &&
          topArtists?.items?.slice(0, 4).map((artist: TopArtists) => (
            <div key={artist.id} className="flex flex-col items-center">
              <Image
                src={artist?.images[0].url}
                className="rounded-[10px] max-h-[150px]"
                alt="artist_image"
                width={150}
                height={150}
              ></Image>
              <h1 className="leading-none captalize text-base self-start">{artist.name}</h1>
              <h1 className="leading-none captalize text-sm self-start">{artist.type}</h1>
            </div>
          ))}
      </SectionContainerInner>
    </SectionContainerOuter>
  );
});

export default TopArtists;
