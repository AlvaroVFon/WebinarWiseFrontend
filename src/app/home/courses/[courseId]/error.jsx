'use client'
import { useRouter } from 'next/navigation'
function ErrorPage() {
  const router = useRouter()
  setTimeout(() => {
    router.push('/home/courses')
  }, 3000)

  return (
    <div className='flex flex-col justify-center items-center min-h-screen gap-16'>
      <h1 className='text-4xl font-bold text-accent'>
        The course you are looking for is not avaiable
      </h1>
      <p className='text-2xl text-accent'>404 NOT FOUND</p>
      <p className='text-xl text-accent'>You are being redirect</p>
    </div>
  )
}
export default ErrorPage
