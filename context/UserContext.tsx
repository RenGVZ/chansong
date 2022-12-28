import { createContext, useContext } from 'react'
import { User } from '../types'

export type UserContent = {
  user: User,
  setUser:(u: Object) => void
}

export const UserContext = createContext<UserContent>({
  // set default value
  user: {},
  setUser: () => {}
})

export const useUserContext = () => useContext(UserContext);