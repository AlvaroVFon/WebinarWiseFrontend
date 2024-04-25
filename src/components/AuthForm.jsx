'use client'
import styles from '@/styles/form.module.css'
import Link from 'next/link'
import api from '@/lib/api/WebinarWiseApi'
import { useForm } from 'react-hook-form'
function LoginForm({ formType }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onLogin = async (e) => {
    api.login(e.email, e.password).then((res) => console.log(res))
  }
  const onSignup = async (e) => {
    api.register(e.name, e.email, e.password)
  }
  return (
    <form
      className='flex flex-col gap-3 border-t md:border-l md:border-t-0 p-10'
      onSubmit={
        formType === 'login' ? handleSubmit(onLogin) : handleSubmit(onSignup)
      }
    >
      <div className='grid'>
        {formType === 'signup' && (
          <input
            type='text'
            placeholder='name'
            name='name'
            className='bg-transparent bg-[#18181B] p-3 rounded-md hover:bg-zinc-800 animation duration-300'
            {...register('name', {
              required: 'This is a required field',
              minLength: {
                value: 3,
                message: 'Name must be at least 3 characters long',
              },
              maxLength: {
                value: 20,
                message: 'Name must be less than 20 characters long',
              },
            })}
          />
        )}
        {errors.name && (
          <p className='text-red-400 p-2'>{errors.name.message}</p>
        )}
      </div>
      <div className='grid'>
        <input
          type='email'
          placeholder='example@email.com'
          name='email'
          pattern='/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g'
          className='bg-transparent bg-[#18181B] p-3 rounded-md hover:bg-zinc-800 animation duration-300 w-full'
          {...register('email', {
            required: 'This is a required field',
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && (
          <p className='text-red-400 p-2'>{errors.email.message}</p>
        )}
      </div>
      <div className='grid'>
        <div className=''>
          <input
            type='password'
            placeholder='password'
            name='password'
            className='bg-transparent bg-[#18181B] p-3 rounded-md hover:bg-zinc-800 animation duration-300 w-full'
            {...register('password', {
              required: 'This is a required field',
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g,
                message: 'Invalid password',
              },
            })}
          />
        </div>
        {errors.password && (
          <p className='text-red-400  font-thin p-2'>
            {errors.password.message}
          </p>
        )}
      </div>
      <div className='flex flex-col relative'>
        <div className='grid items-center'>
          <button className={`${styles.btn} mt-5`}>
            {formType === 'login' ? 'Login' : 'Sign up'}
          </button>
          <span className={styles.tooltip}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
            >
              <g fill='none' stroke='#ffffff' strokeLinejoin='round'>
                <circle
                  cx='12'
                  cy='12'
                  r='9'
                  strokeLinecap='round'
                  strokeWidth='1.5'
                />
                <path strokeWidth='2.25' d='M12 8h.01v.01H12z' />
                <path strokeLinecap='round' stroke-width='1.5' d='M12 12v4' />
              </g>
            </svg>
          </span>
        </div>
        {formType === 'login' && (
          <p className='mt-3'>
            Don't have an account?{' '}
            <Link
              href='/signup'
              className='text-[#597dd8] hover:text-[#4462cc]'
            >
              Sign up
            </Link>
          </p>
        )}
      </div>
    </form>
  )
}
export default LoginForm
