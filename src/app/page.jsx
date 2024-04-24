import Typewriter from '@/components/Typewriter'
import LandingNav from '@/components/LandingNav'
import Image from 'next/image'
import Link from 'next/link'
function Page() {
  return (
    <div className='grid h-screen '>
      <div className='flex justify-end'>
        <LandingNav />
      </div>
      <div className='flex flex-col items-center'>
        <Image src='/logo-dark.svg' width={500} height={50} alt='logo' />
        <Typewriter />
        <Link
          href='/home/cursos'
          className='bg-[#354398] p-3 rounded-full font-semibold text-lg text-center w-56 hover:bg-[#4462cc] -ml-52 mt-6 '
        >
          Explore our courses
        </Link>
      </div>
    </div>
  )
}
export default Page
