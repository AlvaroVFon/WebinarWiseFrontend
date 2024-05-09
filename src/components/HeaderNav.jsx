'use client'
import UserAvatar from './UserAvatar'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { changeTheme } from '@/lib/utils/changeTheme'
import { useSession, signOut } from 'next-auth/react'
import CategoryIcon from './icons/CategoryIcon'
import LightThemeIcon from './icons/LightThemeIcon'
import DarkThemeIcon from './icons/DarkThemeIcon'
import CoursesIcon from './icons/CoursesIcon'
import LogoutIcon from './icons/LogoutIcon'
import LoginIcon from './icons/LoginIcon'

function HeaderNav() {
  const { status } = useSession()
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
        {theme === 'dark' ? <LightThemeIcon /> : <DarkThemeIcon />}
      </a>
      <Link
        href='/home/courses?page=1'
        className={
          pathname === '/home/courses'
            ? 'p-3 bg-accentDarker rounded-md'
            : 'p-3'
        }
      >
        <CoursesIcon />
      </Link>
      <Link
        href='/home/categories'
        className={
          pathname === '/home/categories'
            ? 'p-3 bg-accentDarker rounded-md'
            : 'p-3'
        }
      >
        <CategoryIcon color='#a8b3cf' />
      </Link>
      {status !== 'authenticated' ? (
        <Link
          href='/login'
          className='p-3'
        >
          <LoginIcon />
        </Link>
      ) : (
        <a
          onClick={() => signOut({ callbackUrl: '/home/courses?page=1' })}
          className='p-3 cursor-pointer'
        >
          <LogoutIcon />
        </a>
      )}
      {status === 'authenticated' && (
        <Link href='/admin/profile/courses'>
          <UserAvatar />
        </Link>
      )}
    </nav>
  )
}
export default HeaderNav
