import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from './Button'
function UpdatePasswordForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    if (data.currentPassword === data.newPassword) {
      setError('New password must be different from the current password')
      setIsSubmitting(false)
      return
    }
    setIsSubmitting(true)
  }

  return (
    <div className=''>
      <form
        className='grid grid-cols-3 gap-3'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='col-span-2'>
          <input
            type='password'
            placeholder='Enter your current password'
            className='bg-bgSecondary p-3 rounded-md hover:bg-bgTertiary animation duration-300 w-full col-span-2'
            {...register('currentPassword', {
              required: 'This field is required',
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g,
                message:
                  'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
              },
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
              maxLength: {
                value: 20,
                message: 'Password must be at most 20 characters long',
              },
            })}
          />
          {errors.currentPassword && (
            <p className='text-red-400 max-w-72'>
              {errors.currentPassword.message}
            </p>
          )}
          <input
            type='password'
            placeholder='Enter your new password'
            className='mt-3 bg-bgSecondary p-3 rounded-md hover:bg-bgTertiary animation duration-300 w-full col-span-2'
            {...register('newPassword', {
              required: 'This field is required',
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g,
                message:
                  'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
              },
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long',
              },
              maxLength: {
                value: 20,
                message: 'Password must be at most 20 characters long',
              },
            })}
          />
        </div>

        <Button
          isLoading={isSubmitting}
          label='Change password'
          width={44}
          disabled={errors.currentPassword || errors.newPassword || error}
        />
        {errors.newPassword && (
          <p className='text-red-400'>{errors.newPassword.message}</p>
        )}
      </form>
      {error && <p className='text-red-400'>{error}</p>}
    </div>
  )
}
export default UpdatePasswordForm
