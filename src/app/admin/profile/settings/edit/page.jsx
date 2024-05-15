import ImageForm from '@/components/ImageForm'
import EditNameForm from '@/components/EditNameForm'
function ProfileEditPage() {
  return (
    <main className='flex justify-center'>
      <div className='mt-10 flex flex-col items-end justify-center w-1/2 gap-32'>
        <ImageForm />
        <EditNameForm />
      </div>
    </main>
  )
}
export default ProfileEditPage
