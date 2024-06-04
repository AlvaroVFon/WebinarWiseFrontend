'use client'
import { usePathname } from 'next/navigation'
import { routes } from '@/routes/routes'
function GridWrapper({ children }) {
  const pathname = usePathname()
  const wrapperClass =
    pathname === routes.mycourses || pathname === routes.createdCourses
      ? 'grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10  place-items-center p-6'
      : 'grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 4xl:grid-cols-6  gap-10  place-items-center p-6'

  return <div className={wrapperClass}>{children}</div>
}
export default GridWrapper
