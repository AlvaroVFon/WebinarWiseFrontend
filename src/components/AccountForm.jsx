'use client'
import DeleteAccount from './DeleteAccount'
import UpdateEmailForm from './UpdateEmailForm'
import UpdatePasswordForm from './UpdatePasswordForm'
function AccountForm() {
  return (
    <div className='flex flex-col gap-32 w-1/2'>
      <UpdateEmailForm />
      <UpdatePasswordForm />
      <DeleteAccount />
    </div>
  )
}
export default AccountForm
