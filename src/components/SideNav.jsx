'use client'
import UserAvatar from './UserAvatar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import SideNavLinks from '@/lib/utils/SideNavLinks'
function SideNav({ user }) {
  const pathname = usePathname()
  return (
    <div className='fixed flex flex-col gap-16 bg-bgTertiary h-full p-6'>
      <UserAvatar user={user} />
      {SideNavLinks.map((link) => {
        const isActive =
          pathname === link.path
            ? 'text-accent duration-300 p-3 rounded-xl bg-bgCuaternary '
            : 'hover:text-accent duration-300 p-3 rounded-xl hover:bg-bgCuaternary text-accentDarker'

        return (
          <Link
            href={link.path}
            key={link.path}
            className={isActive}
          >
            {link.label}
          </Link>
        )
      })}

      <nav className='flex flex-col gap-8 text-accentDarker'>
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
