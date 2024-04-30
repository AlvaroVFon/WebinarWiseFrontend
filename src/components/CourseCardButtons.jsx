'use client'
import Link from 'next/link'
import Image from 'next/image'
function CourseCardButtons({ numberOfComments = 12, course }) {
  const { id: courseId, likes = 12 } = course
  return (
    <div className='flex items-center justify-evenly'>
      <Link
        href=''
        className='flex items-center gap-1 hover:bg-[#32353b] rounded-md p-1 duration-300'
      >
        <Image src='/comment.svg' alt='comments' width={25} height={25} />
        <p className='text-sm text-[#a8b3cf] cursor-pointer'>
          {numberOfComments}
        </p>
      </Link>

      <Link
        href=''
        className='flex items-center gap-1 hover:bg-[#32353b] rounded-md p-1 duration-300'
      >
        <Image src='/upvote.svg' alt='upvote' width={25} height={25} />
        <p className='text-sm text-[#a8b3cf] cursor-pointer'>{likes}</p>
      </Link>

      <Link
        href=''
        className='flex items-center gap-1 hover:bg-[#32353b] rounded-md p-1 duration-300'
        onClick={() => {
          {
            navigator.clipboard.writeText(
              `http://localhost:3000/course/${courseId}`
            )
            alert('Link copied to clipboard')
          }
        }}
      >
        <Image src='/link.svg' alt='link' width={25} height={25} />
      </Link>
      <Link
        href=''
        className='flex items-center gap-1 hover:bg-[#32353b] rounded-md p-1 duration-300'
      >
        <Image src='/purchase.svg' alt='purchase' width={25} height={25} />
      </Link>
    </div>
  )
}
export default CourseCardButtons
