import AccountForm from '@/components/AccountForm'
import api from '@/lib/api/WebinarWiseApi'
import { getServerSession } from 'next-auth'
import NextAuthOptions from '@/app/api/auth/[...nextauth]/NextAuthOptions'
async function SettingsPage() {
  const categories = await api.getCategories().then((res) => res?.results)

  return (
    <main className='mt-10 flex justify-center items-center'>
      <AccountForm categories={categories} />
    </main>
  )
}
export default SettingsPage
