import Image from 'next/image'
import Link from 'next/link'
function UserAvatar({ user }) {
  return (
    <Image
      alt='avatar'
      src={`/avatar.png`}
      width={40}
      height={40}
      className='rounded-full'
    />
  )
}
export default UserAvatar
