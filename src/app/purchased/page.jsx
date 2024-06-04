'use client'

import Spinner from '@/components/icons/Spinner'
import { useRouter } from 'next/navigation'
import { routes } from '@/routes/routes'

function PurchasedPage() {
  const router = useRouter()
  setTimeout(() => {
    //FIXME
    router.push(routes.mycourses)
  }, 3000)
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-6'>
      <h1 className='text-4xl text-accent'>
        Congratulations, your course have been purchased succesfully
      </h1>
      <p className='text-center text-2xl text-accent'>
        You are being redirected
      </p>
      <Spinner color='#a8b3cf' />
    </div>
  )
}
export default PurchasedPage
