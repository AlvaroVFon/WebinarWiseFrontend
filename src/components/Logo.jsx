import Link from 'next/link'
import Image from 'next/image'
function Logo() {
  return (
    <Link href='/'>
      <Image
        src='/logo-dark.svg'
        width={500}
        height={50}
        alt='logo'
        className='w-64 md:w-[450px] p-5 md:p-10'
      />
    </Link>
  )
}
export default Logo
