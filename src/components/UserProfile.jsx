import Image from 'next/image'
function UserAvatar() {
  return (
    <Image
      alt='avatar'
      src='/avatar.png'
      width={40}
      height={40}
      className='rounded-full'
    />
  )
}
export default UserAvatar
