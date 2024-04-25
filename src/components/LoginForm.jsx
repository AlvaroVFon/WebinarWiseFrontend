import styles from '@/styles/button.module.css'
import Link from 'next/link'
function LoginForm() {
  return (
    <form
      action=''
      className='flex flex-col gap-3 border-t md:border-l md:border-t-0 p-10'
    >
      <input
        type='email'
        placeholder='example@email.com'
        name='email'
        className='bg-transparent bg-[#18181B] p-3 rounded-md hover:bg-zinc-800 animation duration-300'
      />
      <input
        type='password'
        placeholder='Password'
        name='password'
        className='bg-transparent bg-[#18181B] p-3 rounded-md hover:bg-zinc-800 animation duration-300'
      />
      <div className='flex flex-col'>
        <button className={`${styles.btn} mt-5`}>Log in</button>
        <p className='mt-3'>
          Don't have an account?{' '}
          <Link href='/signup' className='text-[#597dd8] hover:text-[#4462cc]'>
            Sign up
          </Link>
        </p>
      </div>
    </form>
  )
}
export default LoginForm
