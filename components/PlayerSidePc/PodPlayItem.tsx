import { Playlists, Episode } from '../../types';
import { memo } from 'react';

type Props = {
  content: Playlists | Episode;
  type: string;
};

// eslint-disable-next-line react/display-name
const PodPlayItem = memo(({ content, type }: Props) => {
  // console.log('content:', content);

  return (
    <div className="flex space-x-2">
      {content && content.images && (
        <img className="w-[77px] h-[77px] rounded-[10px]" src={content.images[0].url} alt="" />
      )}
      <div className="flex flex-col">
        <h1>{content.name}</h1>
        {/* <p className=' break-words'>{content.description && truncateWord(content.description, 56)}</p> */}
        {/* {type === 'playlist' ? <p>{content?.owner?.display_name}</p> : <p>{content?.show?.name}</p>} */}
      </div>
    </div>
  );
});

export default PodPlayItem;
