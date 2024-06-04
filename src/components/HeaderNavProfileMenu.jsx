'use client'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import HeaderProfileMenuLinks from '@/lib/utils/HeaderProfileMenuLinks'
function HeaderNavProfileMenu({ showMenu, setShowMenu, disableMenu }) {
  const session = useSession()
  const linkStyle = 'hover:bg-bgCuaternary w-full p-2 rounded'
  return (
    <>
      {showMenu && !disableMenu && (
        <nav
          onMouseLeave={() => setShowMenu(false)}
          className='flex flex-col gap-3 text-right absolute w-44 top-0 -right-2 bg-bgTertiary p-3 rounded-lg'
        >
          {HeaderProfileMenuLinks.map((link) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                className={linkStyle}
              >
                {link.label}
              </Link>
            )
          })}
          {session?.data?.user?.roleName !== 'role_user' && (
            <>
              <Link
                href='/admin/profile/courses/addCourse'
                className={linkStyle}
              >
                Add Course
              </Link>
              <Link
                href='/admin/profile/courses/createdCourses'
                className={linkStyle}
              >
                Created courses
              </Link>
            </>
          )}
          <a
            onClick={() => signOut({ callbackUrl: '/login' })}
            className={`${linkStyle} cursor-pointer`}
          >
            Logout
          </a>
        </nav>
      )}
    </>
  )
}
export default HeaderNavProfileMenu
