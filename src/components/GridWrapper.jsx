'use client'
import { usePathname } from 'next/navigation'

function GridWrapper({ children }) {
  const pathname = usePathname()
  const wrapperClass =
    pathname === '/admin/profile/courses' ||
    pathname === '/admin/profile/courses/createdCourses'
      ? 'grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5  gap-10  place-items-center p-6'
      : 'grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 4xl:grid-cols-6  gap-10  place-items-center p-6'

  return <div className={wrapperClass}>{children}</div>
}
export default GridWrapper
