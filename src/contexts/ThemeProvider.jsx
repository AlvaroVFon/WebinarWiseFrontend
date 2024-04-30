'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
})
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [theme])
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    window.localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
