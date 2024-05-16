import CourseCardSkeleton from '@/components/CourseCardSkeleton'
import GridWrapper from '@/components/GridWrapper'
function LoadingPage() {
  return (
    <GridWrapper>
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className='loading__card'
        >
          <CourseCardSkeleton />
        </div>
      ))}
    </GridWrapper>
  )
}
export default LoadingPage
