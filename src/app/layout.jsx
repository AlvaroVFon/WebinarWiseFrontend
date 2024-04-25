import { Varela_Round } from 'next/font/google'
import './globals.css'

const varelaRound = Varela_Round({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'WebinarWise',
  description: 'Cursos para profesionales',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${varelaRound.className} bg-[#0E0E11] text-white`}>
        {children}
      </body>
    </html>
  )
}
