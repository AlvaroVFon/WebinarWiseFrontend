'use client'
import styles from '@/styles/form.module.css'
import { useState } from 'react'
import Spinner from './icons/Spinner'
import ImagePreview from './ImagePreview'
import ErrorPopup from './ErrorPopup'
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
    <div className='flex gap-16 justify-center items-center'>
      <ImagePreview
        width={100}
        height={100}
        url={fileUrl}
      />
      <form
        className='flex gap-8 items-center'
        onSubmit={handleSubmit}
      >
        <input
          type='file'
          name='profileImage'
          accept='image/*'
          required
          onChange={handleChange}
          className='text-muted'
        />
        <button
          className={`${styles.btn}`}
          disabled={error}
        >
          {isSubmitting ? (
            <span className='flex items-center gap-3'>
              Uploading
              <Spinner
                width={25}
                height={25}
                color='#597dd8'
              />
            </span>
          ) : (
            'Upload Image'
          )}
        </button>
      </form>
      {error && <ErrorPopup message={error} />}
    </div>
  )
}
export default ImageForm
