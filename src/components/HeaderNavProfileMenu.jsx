import { signOut } from 'next-auth/react'
import HeaderProfileMenuLinks from '@/lib/utils/HeaderProfileMenuLinks'
function HeaderNavProfileMenu({ showMenu, setShowMenu, disableMenu }) {
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
                className='hover:bg-bgCuaternary w-full p-2 rounded'
              >
                {link.label}
              </a>
            )
          })}

          <a
            href='#'
            onClick={() => signOut({ callbackUrl: '/login' })}
            className='hover:bg-bgCuaternary w-full p-1 rounded'
          >
            Logout
          </a>
        </nav>
      )}
    </>
  )
}
export default HeaderNavProfileMenu
