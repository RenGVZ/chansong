import { useContext, useEffect, useCallback } from 'react';
import { UserContext } from '../../context/SpotifyUserContext';
import SectionContainerInner from '../Common/SectionContainerInner';
import SectionContainerOuter from '../Common/SectionContainerOuter';
import Image from 'next/image';
import { SavedAlbums } from '../../types';
import { truncateWord } from '../../utilities';

const RecentAlbums = () => {
  const { getSavedAlbums, savedAlbums } = useContext(UserContext);

  const getSavedAlbumsCallback = useCallback(() => {
    getSavedAlbums();
  }, []);

  useEffect(() => {
    getSavedAlbumsCallback();
  }, [getSavedAlbumsCallback]);

  return (
    <SectionContainerOuter>
      <SectionContainerInner
        classname={'recent-albums'}
        title={'Recent Albums'}
      >
        {savedAlbums &&
          savedAlbums?.items?.slice(0, 4).map((item: SavedAlbums) => (
            <div key={item.album.id} className="flex flex-col items-center">
              <Image
                src={item.album.images[0].url}
                className="rounded-[10px] max-h-[150px]"
                alt="album_image"
                width={150}
                height={150}
              ></Image>
              <h1 className="leading-none captalize text-base self-start">
                {truncateWord(item.album.name, 26)}
              </h1>
              <h1 className="leading-none captalize text-sm self-start">
                {truncateWord(item.album.artists && item.album.artists[0].name, 26)}
              </h1>
            </div>
          ))}
      </SectionContainerInner>
    </SectionContainerOuter>
  );
};

export default RecentAlbums;
