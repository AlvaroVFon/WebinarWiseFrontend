'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import HeaderNavProfileMenu from './HeaderNavProfileMenu'
function UserAvatar({ user, showUserEmail, disableMenu }) {
  const session = useSession()
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className='flex flex-col items-center gap-2 relative'>
      <Image
        alt='avatar'
        src='/avatar.png'
        width={40}
        height={40}
        className='rounded-full min-w-8 min-h-8 cursor-pointer'
        onMouseOver={() => setShowMenu(true)}
      />
      {showUserEmail && <p className='max-w-[160px]'>{user?.email}</p>}

      <HeaderNavProfileMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        disableMenu={disableMenu}
      />
    </div>
  )
}
export default UserAvatar
