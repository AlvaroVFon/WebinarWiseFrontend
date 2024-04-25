import AuthForm from '@/components/AuthForm'
import Logo from '@/components/Logo'
function SignupPage() {
  return (
    <div className='min-h-screen flex flex-col md:flex-row justify-center items-center'>
      <Logo />
      <AuthForm formType='signup' />
    </div>
  )
}
export default SignupPage
