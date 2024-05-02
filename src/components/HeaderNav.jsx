'use client'
import UserAvatar from './UserProfile'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from '@/contexts/SessionProvider'
function HeaderNav() {
  const { user, signOut } = useSession()

  return (
    <nav className='flex gap-3 justify-end text-accent items-center'>
      <Link href='/home/courses?page=1' className='p-3'>
        <Image
          src='/courses.svg'
          alt='courses'
          width={25}
          height={25}
          className='hover:scale-110 transition-transform duration-300 ease-in-out'
        />
      </Link>
      <Link href='/home/categories' className='p-3'>
        <Image
          src='/category.svg'
          alt='category'
          width={25}
          height={25}
          className='hover:scale-110 transition-transform duration-300 ease-in-out'
        />
      </Link>
      {user === null ? (
        <Link href='/login' className='p-3'>
          <Image
            src='/login.svg'
            alt='login'
            width={25}
            height={25}
            className='hover:scale-110 transition-transform duration-300 ease-in-out'
          />
        </Link>
      ) : (
        <Link href='/home/courses' onClick={signOut} className='p-3'>
          <Image
            src='/logout.svg'
            alt='register'
            width={25}
            height={25}
            className='hover:scale-110 transition-transform duration-300 ease-in-out'
          />
        </Link>
      )}
      {user && (
        <Link href=''>
          <UserAvatar />
        </Link>
      )}
    </nav>
  )
}
export default HeaderNav
