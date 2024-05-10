import Header from '@/components/Header'
import { Suspense } from 'react'
function HomeLayout({ children }) {
  return (
    <div className='relative'>
      <Suspense>
        <Header />
      </Suspense>
      <div>{children}</div>
    </div>
  )
}
export default HomeLayout
