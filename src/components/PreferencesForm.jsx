'use client'
import { useState } from 'react'
import Button from './Button'
function PreferencesForm({ categories }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
  }
  const handleChange = (e) => {
    e.preventDefault()
    setFormData([...formData, e.target.value])
  }
  return (
    <div>
      <h1 className='text-accentDarker p-2'>Notification preferences</h1>
      <form
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 gap-2'
        onSubmit={handleSubmit}
      >
        {categories?.map((category) => (
          <label
            htmlFor={category.name}
            className='text-accent flex gap-3 p-2 border border-accent rounded'
            key={category.id}
          >
            <input
              type='checkbox'
              value={category.id}
              name={category.id}
              className='w-5'
              onChange={handleChange}
            />
            #{category.name}
          </label>
        ))}
        <div className='col-span-full flex justify-end'>
          <Button
            label='Save'
            className='min-w-44'
            isLoading={isSubmitting}
          />
        </div>
      </form>
    </div>
  )
}
export default PreferencesForm
