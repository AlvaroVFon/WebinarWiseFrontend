import Avatar from './icons/Avatar'
import Image from 'next/image'
function ImagePreview({ url = '', width, height }) {
  return (
    <>
      {url ? (
        <Image
          src={url}
          alt='Image Preview'
          width={width}
          height={height}
          className='rounded-full'
        />
      ) : (
        <Avatar
          width={width}
          height={height}
        />
      )}
    </>
  )
}
export default ImagePreview
