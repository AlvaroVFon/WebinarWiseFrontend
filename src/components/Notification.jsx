import Image from 'next/image'
import Link from 'next/link'
function Notification({ notification }) {
  return (
    <Link
      href={`/admin/profile/notifications/1`}
      className='grid grid-cols-6 items-center w-72 gap-5 border-y border-muted p-2 hover:bg-bgCuaternary'
    >
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
