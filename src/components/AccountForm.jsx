'use client'
import UpdateEmailForm from './UpdateEmailForm'
import UpdatePasswordForm from './UpdatePasswordForm'
function AccountForm() {
  return (
    <div className='flex flex-col gap-32'>
      <UpdateEmailForm />
      <UpdatePasswordForm />
    </div>
  )
}
export default AccountForm
