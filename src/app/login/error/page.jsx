'use client'
function LoginErrorPage() {
  setTimeout(() => {
    window.location.href = '/login'
  }, 2000)
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <h1 className='text-3xl text-center text-accent'>
        Invalid Credentials. Redirecting to login page...
      </h1>
    </div>
  )
}
export default LoginErrorPage
