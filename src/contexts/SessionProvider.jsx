'use client'
import { useContext, createContext, useState, useEffect } from 'react'
const SessionContext = createContext({
  user: {},
  signIn: () => {},
  signOut: () => {},
  getSession: () => {},
})

function SessionProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const session = sessionStorage.getItem('session')
    if (session) {
      setUser(JSON.parse(session))
    }
  }, [])
  const signIn = (user) => {
    sessionStorage.setItem('session', JSON.stringify(user))
    setUser(user)
  }
  const signOut = () => {
    sessionStorage.removeItem('session')
    setUser(null)
    window.location.reload()
  }

  return (
    <SessionContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </SessionContext.Provider>
  )
}
export default SessionProvider

export const useSession = () => {
  return useContext(SessionContext)
}
