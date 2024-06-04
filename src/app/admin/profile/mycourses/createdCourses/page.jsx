import api from '@/lib/api/WebinarWiseApi'
import { getServerSession } from 'next-auth'
import NextAuthOptions from '@/app/api/auth/[...nextauth]/NextAuthOptions'
import CourseCard from '@/components/CourseCard'
import { Suspense } from 'react'
import CourseCardSkeleton from '@/components/CourseCardSkeleton'
import GridWrapper from '@/components/GridWrapper'
async function CreatedCoursesPage() {
  const session = await getServerSession(NextAuthOptions)
  const courses = await api
    .getAllCourses()
    .then((res) =>
      res?.results?.filter((course) => course.teacher.id === session?.user?.id)
    )
  return (
    <GridWrapper>
      {courses?.map((course, index) => (
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
    </GridWrapper>
  )
}
export default CreatedCoursesPage
