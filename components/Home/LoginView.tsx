import { authEndpoint, redirectUri } from '../../pages/api/endpoints'
import { scopes } from '../../utilities'

const LoginView = () => {
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID
  const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialogue=true`
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-500">
      <h1 className="text-xl font-bold text-white">Welcome To Chansong!</h1>
      <h3 className="text-lg text-gray-400">The better Spotify player</h3>

      <p className="text-sm text-white text-center my-5">To get started, simply login with your <br></br>Spotify account, after that you'll be all set!</p>
      <a
        href={loginUrl}
        className="w-auto bg-slate-700 text-green-600 rounded-full py-3 px-6 font-bold hover:text-slate-700 hover:bg-slate-200"
      >
        Login to Spotify
      </a>
    </div>
  )
}

export default LoginView