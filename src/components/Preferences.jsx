import { useSession } from 'next-auth/react'
import { useSubscriptions } from '@/hook/useSubscriptions'
import { useState } from 'react'
import Button from './Button'
import api from '@/lib/api/WebinarWiseApi'
function Preferences() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState([])
  const session = useSession()
  const { subscriptions: preferences } = useSubscriptions(
    session?.data?.user?.accessToken
  )
  const handleSubmit = () => {
    setIsSubmitting(true)
    api.setNotificationsPreferences(session.data?.user?.accessToken, formData)
  }
  const handleChange = (e) => {
    setFormData([
      ...formData,
      {
        category: e.target.value,
        subscribed: false,
      },
    ])
  }
  return (
    <>
      {preferences.length > 0 && (
        <form
          onSubmit={handleSubmit}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 gap-2'
        >
          <h2 className='col-span-full text-accentDarker'>
            Your subscriptions
          </h2>
          {preferences &&
            preferences?.map((preference) => (
              <div key={preference.id}>
                <label
                  htmlFor={preference.id}
                  className='text-accent flex gap-3 p-2 border border-accent rounded'
                >
                  <input
                    type='checkbox'
                    value={preference.id}
                    name={preference.id}
                    className='w-5'
                    onChange={handleChange}
                  />
                  {preference.name}
                </label>
              </div>
            ))}
          <div className='col-span-full flex justify-end'>
            <Button
              label='Unsubscribe'
              className='min-w-44'
              isLoading={isSubmitting}
            />
          </div>
        </form>
      )}
    </>
  )
}
export default Preferences
