'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Popup from '@/components/Popup'
import api from '@/lib/api/WebinarWiseApi'
import { useSession } from 'next-auth/react'
function CourseCardButtons({ course }) {
  const { id: courseId, likes = 12, comments } = course
  const [user, setUser] = useState(null)
  const [showPopup, setShowPopup] = useState(false)
  const [showPurhcasePopup, setShowPurchasePopup] = useState(false)
  const { data: session } = useSession()
  useEffect(() => {
    if (session) {
      setUser(session.user)
    }
  }, [session])
  const handleCopyLink = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(`http://localhost:3000/course/${courseId}`)
    setShowPopup(true)
    setTimeout(() => {
      setShowPopup(false)
    }, 1000)
  }
  const handlePurchase = async (e) => {
    e.preventDefault()
    if (!user) {
      setShowPurchasePopup(true)
      setTimeout(() => {
        setShowPurchasePopup(false)
      }, 2000)
    }
    console.log(courseId, user?.accessToken)
    const response = await api.startPurchase(courseId, user?.accessToken)
    if (response.status === 200) {
      console.log('Purchase successful')
    } else {
      console.log('Purchase failed')
    }
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
          message='Link copied to clipboard!'
        />
      </div>
      <Link
        href=''
        className='flex items-center gap-1 hover:bg-bgTertiary rounded-md p-1 duration-300'
      >
        <div className='relative'>
          <button onClick={handlePurchase}>
            <Image
              src='/purchase.svg'
              alt='purchase'
              width={25}
              height={25}
            />
          </button>
          <Popup
            showPopup={showPurhcasePopup}
            message='Login to purchase a course'
            className='absolute'
          />
        </div>
      </Link>
    </div>
  )
}
export default CourseCardButtons
