'use client'
import Image from 'next/image'
import Link from 'next/link'
import SearchBar from './SearchBar'
import HeaderNav from './HeaderNav'
import { usePathname, useSearchParams } from 'next/navigation'
function Header() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const category = searchParams.get('category') || ''

  return (
    <header className='sticky top-0 z-10 flex p-3 items-center border-b border-muted justify-between w-full bg-bgSecondary '>
      <Link
        href='/'
        className='hidden md:block'
      >
        <Image
          src='/logo.svg'
          alt='logo'
          width={250}
          height={50}
        />
      </Link>
      {pathname === '/home/courses' && category === '' && <SearchBar />}
      <HeaderNav />
    </header>
  )
}
export default Header
