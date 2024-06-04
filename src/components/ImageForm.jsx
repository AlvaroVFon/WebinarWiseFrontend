'use client'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import ImagePreview from './ImagePreview'
import Button from './Button'
import Alert from './Alert'
import CloseIcon from './icons/CloseIcon'
import api from '@/lib/api/WebinarWiseApi'
import { routes } from '@/routes/routes'
function ImageForm() {
  const session = useSession()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [fileUrl, setFileUrl] = useState(
    `${routes.thumbnail}${session?.data?.user?.id}.png`
  )
  const [alertMessage, setAlertMessage] = useState(null)
  const [showAlert, setShowAlert] = useState(false)
  const [file, setFile] = useState(null)
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
      setFile(e.target.files[0])
      setError(null)
      setFileUrl(URL.createObjectURL(e.target.files[0]))
    }
  }
  const handleClick = () => {
    document.querySelector('input[type="file"]').click()
  }
  const handleUpload = async (formData) => {
    const response = await api.postPicture(
      session?.data?.user?.accessToken,
      formData
    )
    return response
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData()
    if (file) {
      formData.append('file', file)
      handleUpload(formData).then((response) => {
        if (response.error) {
          setError(response.error)
          setIsSubmitting(false)
        }
        if (response.status === 200) {
          setAlertMessage('Image uploaded successfully')
          setShowAlert(true)
          setIsSubmitting(false)
        }
      })
    }
  }
  return (
    <div className='flex flex-col gap-16 justify-center items-center w-full'>
      <Alert
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        message={alertMessage}
        buttonLabel='Close'
        redirectUrl='reload'
      />
      <ImagePreview
        width={100}
        height={100}
        url={fileUrl}
      />
      <form
        className='relative flex flex-col items-center justify-end gap-3 w-full'
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
          onChange={handleChange}
          className='hidden'
        />
        <div className='flex flex-col sm:grid sm:grid-cols-3 gap-3'>
          <input
            type='text'
            name='fileName'
            onClick={handleClick}
            placeholder='Select Image'
            readOnly
            className='bg-bgSecondary p-3 rounded-md hover:bg-bgTertiary animation duration-300 sm:w-full sm:max-w-full col-span-2 cursor-pointer max-w-44'
          />
          <Button
            isLoading={isSubmitting}
            label='Upload Image'
            disabled={error || !file}
            width={44}
            className='col-start-3'
          />
        </div>
        {error && <p className='text-red-400'>{error}</p>}
      </form>
    </div>
  )
}
export default ImageForm
