import { signOut } from 'next-auth/react'
function HeaderNavProfileMenu({ showMenu, setShowMenu }) {
  return (
    <>
      {showMenu && (
        <nav
          onMouseLeave={() => setShowMenu(false)}
          className='flex flex-col gap-3 text-right absolute w-44 top-8 -right-2 bg-bgTertiary p-3 rounded-lg'
        >
          <a
            href='/home/profile/courses'
            className='hover:bg-bgCuaternary w-full p-1 rounded'
          >
            My courses
          </a>
          <a
            href='/home/profile/settings'
            className='hover:bg-bgCuaternary w-full p-1 rounded'
          >
            Account settings
          </a>
          <a
            href='/home/profile/settings/edit'
            className='hover:bg-bgCuaternary w-full p-1 rounded'
          >
            Profile
          </a>
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
