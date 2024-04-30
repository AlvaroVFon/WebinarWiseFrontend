import Image from 'next/image'
import Link from 'next/link'
import SearchBar from './SearchBar'
import HeaderNav from './HeaderNav'
function Header() {
  return (
    <header className='grid grid-cols-2 md:grid-cols-3 p-3 items-center border-b border-muted'>
      <Link href='/' className='hidden md:block'>
        <Image src='/logo-dark.svg' alt='logo' width={250} height={50} />
      </Link>
      <SearchBar />
      <HeaderNav />
    </header>
  )
}
export default Header
