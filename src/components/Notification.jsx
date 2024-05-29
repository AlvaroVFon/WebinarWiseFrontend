'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
function Notification({ notification, readed }) {
  const [isReaded, setIsReaded] = useState(readed)
  return (
    <Link
      href={`/home/courses/${notification.courseId}`}
      className='grid grid-cols-6 items-center w-72 xl:w-[350px] gap-5 border-y border-muted p-2 hover:bg-bgCuaternary relative duration-300 shadow-sm'
      onClick={() => setIsReaded(true)}
    >
      {!isReaded && (
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
        <div className='flex justify-between items-center'>
          <h1 className='text-accent text-sm max-w-24 text-left'>
            {notification.title}
          </h1>
          <p className='text-xs text-muted'>
            {notification.created_at
              .split('T')[0]
              .split('-')
              .reverse()
              .join('-')}
          </p>
        </div>
        <p className='text-xs font-thin text-primary text-left'>
          {notification.description}
        </p>
      </div>
    </Link>
  )
}
export default Notification
