import ImageForm from '@/components/ImageForm'
import EditNameForm from '@/components/EditNameForm'
import { getServerSession } from 'next-auth'
import NextAuthOptions from '@/app/api/auth/[...nextauth]/NextAuthOptions'
async function ProfileEditPage() {
  const session = await getServerSession(NextAuthOptions)
  return (
    <main className='flex justify-center'>
      <div className='mt-10 flex flex-col items-end justify-center w-1/2 gap-32'>
        <ImageForm userId={session.user.id} />
        <EditNameForm />
      </div>
    </main>
  )
}
export default ProfileEditPage
