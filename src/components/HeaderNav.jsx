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
import NotificationIcon from './icons/NotificationIcon'
import NotificationsPopup from './NotificationsPopup'
import { useNotifications } from '@/hook/useNotifications'
function HeaderNav() {
  const { status, data: session } = useSession()
  const { unreadedNotifications } = useNotifications(session?.user?.accessToken)
  const pathname = usePathname()
  const [showNotificationPopup, setShowNotificationPopup] = useState(false)
  const [theme, setTheme] = useState('dark')
  const handleThemeChange = () => {
    changeTheme()
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <nav className='flex gap-3 justify-end text-accent items-center'>
      <button
        onClick={handleThemeChange}
        className='hover:scale-110 duration-300 p-3'
      >
        {theme === 'dark' ? <LightThemeIcon /> : <DarkThemeIcon />}
      </button>
      <Link
        href='/home/courses?page=1'
        title='Courses'
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
        title='Categories'
        className={
          pathname === '/home/categories'
            ? 'p-3 bg-accentDarker rounded-md'
            : 'p-3'
        }
      >
        <CategoryIcon />
      </Link>

      {status !== 'authenticated' ? (
        <Link
          href='/login'
          className='p-3'
          title='Login'
        >
          <LoginIcon />
        </Link>
      ) : (
        <>
          <button
            title='Notifications'
            className='relative'
            onClick={() => setShowNotificationPopup(true)}
          >
            {unreadedNotifications?.length > 0 && (
              <div className='rounded-full w-2 h-2 bg-red-800 absolute -top-1'></div>
            )}
            <NotificationIcon />
            <NotificationsPopup
              showNotificationPopup={showNotificationPopup}
              setShowNotificationPopup={setShowNotificationPopup}
              notifications={unreadedNotifications}
            />
          </button>
          <button
            onClick={() => signOut({ callbackUrl: '/home/courses?page=1' })}
            className='p-3 cursor-pointer'
            title='Logout'
          >
            <LogoutIcon />
          </button>
          <UserAvatar user={session?.user} />
        </>
      )}
    </nav>
  )
}
export default HeaderNav
