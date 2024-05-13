import ImageForm from '@/components/ImageForm'
import EditNameForm from '@/components/EditNameForm'
function ProfileEditPage() {
  return (
    <main className='flex justify-center'>
      <div className='min-h-[50vh] flex flex-col items-end justify-evenly w-1/2'>
        <ImageForm />
        <EditNameForm />
      </div>
    </main>
  )
}
export default ProfileEditPage
