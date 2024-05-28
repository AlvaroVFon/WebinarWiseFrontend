import notifications from '@/mocks/notifications'
import oldNotifications from '@/mocks/oldNotifications'
import Notification from '@/components/Notification'
import NotificationsGrid from '@/components/NotificationsGrid'
async function NotificationsPage() {
  // const readedNotifications = notifications.filter((notification) => notification.readed)
  // const unreadedNotifications = notifications.filter((notification) => !notification.readed)
  return (
    <div className='flex flex-col items-center gap-20 mt-6'>
      {/* Unreaded notifications */}
      <div className=''>
        {notifications.length === 0 && (
          <p className='text-xl text-center'>
            You have not new notifications...
          </p>
        )}
      </div>
      <NotificationsGrid
        title='New notifications'
        show={notifications.length > 0}
      >
        {notifications?.map((notification, index) => (
          <Notification
            notification={notification}
            key={index}
          />
        ))}
      </NotificationsGrid>
      {/* readed notifications */}
      <NotificationsGrid
        title='Readed notifications'
        show={oldNotifications.length > 0}
      >
        {notifications?.map((notification, index) => (
          <Notification
            notification={notification}
            key={index}
          />
        ))}
      </NotificationsGrid>
    </div>
  )
}
export default NotificationsPage
