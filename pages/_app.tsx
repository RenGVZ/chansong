import { useState } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserContext } from '../context/UserContext'
import { User } from '../types'

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User>({country: "usa"})
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}
