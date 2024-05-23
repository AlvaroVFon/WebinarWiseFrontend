import notifications from '@/lib/utils/notifications'
import oldNotifications from '@/lib/utils/oldNotifications'
import Notification from '@/components/Notification'
async function NotificationsPage() {
  // const readedNotifications = notifications.filter((notification) => notification.readed)
  // const unreadedNotifications = notifications.filter((notification) => !notification.readed)
  return (
    <div className='flex flex-col gap-10 mt-6'>
      {/* Unreaded notifications */}
      <div className=''>
        {notifications.length === 0 && (
          <p className='text-xl text-center'>
            You have not new notifications...
          </p>
        )}
      </div>
      {notifications.length > 0 && (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 overflow-y-scroll max-h-64 scrollbar'>
          <h2 className='text-lg md:col-span-2 xl:col-span-3 text-accent'>
            New notifications
          </h2>
          {notifications?.map((notification) => (
            <Notification notification={notification} />
          ))}
        </div>
      )}
      {/* readed notifications */}
      <h2 className='text-lg text-accent'>Old notifications</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 overflow-y-scroll max-h-64 scrollbar'>
        {oldNotifications?.map((oldNotification) => (
          <Notification notification={oldNotification} />
        ))}
      </div>
    </div>
  )
}
export default NotificationsPage
