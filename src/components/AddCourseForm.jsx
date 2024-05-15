'use client'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '@/components/Button'
import api from '@/lib/api/WebinarWiseApi'
function AddCourseForm({ categories }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const session = useSession() //para proteger la ruta si no es profesor
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    setIsSubmitting(true)
    const course = {
      name: data.title,
      description: data.description,
      category: data.category,
      duration: data.duration * 60,
      price: data.price,
    }
    if (data.category === 'Select a category') {
      setIsSubmitting(false)
      setError('Select a category')
      setTimeout(() => {
        setError(null)
      }, 3000)
      return
    }
    api.postCourse(session?.data?.user?.accessToken, course).then((res) => {
      setIsSubmitting(false)
      reset()
    })
  }
  const inputStyle =
    'bg-bgSecondary p-3 rounded-md hover:bg-bgTertiary animation duration-300 w-full placeholder:text-[#9CA1AB]'
  return (
    <div className=' flex flex-col items-center justify-evenly mt-16'>
      <form
        className='flex flex-col items-end gap-10 w-1/2'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=' w-full'>
          <input
            type='text'
            name='title'
            placeholder='Title'
            className={inputStyle}
            {...register('title', {
              required: {
                value: true,
                message: 'This field is required',
              },
            })}
          />
          {errors.title && (
            <p className='text-red-400'>{errors.title.message}</p>
          )}
        </div>
        <div className=' w-full'>
          <textarea
            name='description'
            id='description'
            placeholder='Description'
            className={inputStyle}
            {...register('description', {
              required: {
                value: true,
                message: 'This field is required',
              },
              minLength: {
                value: 10,
                message: 'Min length is 20 characters',
              },
              maxLength: {
                value: 140,
                message: 'Max length is 140 characters',
              },
            })}
          />
          {errors.description && (
            <p className='text-red-400'>{errors.description.message}</p>
          )}
        </div>
        <div className=' w-full'>
          <select
            name='category'
            id=''
            className={`${inputStyle} `}
            {...register('category', {
              required: {
                value: true,
                message: 'This field is required',
              },
            })}
            required
          >
            <option
              hidden
              selected
              disabled
              className={`bg-bgSecondary p-3 rounded-md hover:bg-bgTertiary animation duration-300 w-full`}
            >
              Select a category
            </option>
            {categories.map((category) => (
              <option
                value={category.id}
                key={category.id}
              >
                {category.name}
              </option>
            ))}
          </select>
          {error && <p className='text-red-400'>{error}</p>}
        </div>
        <div className=' w-full'>
          <input
            type='number'
            name='duration'
            placeholder='Duration in minutes'
            className={inputStyle}
            {...register('duration', {
              required: {
                value: true,
                message: 'This field is required',
              },
            })}
          />
          {errors.duration && (
            <p className='text-red-400'>{errors.duration.message}</p>
          )}
        </div>
        <div className=' w-full'>
          <input
            type='number'
            name='price'
            step={0.01}
            placeholder='Price in EUR'
            className={inputStyle}
            {...register('price', {
              required: {
                value: true,
                message: 'This field is required',
              },
            })}
          />
          {errors.price && (
            <p className='text-red-400'>{errors.price.message}</p>
          )}
        </div>
        <Button
          width={44}
          isLoading={isSubmitting}
        />
      </form>
    </div>
  )
}
export default AddCourseForm
