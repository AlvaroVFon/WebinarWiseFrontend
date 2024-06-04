import SideNav from '@/components/SideNav'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import NextAuthOptions from '@/app/api/auth/[...nextauth]/NextAuthOptions'
import Header from '@/components/Header'
async function ProfileLayout({ children }) {
  const session = await getServerSession(NextAuthOptions)
  if (!session) {
    redirect('/login/error')
  }
  return (
    <div>
      <Header />
      <main className='relative grid grid-cols-12'>
        <SideNav user={session?.user} />
        <div className='lg:col-start-3 col-span-full'>{children}</div>
      </main>
    </div>
  )
}
export default ProfileLayout
