function CoursePageSkeleton() {
  return (
    <>
      <div className='min-h-screen flex flex-col justify-center items-center gap-10'>
        <div className='bg-accent w-[1000px] p-5 rounded-xl animate-pulse'>
          <div className='flex flex-col imtes-start gap-4 animate-pulse'>
            <div className='title bg-muted h-8 w-[600px] rounded-md animate-pulse '></div>
            <div className='categorie bg-muted h-7 w-36 rounded-md animate-pulse'></div>
            <div className='bg-muted h-[600px] w-[920px] rounded-md animate-pulse'></div>
          </div>
        </div>
        <div className='comment w-[1000px] bg-accent rounded-xl flex flex-col items-start p-3 gap-3'>
          <div className='flex justify-between items-center w-full'>
            <div className='username h-4 w-40 bg-muted rounded-xl animate-pulse'></div>
            <div className='avatar h-14 w-14 bg-muted rounded-full'></div>
          </div>
          <div className='w-[1000px] flex flex-col gap-3'>
            <div className='w-[850px] h-2 bg-muted rounded'></div>
            <div className='w-[850px] h-2 bg-muted rounded'></div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CoursePageSkeleton
