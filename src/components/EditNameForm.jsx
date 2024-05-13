'use client'
import Button from './Button'
import { useState } from 'react'
function EditNameForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(false)
  return (
    <form className='flex items-center justify-between gap-3 w-full'>
      <input
        type='text'
        name='name'
        placeholder='Enter your new name'
        className='bg-bgSecondary p-3 rounded-md hover:bg-bgTertiary animation duration-300 w-full'
      />
      <Button
        isLoading={isSubmitting}
        disabled={error}
      />
    </form>
  )
}
export default EditNameForm
