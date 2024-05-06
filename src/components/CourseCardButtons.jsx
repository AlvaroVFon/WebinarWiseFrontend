'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Popup from '@/components/Popup'
function CourseCardButtons({ course }) {
  const { id: courseId, likes = 12, comments } = course
  const [showPopup, setShowPopup] = useState(false)
  const handleCopyLink = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(`http://localhost:3000/course/${courseId}`)
    setShowPopup(true)
    setTimeout(() => {
      setShowPopup(false)
    }, 1000)
  }
  const handlePurchase = (e) => {
    e.preventDefault()
  }
  return (
    <div className='flex items-center justify-evenly'>
      <Link
        href=''
        className='flex items-center gap-1 hover:bg-bgTertiary rounded-md p-1 duration-300'
      >
        <Image
          src='/comment.svg'
          alt='comments'
          width={25}
          height={25}
        />
        <p className='text-sm text-accent cursor-pointer'>{comments}</p>
      </Link>

      <Link
        href=''
        className='flex items-center gap-1 hover:bg-bgTertiary rounded-md p-1 duration-300'
      >
        <Image
          src='/upvote.svg'
          alt='upvote'
          width={25}
          height={25}
        />
        <p className='text-sm text-accent cursor-pointer'>{likes}</p>
      </Link>
      <div className='relative'>
        <Link
          href=''
          className='flex items-center gap-1 hover:bg-bgTertiary rounded-md p-1 duration-300'
          onClick={handleCopyLink}
        >
          <Image
            src='/link.svg'
            alt='link'
            width={25}
            height={25}
          />
        </Link>
        <Popup
          className='absolute'
          showPopup={showPopup}
        />
      </div>
      <Link
        href=''
        className='flex items-center gap-1 hover:bg-bgTertiary rounded-md p-1 duration-300'
      >
        <button onClick={handlePurchase}>
          <Image
            src='/purchase.svg'
            alt='purchase'
            width={25}
            height={25}
          />
        </button>
      </Link>
    </div>
  )
}
export default CourseCardButtons
