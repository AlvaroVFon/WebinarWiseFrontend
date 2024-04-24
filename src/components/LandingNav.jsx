import Link from 'next/link'
function LandingNav() {
  return (
    <nav className='flex gap-8 text-xl p-3 font-semibold'>
      <Link href='/home/login' className='hover:'>
        Log in
      </Link>
      <Link href='/home/signup'>Sign up</Link>
    </nav>
  )
}
export default LandingNav
