'use client'
import Link from 'next/link'
import Image from 'next/image'
function CourseCardButtons({
  numberOfComments = 12,
  numberOfLikes = 43,
  courseId = 1,
}) {
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
        <p className='text-sm text-[#a8b3cf] cursor-pointer'>{numberOfLikes}</p>
      </Link>

      <Link
        href=''
        className='flex items-center gap-1 hover:bg-[#32353b] rounded-md p-1 duration-300'
        onClick={(e) => {
          {
            navigator.clipboard.writeText(
              `http://localhost:3000/course/${courseId}`
            )
            alert('Link copied to clipboard')
          }
        }}
      >
        <Image src='/link.svg' alt='downvote' width={25} height={25} />
      </Link>
    </div>
  )
}
export default CourseCardButtons