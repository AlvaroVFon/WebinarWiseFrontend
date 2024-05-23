function NotificationsGrid({ children, title, show }) {
  return (
    <div>
      <h1 className='text-accent text-lg'>{title}</h1>

      {show && (
        <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 4xl:grid-cols-4  gap-5 overflow-y-scroll max-h-64 scrollbar '>
          {children}
        </div>
      )}
      {!show && (
        <p className='text-xl text-center'>You have not new notifications...</p>
      )}
    </div>
  )
}
export default NotificationsGrid
