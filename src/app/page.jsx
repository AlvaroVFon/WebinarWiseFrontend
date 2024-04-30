'use client'
import Typewriter from '@/components/Typewriter'
import LandingNav from '@/components/LandingNav'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeProvider'
function Page() {
  const { theme, toggleTheme } = useTheme()
  console.log(theme)
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
          priority
        />
        <Typewriter />
        <Link
          href='/home/courses?page=1'
          className='flex items-center gap-2 p-1 md:p-2 rounded-lg text-lg text-[#7c83af] hover:text-[#696e99] border border-[#7c83af] hover:border-[#696e99] text-center'
        >
          Explore our courses{' '}
          <span className='animate-bounce'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
            >
              <path
                fill='#696e99'
                d='m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887q.375-.375.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75q0 .375-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1q-.375-.375-.375-.888t.375-.887z'
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  )
}
export default Page
