import Typewriter from '@/components/Typewriter'
import LandingNav from '@/components/LandingNav'
import Image from 'next/image'
import Link from 'next/link'
function Page() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex justify-end'>
        <LandingNav />
      </div>
      <div className='flex flex-col items-start m-auto gap-3 md:gap-10'>
        <Image
          src='/logo-dark.svg'
          width={500}
          height={50}
          alt='logo'
          className='w-64 md:w-[450px]'
        />
        <Typewriter />
        <Link
          href='/home/cursos'
          className='bg-[#354398] p-1 md:p-2 rounded-full text-lg text-center w-56 hover:bg-[#4462cc] mt-4 '
        >
          Explore our courses
        </Link>
      </div>
    </div>
  )
}
export default Page
