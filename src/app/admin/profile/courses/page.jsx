import api from '@/lib/api/WebinarWiseApi'
import CourseCard from '@/components/CourseCard'
import { getServerSession } from 'next-auth'
import NextAuthOptions from '@/app/api/auth/[...nextauth]/NextAuthOptions'
import { Suspense } from 'react'
import CourseCardSkeleton from '@/components/CourseCardSkeleton'
async function ProfileCoursesPage() {
  const session = await getServerSession(NextAuthOptions)
  const library = await api
    .getLibrary(session?.user?.accessToken)
    .then((res) => res.data?.library)
  const likedCoursesIds = await api
    .getCourses('/courses', session?.user?.accessToken)
    .then((res) => res.results)
    .then((res) => res.filter((course) => course.user_liked))
    .then((res) => res.map((course) => course.id))
  return (
    <>
      <div className='grid col-start-3 md:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5  gap-10  place-items-center p-6'>
        {library?.map((course, index) => (
          <Suspense fallback={<CourseCardSkeleton key={index} />}>
            <CourseCard
              key={course.id}
              course={course}
              isLiked={likedCoursesIds?.includes(course.id)}
              isPurchased={true}
            />
          </Suspense>
        ))}
      </div>
    </>
  )
}
export default ProfileCoursesPage
