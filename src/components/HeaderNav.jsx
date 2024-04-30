'use client'
// import UserAvatar from './UserProfile'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeProvider'

function HeaderNav() {
  const { theme, toggleTheme } = useTheme()
  console.log(theme)
  return (
    <nav className='flex gap-3 items-center justify-end text-[#a8b3cf]'>
      {theme === 'dark' ? (
        <a href='#' onClick={toggleTheme}>
          <Image src='/light.svg' width={25} height={25} alt='light' />
        </a>
      ) : (
        <a href='#' onClick={toggleTheme}>
          <Image src='/dark.svg' width={25} height={25} alt='dark' />
        </a>
      )}
      <Link href='/home/courses?page=1' className='p-3'>
        <Image
          src='/courses.svg'
          alt='courses'
          width={25}
          height={25}
          className='hover:scale-110 transition-transform duration-300 ease-in-out'
        />
      </Link>
      <Link href='/home/categories' className='p-3'>
        <Image
          src='/category.svg'
          alt='category'
          width={25}
          height={25}
          className='hover:scale-110 transition-transform duration-300 ease-in-out'
        />
      </Link>
      <Link href='/login' className='p-3'>
        <Image
          src='/login.svg'
          alt='login'
          width={25}
          height={25}
          className='hover:scale-110 transition-transform duration-300 ease-in-out'
        />
      </Link>

      {/* <Link href=''>
        <UserAvatar />
      </Link> */}
    </nav>
  )
}
export default HeaderNav
