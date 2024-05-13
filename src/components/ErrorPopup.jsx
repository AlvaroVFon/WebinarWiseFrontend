import { useState } from 'react'
function ErrorPopup({ message, timeout }) {
  const [show, setShow] = useState(true)
  if (timeout)
    setTimeout(() => {
      setShow(false)
    }, timeout)
  return (
    <>
      {show && (
        <p className='bg-red-400 text-sm text-center p-3 rounded'>{message}</p>
      )}
    </>
  )
}
export default ErrorPopup
