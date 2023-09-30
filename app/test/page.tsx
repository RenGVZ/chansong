// import { useContext } from 'react';
// import { UserContext } from '../../context/SpotifyUserContext';
// import { TopArtists } from '../../types';
// import { getTopArtists } from '../../api/getUser';

// export async function getStuff() {
//   console.log('process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID:', process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID);
//   const data = await fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
//     headers: {
//       Authorization: `Bearer ${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}`,
//     },
//   }).then(res => res.json());
//   console.log('data:', data);
//   return data;
// }

const Test = async () => {
  // const topArtists = await getStuff();
  // console.log('topArtists:', topArtists);

  return <div className="ml-10 text-red-400">Testsdarrrs</div>;
};

export default Test;
