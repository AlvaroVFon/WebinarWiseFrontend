'use client'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import HeaderNavProfileMenu from './HeaderNavProfileMenu'
function UserAvatar({ user }) {
  const [showMenu, setShowMenu] = useState(false)
  const pathname = usePathname()
  return (
    <div className='flex flex-col items-center gap-2 relative'>
      <Image
        alt='avatar'
        src={`/avatar.png`}
        width={40}
        height={40}
        className='rounded-full'
        onMouseOver={() => setShowMenu(true)}
      />
      {pathname.includes('/admin/profile') && <p className=''>{user?.email}</p>}

      <HeaderNavProfileMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
    </div>
  )
}
export default UserAvatar
