'use client'
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
          src='/logo.svg'
          width={500}
          height={50}
          alt='logo'
          className='w-64 md:w-[450px]'
          priority
        />
        <Typewriter />
        <Link
          href='/home/courses?page=1'
          className='flex items-center gap-2 p-1 md:p-2 rounded-lg text-lg text-accentDarker hover:text-accent border border-accentDarker hover:border-accent text-center duration-300'
        >
          Explore our courses{' '}
          <span className='animate-bounce text-muted'>{'>'}</span>
        </Link>
      </div>
    </div>
  )
}
export default Page
