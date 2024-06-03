'use client'
import readedNotifications from '@/mocks/readedNotifications'
import Notification from '@/components/Notification'
import NotificationsGrid from '@/components/NotificationsGrid'
import { useNotifications } from '@/hook/useNotifications'
import { useSession } from 'next-auth/react'
function NotificationsPage() {
  const session = useSession()
  const { notifications } = useNotifications(session?.data?.user?.accessToken)

  return (
    <div className='flex flex-col items-center gap-20 mt-6'>
      {/* Unreaded notifications */}
      <div className=''>
        {notifications?.length === 0 && (
          <p className='text-xl text-center'>
            You have not new notifications...
          </p>
        )}
      </div>
      <NotificationsGrid
        title='New notifications'
        show={notifications?.length > 0}
      >
        {notifications?.map((notification, index) => (
          <Notification
            notification={notification}
            key={index}
            readed={notification.readed}
          />
        ))}
      </NotificationsGrid>

      <NotificationsGrid
        title='Readed notifications'
        show={readedNotifications.length > 0}
      >
        {readedNotifications?.map((notification, index) => (
          <Notification
            notification={notification}
            key={index}
            readed={notification.readed}
          />
        ))}
      </NotificationsGrid>
    </div>
  )
}
export default NotificationsPage
