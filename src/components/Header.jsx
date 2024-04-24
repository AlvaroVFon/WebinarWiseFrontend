import Image from 'next/image'
import SearchBar from './SearchBar'
import HeaderNav from './HeaderNav'
function Header() {
  return (
    <header className='flex justify-between p-3 items-center'>
      <Image src='/logo-dark.svg' alt='logo' width={250} height={50} />
      <SearchBar />
      <HeaderNav />
    </header>
  )
}
export default Header
