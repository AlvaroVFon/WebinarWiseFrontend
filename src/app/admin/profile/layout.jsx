import SideNav from '@/components/SideNav'
import { getServerSession } from 'next-auth'
import NextAuthOptions from '@/app/api/auth/[...nextauth]/NextAuthOptions'
import Header from '@/components/Header'
async function ProfileLayout({ children }) {
  const session = await getServerSession(NextAuthOptions)

  return (
    <div>
      <Header />
      <main className='relative grid grid-cols-12'>
        <SideNav user={session?.user} />
        <div className='col-start-3 col-span-9'>{children}</div>
      </main>
    </div>
  )
}
export default ProfileLayout
