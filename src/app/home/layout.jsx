import Header from '@/components/Header'
import { Suspense } from 'react'
function HomeLayout({ children }) {
  return (
    <div className='min-h-screen relative'>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <div className='mt-28 z-0'>{children}</div>
    </div>
  )
}
export default HomeLayout
