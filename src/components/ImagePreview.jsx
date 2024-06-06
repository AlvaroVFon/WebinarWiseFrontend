'use client'
import { routes } from '@/routes/routes'
function ImagePreview({ url, userId, width, height }) {
  return (
    <>
      {url ? (
        <img
          src={url}
          alt='Image Preview'
          width={width}
          height={height}
          className='rounded-full'
        />
      ) : (
        <img
          width={width}
          height={height}
          src={`${routes.thumbnail}${userId}`}
          className='rounded-full'
        />
      )}
    </>
  )
}
export default ImagePreview
