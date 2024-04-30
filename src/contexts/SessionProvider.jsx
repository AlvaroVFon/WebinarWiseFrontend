import { useContext, createContext, useState, useEffect } from 'react'
const SessionContext = createContext({
  user: {},
  signIn: () => {},
  signOut: () => {},
  getSession: () => {},
})

function SessionProvider({ children }) {
  const getUser = () => {
    const user = sessionStorage.getItem('session')
    return user ? JSON.parse(user) : null
  }

  const signIn = (user) => {
    sessionStorage.setItem('session', JSON.stringify(user))
  }
  signOut = () => {
    sessionStorage.removeItem('session')
  }
  getSession = () => {
    return getUser() ? true : false
  }
  return (
    <SessionContext.Provider value={{ signIn, signOut, getUser, getSession }}>
      {children}
    </SessionContext.Provider>
  )
}
export default SessionProvider

export const useSession = () => {
  return useContext(SessionContext)
}
