import Image from 'next/image'
function UserAvatar() {
  return (
    <Image
      alt='avatar'
      src='/11.jpg'
      width={40}
      height={40}
      className='rounded-full'
    />
  )
}
export default UserAvatar
