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
          className='absolute top-8 -right-20 sm:right-0  flex flex-col p-3 rounded-lg bg-bgTertiary'
          onMouseLeave={() => setShowNotificationPopup(false)}
        >
          {notifications.length === 0 ? (
            <p>No Notifications avaiable</p>
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
