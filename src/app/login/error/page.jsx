'use client'
import Spinner from '@/components/icons/Spinner'
import { useRouter } from 'next/navigation'

function LoginErrorPage() {
  const router = useRouter()
  setTimeout(() => {
    router.push('/login')
  }, 2000)

  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-10'>
      <h1 className='text-3xl text-center text-accent'>
        You are not logged in, redirecting to login page.
      </h1>
      <Spinner
        width={50}
        height={50}
      />
    </div>
  )
}
export default LoginErrorPage
