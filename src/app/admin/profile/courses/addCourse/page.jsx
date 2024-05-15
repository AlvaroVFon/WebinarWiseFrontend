import AddCourseForm from '@/components/AddCourseForm'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import NextAuthOptions from '@/app/api/auth/[...nextauth]/NextAuthOptions'
import api from '@/lib/api/WebinarWiseApi'
async function addCoursePage() {
  const session = await getServerSession(NextAuthOptions)

  if (session?.user?.roleName === 'role_user') {
    redirect('/home/courses?page=1')
  }
  const categories = await api.getCategories().then((res) => res?.results)
  return <AddCourseForm categories={categories} />
}
export default addCoursePage
