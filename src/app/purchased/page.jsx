'use client'
function PurchasedPage() {
  setTimeout(() => {
    window.location.href = '/home/courses?page=1'
  }, 3000)
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-6'>
      <h1 className='text-4xl'>
        Congratulations, your course have been purchased succesfully
      </h1>
      <p className='text-center text-2xl'>You are being redirected</p>
      <img
        src='/spinner.svg'
        alt=''
      />
    </div>
  )
}
export default PurchasedPage
