import { useState } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserContextProvider } from '../context/SpotifyUserContext'
import Sidebar from '../components/Sidebar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </UserContextProvider>
  )
}
