import { useSession } from 'next-auth/react'
import { useSubscriptions } from '@/hook/useSubscriptions'
function Preferences() {
  const session = useSession()
  const { subscriptions: preferences } = useSubscriptions(
    session?.data?.user?.accessToken
  )
  return (
    <div className=''>
      <p>Preferences</p>
      {preferences &&
        preferences?.map((preference) => (
          <div key={preference.id}>
            <label htmlFor={preference.id}>
              <input
                type='checkbox'
                value={preference.id}
                name={preference.id}
              />
              {preference.name}
            </label>
          </div>
        ))}
    </div>
  )
}
export default Preferences
