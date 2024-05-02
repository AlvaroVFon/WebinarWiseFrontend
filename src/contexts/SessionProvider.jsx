'use client'
import { useContext, createContext, useState, useEffect } from 'react'
const SessionContext = createContext({
  user: {},
  signOut: () => {},
})

function SessionProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const session = sessionStorage.getItem('session')
    if (session) {
      setUser(JSON.parse(session))
    }
  }, [])

  const signOut = () => {
    sessionStorage.removeItem('session')
    setUser(null)
    window.location.reload()
  }

  return (
    <SessionContext.Provider value={{ user, signOut }}>
      {children}
    </SessionContext.Provider>
  )
}
export default SessionProvider

export const useSession = () => {
  return useContext(SessionContext)
}
