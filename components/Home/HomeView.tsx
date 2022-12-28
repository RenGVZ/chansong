import { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UserContext } from '../../context/SpotifyUserContext'

const HomeView = () => {
  const { user, getTopArtists } = useContext(UserContext)
  return (
    <div className="flex flex-col justify-center items-center">
      Hello Spotify world
      {user && (
        <>
          <p>{user.country}</p>
          <p>{user.display_name}</p>
          {user?.images && (
            <Image width={10} height={10} src={"https://i.scdn.co/image/ab6775700000ee855b2a089e5eaf309a133f8cd6"} alt="profile pic" />
          )}
        </>
      )}
      <button
        className="w-1/12 bg-slate-700 text-green-600 rounded-full p-3 font-bold hover:text-slate-700 hover:bg-slate-200"
        onClick={getTopArtists}
      >
        Get Top Artists
      </button>
      <Link href="/artist">Go to artist page</Link>
    </div>
  )
}

export default HomeView