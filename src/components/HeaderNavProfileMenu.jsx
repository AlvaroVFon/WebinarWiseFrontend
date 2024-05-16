'use client'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import HeaderProfileMenuLinks from '@/lib/utils/HeaderProfileMenuLinks'
function HeaderNavProfileMenu({ showMenu, setShowMenu, disableMenu }) {
  const session = useSession()
  const linkStyle = 'hover:bg-bgCuaternary w-full p-2 rounded'
  return (
    <>
      {showMenu && !disableMenu && (
        <nav
          onMouseLeave={() => setShowMenu(false)}
          className='flex flex-col gap-3 text-right absolute w-44 top-8 -right-2 bg-bgTertiary p-3 rounded-lg'
        >
          {HeaderProfileMenuLinks.map((link) => {
            return (
              <a
                key={link.href}
                href={link.href}
                className={linkStyle}
              >
                {link.label}
              </a>
            )
          })}
          {
            // If the user is not logged in, show the login link
            session?.data?.user?.roleName !== 'role_user' && (
              <>
                <a
                  href='/admin/profile/courses/addCourse'
                  className={linkStyle}
                >
                  Add Course
                </a>
                <a
                  href='/admin/profile/courses/createdCourses'
                  className={linkStyle}
                >
                  Created courses
                </a>
              </>
            )
          }
          <a
            href='#'
            onClick={() => signOut({ callbackUrl: '/login' })}
            className={linkStyle}
          >
            Logout
          </a>
        </nav>
      )}
    </>
  )
}
export default HeaderNavProfileMenu
