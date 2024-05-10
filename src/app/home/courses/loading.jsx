import CourseCardSkeleton from '@/components/CourseCardSkeleton'

function LoadingPage() {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 4xl:grid-cols-6 gap-y-10  place-items-center min-h-screen p-6'>
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className='loading__card'
        >
          <CourseCardSkeleton />
        </div>
      ))}
    </div>
  )
}
export default LoadingPage
