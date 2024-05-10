'use client'
import styles from '@/styles/form.module.css'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import api from '@/lib/api/WebinarWiseApi'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import ErrorPopup from './ErrorPopup'
import Spinner from './icons/Spinner'
import InfoIcon from './icons/InfoIcon'
function LoginForm({ formType }) {
  const router = useRouter()
  const [error, setError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  setTimeout(() => {
    if (error) setError(null)
  }, 5000)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onLoginSubmit = async (data) => {
    setIsSubmitting(true)
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    })
      .then((res) => {
        setIsSubmitting(false)
        return res
      })
      .finally(() => setIsSubmitting(false))

    if (res.error) {
      setError(res.error)
    } else {
      router.push('/home/courses?page=1')
    }
  }
  const onSignupSubmit = async (data) => {
    const response = await api
      .signup(data.name, data.email, data.password)
      .then((res) => {
        res.registered
        if (res) {
          alert('Account created successfully. Please login to continue.')
          router.push('/login')
        }
      })
      .catch((error) => {
        alert('Something went wrong. Please try again later.')
      })
    return response
  }
  return (
    <div className='flex flex-col items-center'>
      <form
        className='flex flex-col gap-3 border-t md:border-l md:border-t-0 p-10'
        onSubmit={
          formType === 'login'
            ? handleSubmit(onLoginSubmit)
            : handleSubmit(onSignupSubmit)
        }
      >
        <div className='grid'>
          {formType === 'signup' && (
            <input
              type='text'
              placeholder='name'
              name='name'
              className='bg-bgSecondary p-3 rounded-md hover:bg-bgTertiary animation duration-300'
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
            className='bg-bgSecondary p-3 rounded-md hover:bg-bgTertiary animation duration-300 w-full'
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
        <div className=''>
          <input
            type='password'
            placeholder='password'
            name='password'
            className='bg-bgSecondary p-3 rounded-md hover:bg-bgTertiary animation duration-300 w-full'
            {...register('password', {
              required: 'This is a required field',
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g,
                message: 'Invalid password',
              },
            })}
          />

          {errors.password && (
            <div className='relative'>
              <p className='text-red-400  font-thin p-2'>
                {errors.password.message}
              </p>
              <span className={styles.tooltip}>
                <InfoIcon />
              </span>
            </div>
          )}
        </div>
        <div className='flex flex-col'>
          <div className='grid items-center'>
            <button className={`${styles.btn} mt-5 flex justify-center gap-5`}>
              {formType === 'login' ? 'Login' : 'Sign up'}
              {isSubmitting && (
                <Spinner
                  width={25}
                  height={25}
                  color='#597dd8'
                />
              )}
            </button>
          </div>
          {formType === 'login' && (
            <p className='mt-3'>
              Don&apos;t have an account?{' '}
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
      {error !== null && <ErrorPopup message='Invalid Credentials' />}
    </div>
  )
}
export default LoginForm
