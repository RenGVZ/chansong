import { useContext } from 'react';
import Image from 'next/image';
import { UserContext } from '../../../context/SpotifyUserContext';
import { EpisodeWrap } from '../../../types';
import SectionContainer from '../../Common/SectionContainerOuter';

const PodcastTab = () => {
  const { episodes } = useContext(UserContext);

  // const getEpisodesCallback = useCallback(() => {
  //   getSeveralEpisodes();
  // }, []);

  // const getTrackPlaytime = (timestamp: number) => {
  //   let minutes = new Date(timestamp).getMinutes();
  //   if (minutes >= 60) {
  //     return new Date(timestamp).toISOString().slice(11, 19);
  //   } else {
  //     return new Date(timestamp).toISOString().slice(14, 19);
  //   }
  // };

  // useEffect(() => {
  //   getSeveralEpisodes();
  // }, []);

  return (
    <SectionContainer>
      <div className="library flex w-full justify-between items-center">
        <h1 className="text-lg uppercase pl-3">Podcast Episodes</h1>
        <div className="flex flex-row md:w-4/12 items-baseline space-x-4">
          <p className="text-dark">See More</p>
        </div>
      </div>
      <div className="tracks flex flex-col space-y-3">
        {episodes &&
          episodes?.items?.slice(0, 5).map((item: EpisodeWrap, i) => (
            <div key={item?.episode.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {item.episode.images && item.episode.images.length > 0 && (
                  <Image
                    className="rounded-[10px] object-cover"
                    src={item.episode.images[0].url}
                    width={42}
                    height={42}
                    alt="sepisode_image"
                  ></Image>
                )}
                <div className="flex flex-col">
                  <p className="text-lg leading-none">{item.episode.show.name}</p>
                  <p className="text-sm leading-none">{item.episode.name}</p>
                </div>
              </div>
              <div className="flex items-center md:w-4/12">
                {/* <div className="w-1/2 flex items-center justify-end space-x-6 pr-4">
                  <p>{getTrackPlaytime(item.track.duration_ms)}</p>
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="text-xs"
                    width={12}
                  />
                </div> */}
              </div>
            </div>
          ))}
      </div>
    </SectionContainer>
  );
};

export default PodcastTab;
