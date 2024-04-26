import CourseCard from '@/components/CourseCard'
import CourseCardSkeleton from '@/components/CourseCardSkeleton'
import api from '@/lib/api/WebinarWiseApi'
async function CursosPage() {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-10  place-items-center min-h-screen '>
      <CourseCard />
      <CourseCardSkeleton />
    </div>
  )
}
export default CursosPage
