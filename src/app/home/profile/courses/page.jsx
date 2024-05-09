import api from '@/lib/api/WebinarWiseApi'
import CourseCard from '@/components/CourseCard'
import { getServerSession } from 'next-auth'
import NextAuthOptions from '@/app/api/auth/[...nextauth]/NextAuthOptions'
import Pagination from '@/components/Pagination'
async function ProfileCoursesPage() {
  const session = await getServerSession(NextAuthOptions)
  const user = session?.user
  const courses = await api
    .getLibrary(user?.accessToken)
    .then((res) => res.data?.library)
  console.log(courses)
  const likedCourses = await api
    .getCourses('/courses', user?.accessToken)
    .then((res) => res.results.filter((course) => course.user_liked))
  return (
    <>
      <div className='absolute grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10  place-items-center p-6'>
        {courses?.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            purchasedCourses={courses}
          />
        ))}
      </div>
    </>
  )
}
export default ProfileCoursesPage
