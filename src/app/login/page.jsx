import AuthForm from '@/components/AuthForm'
import Logo from '@/components/Logo'
function LoginPage() {
  return (
    <div className='min-h-screen flex flex-col md:flex-row justify-center items-center'>
      <Logo />
      <AuthForm formType='login' />
    </div>
  )
}
export default LoginPage
