import SideNav from '@/components/SideNav'
import { getServerSession } from 'next-auth'
import NextAuthOptions from '@/app/api/auth/[...nextauth]/NextAuthOptions'
async function ProfileLayout({ children }) {
  const session = await getServerSession(NextAuthOptions)
  return (
    <main className='relative grid grid-cols-12'>
      <SideNav user={session?.user} />
      <div className='col-start-3 col-span-9 relative w-full flex justify-center'>
        {children}
      </div>
    </main>
  )
}
export default ProfileLayout
