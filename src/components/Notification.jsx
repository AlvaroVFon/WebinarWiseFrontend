'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Notification({ notification }) {
  const [unread, setUnread] = useState(true) // Add state to manage unread notifications
  return (
    <Link
      href={`/home/courses/${notification.courseId}`}
      className='grid grid-cols-6 items-center w-72 gap-5 border-y border-muted p-2 hover:bg-bgCuaternary relative'
      onMouseEnter={() => setUnread(false)}
    >
      {unread && (
        <div className='col-span-1 h-2 w-2 bg-red-800 rounded-full absolute top-2 right-1'></div>
      )}
      <div className='col-span-2 flex flex-col items-center gap-2'>
        <Image
          src='/avatar.png'
          width={30}
          height={30}
          alt='avatar'
          className='rounded-full h-12 w-12'
        />
        <p className='text-xs'>{notification.author}</p>
      </div>
      <div className='col-span-4'>
        <h1 className='text-accent text-md'>{notification.title}</h1>
        <p className='text-sm font-thin'>{notification.description}</p>
      </div>
    </Link>
  )
}
export default Notification
