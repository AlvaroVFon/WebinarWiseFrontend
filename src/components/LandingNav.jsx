import Link from 'next/link'
import LoginIcon from './icons/LoginIcon'
function LandingNav() {
  return (
    <nav className='flex gap-8 text-xl p-3 font-semibold'>
      <Link href='/login'>
        <LoginIcon />
      </Link>
    </nav>
  )
}
export default LandingNav
