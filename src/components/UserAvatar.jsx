'use client'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
function UserAvatar({ user }) {
  const pathname = usePathname()
  const session = useSession()
  return (
    <div className='flex flex-col items-center gap-2'>
      <Image
        alt='avatar'
        src={`/avatar.png`}
        width={40}
        height={40}
        className='rounded-full'
      />
      {pathname.includes('/home/profile') && <p className=''>{user?.email}</p>}
    </div>
  )
}
export default UserAvatar
