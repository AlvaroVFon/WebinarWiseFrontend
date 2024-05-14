import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Button from './Button'
function UpdateEmailForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    setIsSubmitting(true)
  }
  return (
    <form
      className='grid grid-cols-3 gap-3'
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
        className='col-span-2 bg-bgSecondary p-3 rounded-md hover:bg-bgTertiary animation duration-300'
      />
      <Button
        label='Update email'
        width={44}
        isLoading={isSubmitting}
      />

      {errors.email && <p className='text-red-400'>{errors.email.message}</p>}
    </form>
  )
}
export default UpdateEmailForm
