'use client'
import Image from 'next/image'
function ErrorPage() {
  setTimeout(() => {
    window.location.href = '/'
  }, 3000)

  return (
    <div className='flex flex-col justify-center items-center min-h-screen gap-16'>
      <h1 className='text-4xl font-bold text-accent'>Something went wrong</h1>
      <Image
        src='/error.svg'
        width={200}
        height={200}
      />
      <p className='text-xl text-accent'>You are being redirect</p>
      <Image
        src='/spinner.svg'
        width={35}
        height={35}
        alt='spinner'
      />
    </div>
  )
}
export default ErrorPage
