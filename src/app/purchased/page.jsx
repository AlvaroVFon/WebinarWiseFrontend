'use client'

import Spinner from '@/components/icons/Spinner'
import { useRouter } from 'next/navigation'

function PurchasedPage() {
  const router = useRouter()
  setTimeout(() => {
    router.push('/')
  }, 3000)
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-6'>
      <h1 className='text-4xl'>
        Congratulations, your course have been purchased succesfully
      </h1>
      <p className='text-center text-2xl'>You are being redirected</p>
      <Spinner />
    </div>
  )
}
export default PurchasedPage
