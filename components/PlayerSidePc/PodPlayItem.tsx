import { Playlists } from "../../types"
import Image from 'next/image'

type Props = {
  playlist: Playlists;
}

const PodPlayItem = ({ playlist }: Props) => {
  console.log('playlist:', playlist);
  return (
    <div className="flex">
      {playlist && playlist.images && (
        <img className="w-[77px] h-[77px]" src={playlist.images[0].url} alt="" />
      )}
      <div className="flex flex-col">
        <h1>{playlist.name}</h1>
        <p>{playlist?.description?.slice(0, 14)}</p>
        <p>{playlist?.owner?.display_name}</p>
      </div>
    </div>
  )
}

export default PodPlayItem