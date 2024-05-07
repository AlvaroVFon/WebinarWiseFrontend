'use client'
import UserAvatar from './UserAvatar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
function SideNav({ user }) {
  const pathname = usePathname()
  return (
    <div className='fixed flex flex-col gap-16 bg-bgTertiary h-full p-6'>
      <UserAvatar user={user} />
      <nav className='flex flex-col gap-8 text-accentDarker'>
        <Link
          href='/home/profile/courses'
          className={
            pathname === '/home/profile/courses'
              ? 'text-accent duration-300 p-3 rounded-xl bg-bgCuaternary'
              : 'hover:text-accent duration-300 p-3 rounded-xl hover:bg-bgCuaternary'
          }
        >
          My courses
        </Link>
        <Link
          href='/home/profile/settings'
          className={
            pathname === '/home/profile/settings'
              ? 'text-accent duration-300 p-3 rounded-xl bg-bgCuaternary'
              : 'hover:text-accent duration-300 p-3 rounded-xl hover:bg-bgCuaternary'
          }
        >
          Account Settings
        </Link>
        <Link
          href='/home/profile/settings/edit'
          className={
            pathname === '/home/profile/settings/edit'
              ? 'text-accent duration-300 p-3 rounded-xl bg-bgCuaternary'
              : 'hover:text-accent duration-300 p-3 rounded-xl hover:bg-bgCuaternary'
          }
        >
          Edit Profile
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: '/login' })}
          className='hover:text-accent duration-300 p-3 rounded-xl hover:bg-bgCuaternary text-left'
        >
          Log out
        </button>
      </nav>
    </div>
  )
}
export default SideNav
