'use client'
import Link from 'next/link'
import { useState } from 'react'
function Notification({ notification, readed }) {
  const [isReaded, setIsReaded] = useState(readed)
  console.log(notification)
  return (
    <Link
      href={`/home/courses/${notification?.data?.course?.id}`}
      className=' w-72 xl:w-[350px] gap-5 border-y border-muted p-2 hover:bg-bgCuaternary relative duration-300 shadow-sm'
      onClick={() => setIsReaded(true)}
    >
      {!isReaded && (
        <div className='col-span-1 h-2 w-2 bg-red-800 rounded-full absolute top-2 right-1'></div>
      )}
      <div className='grid grid-cols-6 gap-3 place-items-center'>
        <h1 className='text-accent text-sm col-span-4'>
          New Course
          <span className='font-bold'> "{notification.data.course.name}"</span>
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
  )
}
export default Notification
