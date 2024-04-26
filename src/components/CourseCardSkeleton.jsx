function CourseCardSkeleton() {
  return (
    <div className='w-[285px] h-[414px] p-4 border rounded-xl bg-[#a8b3cf] animate-pulse flex flex-col justify-between'>
      <div className='h-4 w-4 bg-[#747c90] rounded-md'></div>
      <div className='h-4 bg-[#747c90] rounded-lg mt-2'></div>
      <div className='h-4 w-1/3 bg-[#747c90] rounded-lg'></div>
      <div className='flex gap-1 justify-end'>
        <div className='bg-[#747c90] w-16 h-6 rounded-md'></div>
        <div className='bg-[#747c90] w-16 h-6 rounded-md'></div>
        <div className='bg-[#747c90] w-16 h-6 rounded-md'></div>
      </div>
      <div className='h-2 w-1/3 bg-[#747c90] rounded-lg mt-2'></div>
      <div className='w-full h-[160px] bg-[#747c90] rounded-xl'></div>
      <div className='flex justify-evenly'>
        <div className='bg-[#747c90] w-7 h-7 rounded-md'></div>
        <div className='bg-[#747c90] w-7 h-7 rounded-md'></div>
        <div className='bg-[#747c90] w-7 h-7 rounded-md'></div>
      </div>
    </div>
  )
}
export default CourseCardSkeleton
