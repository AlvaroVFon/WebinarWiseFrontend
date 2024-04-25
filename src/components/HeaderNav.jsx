// import UserAvatar from './UserProfile'
import Link from 'next/link'

function HeaderNav() {
  return (
    <nav className='flex gap-3'>
      <Link href='/home/cursos' className='p-3'>
        Courses
      </Link>
      <Link href='/home/categorias' className='p-3'>
        Categories
      </Link>
      <Link href='/login' className='p-3'>
        Log in
      </Link>
      <Link href='' className='p-3'>
        Sign up
      </Link>
      {/* <Link href=''>
        <UserAvatar />
      </Link> */}
    </nav>
  )
}
export default HeaderNav
