/* eslint-disable @next/next/no-img-element */
import { Playlists } from '../../types';
import { memo } from 'react';
import { truncateWord } from '../../utilities';

type Props = {
  playlist: Playlists;
};

// eslint-disable-next-line react/display-name
const PodPlayItem = memo(({ playlist }: Props) => {
  console.log('playlist rendering:');
  return (
    <div className="flex space-x-2">
      {playlist && playlist.images && (
        <img
          className="w-[77px] h-[77px] rounded-[10px]"
          src={playlist.images[0].url}
          alt=""
        />
      )}
      <div className="flex flex-col">
        <h1>{playlist.name}</h1>
        {/* <p className=' break-words'>{playlist.description && truncateWord(playlist.description, 56)}</p> */}
        <p>{playlist?.owner?.display_name}</p>
      </div>
    </div>
  );
});

export default PodPlayItem;
