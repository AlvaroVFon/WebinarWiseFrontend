'use client'
import { useState } from 'react'
import Button from './Button'
function PreferencesForm({ categories }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    console.log(formData)
  }
  const handleChange = (e) => {
    e.preventDefault()
    setFormData([...formData, e.target.value])
  }
  return (
    <>
      <h1 className='col-span-full text-xl text-accent'>
        Tell us your preferences...
      </h1>
      <form
        className='col-span-full grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'
        onSubmit={handleSubmit}
      >
        {categories.map((category) => (
          <label
            htmlFor={category.name}
            className='text-accent flex gap-3 p-3 border border-accent rounded m-2'
            key={category.id}
          >
            <input
              type='checkbox'
              value={category.id}
              name={category.id}
              className='w-5 '
              onChange={handleChange}
            />
            #{category.name}
          </label>
        ))}
        <div className='col-span-full flex justify-end p-2'>
          <Button
            label='Save'
            className='w-32 h-10'
            isLoading={isSubmitting}
          />
        </div>
      </form>
    </>
  )
}
export default PreferencesForm
