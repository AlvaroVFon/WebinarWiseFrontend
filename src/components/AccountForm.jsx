'use client'
import DeleteAccount from './DeleteAccount'
import Preferences from './Preferences'
import PreferencesForm from './PreferencesForm'
import UpdateEmailForm from './UpdateEmailForm'
import UpdatePasswordForm from './UpdatePasswordForm'
function AccountForm({ categories, preferences }) {
  return (
    <div className='flex flex-col gap-32 w-1/2'>
      <UpdateEmailForm />
      <UpdatePasswordForm />
      <Preferences preferences={preferences} />
      <PreferencesForm categories={categories} />
      <DeleteAccount />
    </div>
  )
}
export default AccountForm
