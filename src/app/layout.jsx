import { Varela_Round } from 'next/font/google'
import './globals.css'
import NextAuthProvider from '@/lib/providers/NextAuthProvider'
const varelaRound = Varela_Round({ subsets: ['latin'], weight: '400' })
export const metadata = {
  title: 'WebinarWise',
  description: 'Cursos para profesionales',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${varelaRound.className}`}
    >
      <body className='dark bg-bgPrimary text-primary relative min-h-screen'>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}
