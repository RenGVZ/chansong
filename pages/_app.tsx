import { useState } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserContextProvider } from '../context/SpotifyUserContext'
import MainContainer from '../components/MainContainer'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </UserContextProvider>
  )
}
