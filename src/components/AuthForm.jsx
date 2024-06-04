'use client'
import styles from '@/styles/form.module.css'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import api from '@/lib/api/WebinarWiseApi'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import ErrorPopup from './ErrorPopup'
import InfoIcon from './icons/InfoIcon'
import Button from './Button'
import Alert from './Alert'
import { routes } from '@/routes/routes'
function LoginForm({ formType }) {
  const router = useRouter()
  const [error, setError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
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
      router.push(`${routes.courses}?page=1`)
    }
  }
  const onSignupSubmit = async (data) => {
    const response = await api
      .signup(data.name, data.email, data.password)
      .then((res) => {
        res.registered
        if (res) {
          setShowAlert(true)
          setTimeout(() => {
            //FIXME
            router.push(routes.login)
          }, 3000)
        }
      })
      .catch((error) => {
        alert('Something went wrong. Please try again later.')
      })
    return response
  }
  return (
    <div className='flex flex-col items-center'>
      <Alert
        buttonLabel='Continue to login'
        message='Account created succesfully. Please login to continue.'
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        redirectUrl='/login'
      />
      <form
        className='flex flex-col gap-3 md:border-l md:border-t-0 p-10'
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
          <div className='grid items-center justify-end'>
            <Button
              isLoading={isSubmitting}
              label={formType === 'login' ? 'Login' : 'Sign Up'}
              width={64}
            />
          </div>
          {formType === 'login' && (
            <p className='mt-3'>
              Don&apos;t have an account?{' '}
              <Link
                href={routes.signup}
                className='text-blue-500 hover:text-blue-700 duration-300'
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
