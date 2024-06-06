'use client'
import Avatar from './icons/Avatar'
import Image from 'next/image'
import { routes } from '@/routes/routes'
function ImagePreview({ url = '', userId, width, height }) {
  return (
    <>
      {url ? (
        <Image
          src={url === '' ? `${routes.thumbnail}${userId}}` : url}
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
