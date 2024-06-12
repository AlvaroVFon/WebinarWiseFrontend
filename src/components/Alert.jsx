'use client'
import { useRouter } from 'next/navigation'
import Button from './Button'
function Alert({
  showAlert,
  setShowAlert,
  message,
  buttonLabel,
  redirectUrl = 'reload',
}) {
  const router = useRouter()
  const handleClick = () => {
    setShowAlert(false)
    if (redirectUrl !== 'reload') {
      router.push(redirectUrl)
      return
    }
    window.location.reload()
  }
  return (
    <>
      {showAlert && (
        <div className='fixed top-0 left-0 flex justify-center items-center h-screen w-screen z-50'>
          <dialog className='bg-bgCuaternary text-accent p-4 rounded-md flex flex-col items-center justify-center gap-5 min-h-40'>
            <p>{message}</p>
            <Button
              onClick={handleClick}
              label={buttonLabel}
            ></Button>
          </dialog>
        </div>
      )}
    </>
  )
}
export default Alert
