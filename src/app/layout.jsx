import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WebinarWise',
  description: 'Cursos para profesionales',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-[#0E0E11] text-white`}>
        {children}
      </body>
    </html>
  )
}
