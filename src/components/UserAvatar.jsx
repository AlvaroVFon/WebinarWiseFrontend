'use client'
import { useState } from 'react'
import HeaderNavProfileMenu from './HeaderNavProfileMenu'
import { routes } from '@/routes/routes'
function UserAvatar({ user, showUserEmail, disableMenu }) {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className='flex flex-col items-center gap-2 relative'>
      <img
        alt='avatar'
        src={`${routes.thumbnail}${user.id}`}
        width={40}
        height={40}
        className='rounded-full min-w-8 min-h-8 cursor-pointer'
        onMouseOver={() => setShowMenu(true)}
      />
      {showUserEmail && <h2 className='max-w-48 break-words'>{user?.email}</h2>}

      <HeaderNavProfileMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        disableMenu={disableMenu}
      />
    </div>
  )
}
export default UserAvatar
