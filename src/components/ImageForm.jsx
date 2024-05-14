'use client'
import { useState } from 'react'
import ImagePreview from './ImagePreview'
import Button from './Button'
import CloseIcon from './icons/CloseIcon'
function ImageForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileUrl, setFileUrl] = useState(null)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const fileType = e.target.files[0]?.type.split('/')[0]
    const fileName = e.target.files[0]?.name
    document.querySelector('input[name="fileName"]').value = fileName
    if (fileType !== 'image') {
      setError('Please upload an image file')
      return
    }
    if (fileType === 'image') {
      setError(null)
      setFileUrl(URL.createObjectURL(e.target.files[0]))
    }
  }
  const handleClick = () => {
    document.querySelector('input[type="file"]').click()
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
  }
  return (
    <div className='flex flex-col gap-16 justify-center items-center w-full'>
      <ImagePreview
        width={100}
        height={100}
        url={fileUrl}
      />
      <form
        className='relative grid grid-cols-3 items-center justify-end gap-3 w-full'
        onSubmit={handleSubmit}
      >
        {fileUrl && (
          <button
            type='reset'
            className='absolute -left-10'
            onClick={() => {
              setFileUrl(null)
              document.querySelector('input[type="file"]').value = ''
              document.querySelector('form').reset()
            }}
          >
            <CloseIcon
              width={25}
              height={25}
              color='#a8b3cf'
            />
          </button>
        )}
        <input
          type='file'
          name='profileImage'
          accept='image/*'
          required
          onChange={handleChange}
          className='text-muted col-span-2 hidden'
        />
        <input
          type='text'
          name='fileName'
          onClick={handleClick}
          readOnly
          className='bg-bgSecondary p-3 rounded-md hover:bg-bgTertiary animation duration-300 w-full col-span-2 cursor-pointer'
        />
        <Button
          isLoading={isSubmitting}
          label='Upload Image'
          disabled={error}
          width={44}
          className='col-start-3'
        />
        {error && <p className='text-red-400'>{error}</p>}
      </form>
    </div>
  )
}
export default ImageForm
