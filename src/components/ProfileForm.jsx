'use client'
import { useForm } from 'react-hook-form'
import styles from '@/styles/form.module.css'
import { useState } from 'react'
import Spinner from './icons/Spinner'
function ProfileForm({ formType }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  return (
    <div className='flex justify-center items-center h-screen'>
      <form
        action=''
        className='flex items-center'
      >
        <div className=''>
          <input
            type='file'
            name='profileImage'
            accept='image/*'
            {...register('profileImage', {
              required: 'This is a required field',
            })}
            className='text-muted'
          />
          <button className={`${styles.btn} mt-5`}>
            {isSubmitting ? (
              <span className='flex items-center gap-3'>
                Uploading
                <Spinner
                  width={25}
                  height={25}
                  color='#597dd8'
                />
              </span>
            ) : (
              'Upload Image'
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
export default ProfileForm
