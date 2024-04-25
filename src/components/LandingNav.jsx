import Link from 'next/link'
function LandingNav() {
  return (
    <nav className='flex gap-8 text-xl p-3 font-semibold'>
      <Link href='/login' className=''>
        Log in
      </Link>
      <Link href='/signup'>Sign up</Link>
    </nav>
  )
}
export default LandingNav
