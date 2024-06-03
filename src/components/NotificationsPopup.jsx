import Notification from './Notification'
function NotificationsPopup({
  notifications,
  showNotificationPopup = true,
  setShowNotificationPopup,
}) {
  return (
    <>
      {showNotificationPopup && (
        <div
          className='absolute top-0 -right-20 sm:right-0  flex flex-col p-3 rounded-lg bg-bgTertiary overflow-y-scroll max-h-60 scrollbar'
          onMouseLeave={() => setShowNotificationPopup(false)}
        >
          {notifications.length === 0 ? (
            <p className='min-w-72'>
              You don&apos;t have any notifications yet. Stay tuned for updates!
            </p>
          ) : (
            notifications?.map((notification, index) => (
              <>
                <Notification
                  key={index}
                  notification={notification}
                  readed={notification.readed}
                />
              </>
            ))
          )}
        </div>
      )}
    </>
  )
}
export default NotificationsPopup
