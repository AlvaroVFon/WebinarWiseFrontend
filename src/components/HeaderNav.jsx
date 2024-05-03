'use client'
import UserAvatar from './UserProfile'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { changeTheme } from '@/lib/utils/changeTheme'

function HeaderNav() {
  const pathname = usePathname()
  const [theme, setTheme] = useState('dark')
  return (
    <nav className='flex gap-3 justify-end text-accent items-center'>
      <a
        href='#'
        onClick={() => {
          changeTheme()
          setTheme(theme === 'dark' ? 'light' : 'dark')
        }}
        className='hover:scale-110 duration-300 p-3'
      >
        {theme === 'dark' ? (
          <Image
            src='/light.svg'
            width={25}
            height={25}
            alt='light'
          />
        ) : (
          <Image
            src='/dark.svg'
            width={25}
            height={25}
            alt='dark'
          />
        )}
      </a>
      <Link
        href='/home/courses?page=1'
        className={
          pathname === '/home/courses'
            ? 'p-3 bg-accentDarker rounded-md'
            : 'p-3'
        }
      >
        <Image
          src='/courses.svg'
          alt='courses'
          width={25}
          height={25}
          className='hover:scale-110  duration-300 ease-in-out'
        />
      </Link>
      <Link
        href='/home/categories'
        className={
          pathname === '/home/categories'
            ? 'p-3 bg-accentDarker rounded-md'
            : 'p-3'
        }
      >
        <Image
          src='/category.svg'
          alt='category'
          width={25}
          height={25}
          className='hover:scale-110 duration-300 ease-in-out'
        />
      </Link>
      {user !== null ? (
        <Link
          href='/login'
          className='p-3'
        >
          <Image
            src='/login.svg'
            alt='login'
            width={25}
            height={25}
            className='hover:scale-110 duration-300 ease-in-out'
          />
        </Link>
      ) : (
        <Link
          href='/home/courses'
          onClick={signOut}
          className='p-3'
        >
          <Image
            src='/logout.svg'
            alt='register'
            width={25}
            height={25}
            className='hover:scale-110 duration-300 ease-in-out'
          />
        </Link>
      )}
      {user && (
        <Link href=''>
          <UserAvatar />
        </Link>
      )}
    </nav>
  )
}
export default HeaderNav
