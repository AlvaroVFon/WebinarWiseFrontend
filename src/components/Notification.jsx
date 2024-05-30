'use client'
import Link from 'next/link'
import api from '@/lib/api/WebinarWiseApi'
import { useSession } from 'next-auth/react'
function Notification({ notification, readed }) {
  const session = useSession()
  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await api.setNotificationAsReaded(
      session.data.token,
      notification.id
    )
    if (response.status === 200) {
      console.log('Notification readed')
    } else {
      console.log('Error reading notification')
    }
    console.log(response)
  }
  return (
    <form
      onSubmit={handleSubmit}
      className=' w-72 xl:w-[350px] gap-5 border-y border-muted p-2 hover:bg-bgCuaternary relative duration-300 shadow-sm'
    >
      <Link
        href={`/home/courses/${notification?.data?.course?.id}`}
        defaultValue={false}
      >
        {!readed && (
          <div className='col-span-1 h-2 w-2 bg-red-800 rounded-full absolute top-2 right-1'></div>
        )}
        <div className='grid grid-cols-6 gap-3 place-items-center'>
          <h1 className='text-accent text-sm col-span-4'>
            New Course
            <span className='font-bold'>
              {' '}
              "{notification.data.course.name}"
            </span>
            Avaiable
          </h1>
          <div className='col-span-2 flex flex-col'>
            <p className='text-xs text-muted'>
              {notification.date.split('T')[0].split('-').reverse().join('-')}
            </p>
            <p className='text-xs font-thin text-accent border p-1 rounded border-muted'>
              #{notification.data.category.name}
            </p>
          </div>
        </div>
      </Link>
    </form>
  )
}
export default Notification
