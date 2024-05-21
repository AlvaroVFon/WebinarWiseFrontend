'use client'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import Button from './Button'
function UpdateEmailForm() {
  const session = useSession()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    if (data.email === session.data.user.email) {
      setError('New email must be different from the current email')
      return
    }
    setIsSubmitting(true)
  }
  return (
    <div className=''>
      <form
        className='flex flex-col md:grid md:grid-cols-3 gap-3'
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type='email'
          name='email'
          placeholder='Enter your new email'
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: 'Invalid email address',
            },
          })}
          className='col-span-2 bg-bgSecondary p-3 rounded-md hover:bg-bgTertiary animation duration-300 min-w-44'
        />
        <Button
          label='Update email'
          isLoading={isSubmitting}
          disabled={errors.email || error}
          className={'min-w-44'}
        />

        {errors.email && <p className='text-red-400'>{errors.email.message}</p>}
      </form>
      {error && <p className='text-red-400'>{error}</p>}
    </div>
  )
}
export default UpdateEmailForm
