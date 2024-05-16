import api from '@/lib/api/WebinarWiseApi'
import { getServerSession } from 'next-auth'
import NextAuthOptions from '@/app/api/auth/[...nextauth]/NextAuthOptions'
import CourseCard from '@/components/CourseCard'
import { Suspense } from 'react'
import CourseCardSkeleton from '@/components/CourseCardSkeleton'
async function CreatedCoursesPage() {
  const session = await getServerSession(NextAuthOptions)
  const courses = await api
    .getCourses('/courses')
    .then((res) =>
      res.results.filter((course) => course.teacher.id === session?.user?.id)
    )

  console.log(courses)
  return (
    <div className='grid col-start-3 md:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5  gap-10  place-items-center p-6'>
      {courses?.map((course, index) => (
        <Suspense fallback={<CourseCardSkeleton />}>
          <CourseCard
            key={index}
            course={course}
          />
        </Suspense>
      ))}
    </div>
  )
}
export default CreatedCoursesPage
