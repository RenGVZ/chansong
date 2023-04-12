import NowPlaying from './NowPlaying';
import RecentPlaylistsPods from './RecentPlaylistsPods';

const PlayerSide = () => {
  return (
    <div className="player hidden lg:w-[45%] lg:flex lg:justify-center lg:bg-white pt-10">
      <div className="flex flex-col w-[90%] space-y-6">
        <NowPlaying />
        <RecentPlaylistsPods />
      </div>
    </div>
  );
};

export default PlayerSide;
