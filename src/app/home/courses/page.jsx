import CourseCard from '@/components/CourseCard'
import CourseCardSkeleton from '@/components/CourseCardSkeleton'
import Pagination from '@/components/Pagination'
import { Suspense } from 'react'
import api from '@/lib/api/WebinarWiseApi'
import { getServerSession } from 'next-auth'
import NextAuthOptions from '@/app/api/auth/[...nextauth]/NextAuthOptions'
import GridWrapper from '@/components/GridWrapper'
import NoResultIcon from '@/components/icons/NoResultsIcon'
async function CursosPage({ searchParams }) {
  const session = await getServerSession(NextAuthOptions)
  const { page, search = '', category = '' } = await searchParams
  const courses = await api.getCourses(undefined, page, search, category)
  const purchasedCoursesIds = await api
    .getLibrary(session?.user?.accessToken)
    .then((res) => res.data?.library.map((course) => course.id))
    .catch((error) => error)

  const likedCoursesIds = await api
    .getCourses(session?.user?.accessToken, page, search, category)
    .then((res) =>
      res.results
        ?.filter((course) => course.user_liked)
        ?.map((course) => course.id)
    )
  return (
    <>
      {courses.results.length === 0 && (
        <div className='flex flex-col gap-6 justify-center items-center h-96'>
          <NoResultIcon size={100} />
          <p className='text-3xl text-accent'>No results found</p>
        </div>
      )}
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
