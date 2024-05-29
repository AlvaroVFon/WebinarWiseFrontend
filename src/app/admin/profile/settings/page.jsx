import AccountForm from '@/components/AccountForm'
import api from '@/lib/api/WebinarWiseApi'
import { getServerSession } from 'next-auth'
import NextAuthOptions from '@/app/api/auth/[...nextauth]/NextAuthOptions'
async function SettingsPage() {
  const session = await getServerSession(NextAuthOptions)
  const categories = await api.getCategories().then((res) => res?.results)
  const preferences = await api
    .getNotificationsPreferences(session?.user?.accessToken)
    .then((res) => console.log(res.data))

  return (
    <main className='mt-10 flex justify-center items-center'>
      <AccountForm
        categories={categories}
        preferences={preferences}
      />
    </main>
  )
}
export default SettingsPage
