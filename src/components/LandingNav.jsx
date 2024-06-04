import Link from 'next/link'
import LoginIcon from './icons/LoginIcon'
import { routes } from '@/routes/routes'
function LandingNav() {
  console.log(routes.login)
  return (
    <nav className='flex gap-8 text-xl p-3 font-semibold'>
      <Link href={'/login'}>
        <LoginIcon />
      </Link>
    </nav>
  )
}
export default LandingNav
