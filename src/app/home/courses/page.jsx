import CourseCard from '@/components/CourseCard'
import CourseCardSkeleton from '@/components/CourseCardSkeleton'
import Pagination from '@/components/Pagination'
import api from '@/lib/api/WebinarWiseApi'
async function CursosPage({ searchParams }) {
  const { page } = searchParams
  const url = `/courses?page=${page}`
  const courses = await api.getCourses(url)

  return (
    <div className=''>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-10  place-items-center min-h-screen p-6'>
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
      <div className='flex justify-center'>
        <Pagination currentPage={page} />
      </div>
    </div>
  )
}
export default CursosPage
