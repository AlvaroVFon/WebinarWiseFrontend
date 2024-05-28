'use client'
import Link from 'next/link'
import SearchBar from './SearchBar'
import HeaderNav from './HeaderNav'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Logo from './Logo'
function Header() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const category = searchParams.get('category') || ''

  return (
    <header className='sticky top-0 z-10 flex p-3 items-center border-b border-muted justify-center md:justify-between w-full bg-bgSecondary '>
      <Logo />

      {pathname === '/home/courses' && category === '' && (
        <Suspense>
          <SearchBar />
        </Suspense>
      )}

      <HeaderNav />
    </header>
  )
}
export default Header
