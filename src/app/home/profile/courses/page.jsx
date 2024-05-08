import api from '@/lib/api/WebinarWiseApi'
import CourseCard from '@/components/CourseCard'
import { getServerSession } from 'next-auth'
import NextAuthOptions from '@/app/api/auth/[...nextauth]/NextAuthOptions'
async function ProfileCoursesPage() {
  const session = await getServerSession(NextAuthOptions)
  const user = session?.user
  const courses = await api
    .getLibrary(user?.accessToken)
    .then((res) => res.data?.library)
  return (
    <div className=''>
      {courses?.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
        />
      ))}
    </div>
  )
}
export default ProfileCoursesPage
