'use client'
import Button from './Button'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
function EditNameForm() {
  const onSubmit = (data) => {
    setIsSubmitting(true)
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  return (
    <form
      className='flex flex-col items-center justify-end gap-3 w-full'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex flex-col sm:grid sm:grid-cols-3 gap-3'>
        <input
          type='text'
          name='name'
          placeholder='New Name'
          className='bg-bgSecondary p-3 rounded-md hover:bg-bgTertiary animation duration-300 sm:w-full sm:max-w-full col-span-2 cursor-pointer max-w-44'
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
      </div>
      {errors.name && <p className='text-red-400'>{errors.name.message}</p>}
    </form>
  )
}
export default EditNameForm
