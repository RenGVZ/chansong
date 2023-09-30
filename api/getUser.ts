import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

export const getTopArtists = () => {
  console.log('spotify', spotify);

  // spotify.getMyTopArtists().then(data => {
  //   return data;
  // });
};
