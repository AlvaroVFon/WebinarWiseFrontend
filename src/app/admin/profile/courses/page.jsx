import api from '@/lib/api/WebinarWiseApi'
import CourseCard from '@/components/CourseCard'
import { getServerSession } from 'next-auth'
import NextAuthOptions from '@/app/api/auth/[...nextauth]/NextAuthOptions'
import { Suspense } from 'react'
import CourseCardSkeleton from '@/components/CourseCardSkeleton'
import SuggestedCourses from '@/components/SuggestedCourses'
import GridWrapper from '@/components/GridWrapper'
async function ProfileCoursesPage() {
  const session = await getServerSession(NextAuthOptions)
  const courses = await api.getAllCourses().then((res) => res.results)
  const library = await api
    .getLibrary(session?.user?.accessToken)
    .then((res) => res.data?.library)
  const likedCoursesIds = await api
    .getCourses(session?.user?.accessToken)
    .then((res) => res.results)
    .then((res) => res.filter((course) => course.user_liked))
    .then((res) => res.map((course) => course.id))
  return (
    <>
      <GridWrapper>
        {library.length === 0 && (
          <>
            <h2 className='text-2xl font-bold text-accent col-span-full text-center mt-20'>
              No Courses Found. You can start by adding some courses to your
              library. Here are some suggestions...
            </h2>
            <SuggestedCourses courses={courses} />
          </>
        )}
        {library?.map((course, index) => (
          <Suspense
            key={index}
            fallback={<CourseCardSkeleton key={index} />}
          >
            <CourseCard
              key={course.id}
              course={course}
              isLiked={likedCoursesIds?.includes(course.id)}
              isPurchased={true}
            />
          </Suspense>
        ))}
      </GridWrapper>
    </>
  )
}
export default ProfileCoursesPage
