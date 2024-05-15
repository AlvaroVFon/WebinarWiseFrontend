'use client'
import Button from './Button'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
function EditNameForm() {
  const onSubmit = (data) => {}
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  return (
    <form
      className='grid grid-cols-3 items-center justify-end gap-3 w-full'
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type='text'
        name='name'
        placeholder='Enter your new name'
        className='bg-bgSecondary p-3 rounded-md hover:bg-bgTertiary animation duration-300 w-full col-span-2'
        {...register('name', {
          required: 'This field is required',
          minLength: {
            value: 3,
            message: 'Name must be at least 3 characters',
          },
        })}
      />

      <Button
        isLoading={isSubmitting}
        disabled={errors.name}
        width={44}
        label='Update Name'
        className={`col-start-3`}
      />
      {errors.name && <p className='text-red-400'>{errors.name.message}</p>}
    </form>
  )
}
export default EditNameForm
