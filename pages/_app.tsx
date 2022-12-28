import { useState } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserContextProvider } from '../context/SpotifyUserContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  )
}
