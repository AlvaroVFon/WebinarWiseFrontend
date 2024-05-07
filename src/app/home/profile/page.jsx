import api from '@/lib/api/WebinarWiseApi'
import NextAuthOptions from '@/app/api/auth/[...nextauth]/NextAuthOptions'
import { getServerSession } from 'next-auth'
async function ProfilePage() {
  const session = await getServerSession(NextAuthOptions)
  const user = session.user
  console.log(user)
  const purchasedCourses = await api.getLibrary(user?.accessToken)
  console.log(purchasedCourses.data)

  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  )
}
export default ProfilePage
