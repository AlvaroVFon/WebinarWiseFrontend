'use client'
import Notification from '@/components/Notification'
import NotificationsGrid from '@/components/NotificationsGrid'
import { useNotifications } from '@/hook/useNotifications'
import { useSession } from 'next-auth/react'
function NotificationsPage() {
  const session = useSession()
  const { unreadedNotifications, readedNotifications } = useNotifications(
    session?.data?.user?.accessToken
  )
  return (
    <div className='flex flex-col items-center gap-20 mt-6'>
      {/* Unreaded notifications */}
      <div className=''>
        {unreadedNotifications?.length === 0 && (
          <p className='text-xl text-center'>
            You have not new notifications...
          </p>
        )}
      </div>
      <NotificationsGrid
        title='New notifications'
        show={unreadedNotifications?.length > 0}
        notifications={unreadedNotifications}
      />

      <NotificationsGrid
        title='Readed notifications'
        show={readedNotifications.length > 0}
        notifications={readedNotifications}
      />
    </div>
  )
}
export default NotificationsPage
