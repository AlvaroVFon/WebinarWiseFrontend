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
          className='absolute top-6 -right-20 sm:right-0  flex flex-col p-3 rounded-lg bg-bgTertiary'
          onMouseLeave={() => setShowNotificationPopup(false)}
        >
          {notifications.length === 0 ? (
            <p>
              You don&apos;t have any notifications yet. Stay tuned for updates!
            </p>
          ) : (
            notifications.map((notification) => (
              <Notification
                key={notification.id}
                notification={notification}
              />
            ))
          )}
        </div>
      )}
    </>
  )
}
export default NotificationsPopup
