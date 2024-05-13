'use client'
import { useState } from 'react'
import ImagePreview from './ImagePreview'
import Button from './Button'
function ImageForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileUrl, setFileUrl] = useState(null)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const fileType = e.target.files[0].type.split('/')[0]
    if (fileType !== 'image') {
      setError('Please upload an image file')
      return
    }
    if (fileType === 'image') {
      setError(null)
      setFileUrl(URL.createObjectURL(e.target.files[0]))
    }
  }

  const handleSubmit = (e) => {}
  return (
    <div className='flex flex-col gap-16 justify-center items-center w-full'>
      <ImagePreview
        width={100}
        height={100}
        url={fileUrl}
      />
      <form
        className='grid grid-cols-3 items-center justify-end gap-3 w-full'
        onSubmit={handleSubmit}
      >
        <input
          type='file'
          name='profileImage'
          accept='image/*'
          required
          onChange={handleChange}
          className='text-muted col-span-2'
        />
        <Button
          isLoading={isSubmitting}
          label='Upload Image'
          disabled={error}
          className='col-start-3'
        />
        {error && <p className='text-red-400'>{error}</p>}
      </form>
    </div>
  )
}
export default ImageForm
