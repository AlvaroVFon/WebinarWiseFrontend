'use client'
function CoursesErrorPage({ error }) {
  return (
    <div className='grid place-items-center min-h-screen'>
      <h1>Error Page</h1>
      <p>{error.message}</p>
    </div>
  )
}
export default CoursesErrorPage
