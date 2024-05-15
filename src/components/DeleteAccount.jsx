'use client'
import { useState } from 'react'
import Button from './Button'
function DeleteAccount() {
  const [isSunmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    if (e.target[0].value === 'DELETE') {
      setError(null) // delete account
      return
    }
    setError('Please type DELETE to confirm')
    setTimeout(() => {
      setError(null)
    }, 3000)
    setIsSubmitting(false)
  }
  return (
    <div>
      <form
        className='grid grid-cols-3 gap-3'
        onSubmit={handleSubmit}
      >
        <div className='col-span-2 flex flex-col'>
          <input
            type='text'
            name='delete'
            placeholder='Type DELETE to confirm'
            className=' bg-bgSecondary p-3 rounded-md hover:bg-bgTertiary animation duration-300'
          />
        </div>

        <Button
          width={44}
          type='warning'
          isLoading={isSunmitting}
          disabled={error}
        />
      </form>
      {error && <p className='text-red-400'>{error}</p>}
    </div>
  )
}
export default DeleteAccount
