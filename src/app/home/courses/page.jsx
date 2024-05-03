import CourseCard from '@/components/CourseCard'
import CourseCardSkeleton from '@/components/CourseCardSkeleton'
import Pagination from '@/components/Pagination'
import { Suspense } from 'react'
import api from '@/lib/api/WebinarWiseApi'
async function CursosPage({ searchParams }) {
  const { page } = await searchParams
  const url = `/courses?page=${page}&perPage=12`
  const courses = await api.getCourses(url).catch((error) => error)
  return (
    <div className=''>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-y-10  place-items-center min-h-screen p-6'>
        {courses.results?.map((course, index) => (
          <Suspense key={index} fallback={<CourseCardSkeleton />}>
            <CourseCard key={index} course={course} />
          </Suspense>
        ))}
      </div>
      <div className='flex justify-center'>
        <Pagination currentPage={page} totalPages={courses.totalPages} />
      </div>
    </div>
  )
}
export default CursosPage
