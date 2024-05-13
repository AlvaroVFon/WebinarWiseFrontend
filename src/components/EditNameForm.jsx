'use client'
import Button from './Button'
import { useState } from 'react'
function EditNameForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(false)
  return (
    <form className='grid grid-cols-3 items-center justify-end gap-3 w-full'>
      <input
        type='text'
        name='name'
        placeholder='Enter your new name'
        className='bg-bgSecondary p-3 rounded-md hover:bg-bgTertiary animation duration-300 w-full col-span-2'
      />
      <Button
        isLoading={isSubmitting}
        disabled={error}
        label='Update Name'
        className={`col-start-3`}
      />
    </form>
  )
}
export default EditNameForm
