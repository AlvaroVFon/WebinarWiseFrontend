import CourseCard from '@/components/CourseCard'
import CourseCardSkeleton from '@/components/CourseCardSkeleton'
import Pagination from '@/components/Pagination'
import { Suspense } from 'react'
import api from '@/lib/api/WebinarWiseApi'
import { getServerSession } from 'next-auth'
import NextAuthOptions from '@/app/api/auth/[...nextauth]/NextAuthOptions'
async function CursosPage({ searchParams }) {
  const session = await getServerSession(NextAuthOptions)
  const { page, search = '', category = '' } = await searchParams
  const url = `/courses?page=${page}&perPage=12&search=${search}&category=${category}`
  const courses = await api.getCourses(url)
  const purchasedCoursesIds = await api
    .getLibrary(session?.user?.accessToken)
    .then((res) => res.data?.library)
    .then((res) => res.map((course) => course.id))
    .catch((error) => error)
  const likedCoursesIds = await api
    .getCourses('/courses', session?.user?.accessToken)
    .then((res) => res.results)
    .then((res) => res.filter((course) => course.user_liked))
    .then((res) => res.map((course) => course.id))

  return (
    <div className=''>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 4xl:grid-cols-6  gap-y-10  place-items-center min-h-screen p-6'>
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
      </div>
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
    </div>
  )
}
export default CursosPage
