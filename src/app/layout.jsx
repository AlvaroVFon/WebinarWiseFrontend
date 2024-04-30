import { Varela_Round } from 'next/font/google'
import './globals.css'
import TanstackProvider from '@/lib/providers/TanstackProvider'
import SessionProvider from '@/contexts/SessionProvider'
const varelaRound = Varela_Round({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'WebinarWise',
  description: 'Cursos para profesionales',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${varelaRound.className}`}>
      <body className='dark bg-bgPrimary text-primary'>
        <SessionProvider>
          <TanstackProvider>{children}</TanstackProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
