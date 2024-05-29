'use client'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import Button from './Button'
import api from '@/lib/api/WebinarWiseApi'
import Alert from './Alert'

function PreferencesForm({ categories }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState([])
  const [showAlert, setShowAlert] = useState(false)
  const session = useSession()
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    api
      .setNotificationsPreferences(session.data?.user?.accessToken, formData)
      .then(setShowAlert(true))
  }
  const handleChange = (e) => {
    setFormData([
      ...formData,
      {
        category: e.target.value,
        subscribed: true,
      },
    ])
  }
  return (
    <div>
      <Alert
        message='Preferences saved succesfully'
        showAlert={showAlert}
        setShowAlert={setShowAlert}
      />
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
            label='Subscribe'
            className='min-w-44'
            isLoading={isSubmitting}
          />
        </div>
      </form>
    </div>
  )
}
export default PreferencesForm
