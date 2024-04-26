import Link from 'next/link'
import Image from 'next/image'
function LandingNav() {
  return (
    <nav className='flex gap-8 text-xl p-3 font-semibold'>
      <Link href='/login' className=''>
        <Image src='/login.svg' alt='login' width={25} height={25} />
      </Link>
    </nav>
  )
}
export default LandingNav
