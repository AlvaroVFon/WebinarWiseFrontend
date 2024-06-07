import Notification from './Notification'
function NotificationsGrid({
  title,
  show,
  notifications,
  NextPage,
  currentPage,
  totalPages,
}) {
  return (
    <>
      {show && (
        <>
          <h1 className='text-accent text-lg'>{title}</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 4xl:grid-cols-4 place-items-center  gap-5 overflow-y-scroll max-h-64 scrollbar '>
            {notifications?.map((notification) => (
              <Notification
                notification={notification}
                key={notification.id}
              />
            ))}
            {currentPage !== totalPages && (
              <button
                onClick={NextPage}
                className='col-span-full text-xs text-accentDarker p-1 hover:text-accent'
              >
                Show more...
              </button>
            )}
          </div>
        </>
      )}
    </>
  )
}
export default NotificationsGrid
