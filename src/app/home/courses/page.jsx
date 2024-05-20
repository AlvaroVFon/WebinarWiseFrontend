import CourseCard from '@/components/CourseCard'
import CourseCardSkeleton from '@/components/CourseCardSkeleton'
import Pagination from '@/components/Pagination'
import { Suspense } from 'react'
import api from '@/lib/api/WebinarWiseApi'
import { getServerSession } from 'next-auth'
import NextAuthOptions from '@/app/api/auth/[...nextauth]/NextAuthOptions'
import GridWrapper from '@/components/GridWrapper'
async function CursosPage({ searchParams }) {
  const session = await getServerSession(NextAuthOptions)
  const { page, search = '', category = '' } = await searchParams
  const courses = await api.getCourses(page, search, category)
  const purchasedCoursesIds = await api
    .getLibrary(session?.user?.accessToken)
    .then((res) => res.data?.library.map((course) => course.id))
    .catch((error) => error)

  const likedCoursesIds = await api
    .getCourses(page, search, category, session?.user?.accessToken)
    .then((res) =>
      res.results
        ?.filter((course) => course.user_liked)
        ?.map((course) => course.id)
    )

  return (
    <>
      <GridWrapper>
        {courses?.results?.map((course, index) => (
          <Suspense
            key={index}
            fallback={<CourseCardSkeleton />}
          >
            <CourseCard
              key={index}
              course={course}
              isPurchased={
                session ? purchasedCoursesIds?.includes(course.id) : false
              }
              isLiked={session ? likedCoursesIds?.includes(course.id) : false}
            />
          </Suspense>
        ))}
      </GridWrapper>
      {courses?.totalPages > 1 && (
        <div className='flex justify-center'>
          <Suspense>
            <Pagination
              currentPage={page}
              totalPages={courses.totalPages}
            />
          </Suspense>
        </div>
      )}
    </>
  )
}
export default CursosPage
