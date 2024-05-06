import CourseCard from '@/components/CourseCard'
import CourseCardSkeleton from '@/components/CourseCardSkeleton'
import Pagination from '@/components/Pagination'
import { Suspense } from 'react'
import api from '@/lib/api/WebinarWiseApi'
import { getServerSession } from 'next-auth'
import NextAuthOptions from '@/app/api/auth/[...nextauth]/NextAuthOptions'
async function CursosPage({ searchParams }) {
  const { page, search = '', category = '' } = await searchParams
  const url = `/courses?page=${page}&perPage=12&search=${search}&category=${category}`
  console.log(url)
  const courses = await api.getCourses(url).catch((error) => error)

  return (
    <div className=''>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-y-10  place-items-center min-h-screen p-6'>
        {courses?.results?.map((course, index) => (
          <Suspense
            key={index}
            fallback={<CourseCardSkeleton />}
          >
            <CourseCard
              key={index}
              course={course}
            />
          </Suspense>
        ))}
      </div>
      {courses?.totalPages > 1 && (
        <div className='flex justify-center'>
          <Suspense>
            <Pagination
              currentPage={page}
              totalPages={courses.totalPages}
            />
          </Suspense>
        </div>
      )}
    </div>
  )
}
export default CursosPage
