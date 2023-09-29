// import { useContext } from 'react';
// import { UserContext } from '../../context/SpotifyUserContext';
// import { TopArtists } from '../../types';

async function getServersideProps() {
  const res = await fetch('https://catfact.ninja/fact');
  return res.json();
}

const Test = async () => {
  const facts = await getServersideProps();
  console.log('facts:', facts);

  return <div className="ml-10 text-red-400">Testsdarrrs</div>;
};

export default Test;
