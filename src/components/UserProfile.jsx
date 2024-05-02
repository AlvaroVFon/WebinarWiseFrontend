import Image from 'next/image'
import Link from 'next/link'
function UserAvatar({ user }) {
  return (
    user && (
      <Link href='/profile'>
        <Image
          alt='avatar'
          src={user.profile_pic ?? '/avatar.png'}
          width={40}
          height={40}
          className='rounded-full'
        />
      </Link>
    )
  )
}
export default UserAvatar
