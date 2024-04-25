import LoginForm from '@/components/LoginForm'
import Image from 'next/image'
import Link from 'next/link'
function LoginPage() {
  return (
    <div className='min-h-screen flex flex-col md:flex-row justify-center items-center'>
      <Link href='/'>
        <Image
          src='/logo-dark.svg'
          width={500}
          height={50}
          alt='logo'
          className='w-64 md:w-[450px] p-5 md:p-10'
        />
      </Link>
      <LoginForm />
    </div>
  )
}
export default LoginPage
