import CourseCard from '@/components/CourseCard'
import CourseCardSkeleton from '@/components/CourseCardSkeleton'
import Pagination from '@/components/Pagination'
import { Suspense } from 'react'
import api from '@/lib/api/WebinarWiseApi'
import axios from 'axios'
async function CursosPage({ searchParams }) {
  const { page } = await searchParams
  // const url = `/courses?page=${page}&perPage=12`
  const url = 'https://api.webinarwise.com/v1/courses?page=1&perPage=12'
  const courses = axios.get(url).then((res) => console.log(res))

  return (
    <div className=''>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-y-10  place-items-center min-h-screen p-6'>
        {/* {courses.results.map((course, index) => (
          <Suspense key={index} fallback={<CourseCardSkeleton />}>
            <CourseCard key={index} course={course} />
          </Suspense>
        ))} */}
      </div>
      <div className='flex justify-center'>
        <Pagination currentPage={page} />
      </div>
    </div>
  )
}
export default CursosPage
