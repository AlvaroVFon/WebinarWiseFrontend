'use client'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import UserAvatar from './UserAvatar'
import Link from 'next/link'
import SideNavLinks from '@/lib/utils/SideNavLinks'
function SideNav({ user }) {
  const { data: session } = useSession()
  const pathname = usePathname()
  return (
    <div className='fixed col-span-2 hidden lg:flex flex-col gap-5 bg-bgTertiary h-full p-6'>
      <UserAvatar
        user={user}
        showUserEmail={true}
        disableMenu={true}
      />
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
      {session?.user?.roleName !== 'role_user' && (
        <>
          <Link
            href='/admin/profile/courses/addCourse'
            className={
              pathname === '/admin/profile/courses/addCourse'
                ? 'text-accent duration-300 p-3 rounded-xl bg-bgCuaternary '
                : 'hover:text-accent duration-300 p-3 rounded-xl hover:bg-bgCuaternary text-accentDarker'
            }
          >
            Add Course
          </Link>
          <Link
            href='/admin/profile/courses/createdCourses'
            className={
              pathname === '/admin/profile/courses/createdCourses'
                ? 'text-accent duration-300 p-3 rounded-xl bg-bgCuaternary '
                : 'hover:text-accent duration-300 p-3 rounded-xl hover:bg-bgCuaternary text-accentDarker'
            }
          >
            Created Courses
          </Link>
        </>
      )}
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
