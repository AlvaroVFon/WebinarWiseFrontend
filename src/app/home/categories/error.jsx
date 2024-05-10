'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
function ErrorPage() {
  const router = useRouter()
  setTimeout(() => {
    router.push('/')
  }, 3000)

  return (
    <div className='flex flex-col justify-center items-center min-h-screen gap-16'>
      <h1 className='text-4xl font-bold text-accent'>Something went wrong</h1>
      <Image
        src='/error.svg'
        width={300}
        height={300}
      />
      <p className='text-xl text-accent'>You are being redirect</p>
    </div>
  )
}
export default ErrorPage
