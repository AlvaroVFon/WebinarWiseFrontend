import CourseCard from '@/components/CourseCard'
import CourseCardSkeleton from '@/components/CourseCardSkeleton'
import Pagination from '@/components/Pagination'
async function CursosPage() {
  return (
    <div className=''>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-10  place-items-center min-h-screen p-6'>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <div className='flex justify-center'>
        <Pagination />
      </div>
    </div>
  )
}
export default CursosPage
