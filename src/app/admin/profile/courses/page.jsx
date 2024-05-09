import api from '@/lib/api/WebinarWiseApi'
import CourseCard from '@/components/CourseCard'
import { getServerSession } from 'next-auth'
import NextAuthOptions from '@/app/api/auth/[...nextauth]/NextAuthOptions'
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
      <div className='absolute grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10  place-items-center p-6'>
        {library?.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            isLiked={likedCoursesIds?.includes(course.id)}
            isPurchased={true}
          />
        ))}
      </div>
    </>
  )
}
export default ProfileCoursesPage
