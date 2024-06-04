import AuthForm from '@/components/AuthForm'
import Logo from '@/components/Logo'
import { getServerSession } from 'next-auth'
import NextAuthOptions from '../api/auth/[...nextauth]/NextAuthOptions'
import { redirect } from 'next/navigation'
import { routes } from '@/routes/routes'
async function LoginPage() {
  const session = await getServerSession(NextAuthOptions)
  if (session) {
    redirect(`${routes.courses}?page=1`)
  }

  return (
    <div className='min-h-screen flex flex-col md:flex-row justify-center items-center'>
      <Logo />
      <AuthForm formType='login' />
    </div>
  )
}
export default LoginPage
