import SideNav from '@/components/SideNav'
import { getServerSession } from 'next-auth'
import NextAuthOptions from '@/app/api/auth/[...nextauth]/NextAuthOptions'
import Header from '@/components/Header'
async function ProfileLayout({ children }) {
  const session = await getServerSession(NextAuthOptions)

  return (
    <>
      <Header />
      <main className='relative grid grid-cols-12'>
        <SideNav user={session?.user} />
        <div className='col-start-3'>{children}</div>
      </main>
    </>
  )
}
export default ProfileLayout
