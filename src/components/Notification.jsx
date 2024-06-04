'use client'
import { useRef } from 'react'
import api from '@/lib/api/WebinarWiseApi'
import { useSession } from 'next-auth/react'
import { dateFormat } from '@/lib/utils/dateFormat'
function Notification({ notification }) {
  const session = useSession()
  const notificationId = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    api
      .setNotificationAsReaded(
        session?.data?.user?.accessToken,
        notificationId.current.value
      )
      .then(
        (window.location.href = `/home/courses/${notification.data.course.id}`)
      )
  }
  return (
    <form
      className=' w-72 xl:w-[350px] gap-5 border-y border-muted p-2 hover:bg-bgCuaternary relative duration-300 shadow-sm'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        hidden
        ref={notificationId}
        value={notification.id}
        readOnly
      />
      <a
        href={`/home/courses/${notification?.data?.course?.id}`}
        type='submit'
        onClick={handleSubmit}
      >
        {!notification.readed && (
          <div className='col-span-1 h-2 w-2 bg-red-800 rounded-full absolute top-2 right-1'></div>
        )}
        <div className='grid grid-cols-6 gap-3 place-items-center'>
          <h1 className='text-accent text-sm col-span-4'>
            New Course
            <span className='font-bold'>
              &quot;{notification.data.course.name}&quot;
            </span>
            Available
          </h1>
          <div className='col-span-2 flex flex-col'>
            <p className='text-xs text-muted'>
              {dateFormat(notification.date)}
            </p>
            <p className='text-xs text-center font-thin text-accent border p-1 rounded border-muted'>
              #{notification.data.category.name}
            </p>
          </div>
        </div>
      </a>
    </form>
  )
}
export default Notification
