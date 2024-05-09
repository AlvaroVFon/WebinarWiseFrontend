'use client'
import { useState } from 'react'
import Popup from '@/components/Popup'
import api from '@/lib/api/WebinarWiseApi'
import { useSession } from 'next-auth/react'
import CommentIcon from './icons/CommentIcon'
import CreditCardIcon from './icons/CreditCardIcon'
import UpvoteIcon from './icons/UpvoteIcon'
import LinkIcon from './icons/LinkIcon'
function CourseCardButtons({ course, isPurchased, isLiked }) {
  const { data: session } = useSession()
  const user = session?.user
  const { id: courseId, likes = 12, comments } = course
  const [showPopup, setShowPopup] = useState(false)
  const [showPurhcasePopup, setShowPurchasePopup] = useState(false)
  const [showLikePopup, setShowLikePopup] = useState(false)
  const [likeCount, setLikeCount] = useState(likes)
  const [showIsLiked, setShowIsLiked] = useState(isLiked)
  const [error, setError] = useState('')

  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `http://localhost:3000/home/courses/${courseId}`
    )
    setShowPopup(true)
    setTimeout(() => {
      setShowPopup(false)
    }, 1000)
  }
  const handlePurchase = async () => {
    if (!user) {
      setShowPurchasePopup(true)
      setTimeout(() => {
        setShowPurchasePopup(false)
      }, 2000)
    }
    const response = await api
      .startPurchase(courseId, user?.accessToken)
      .catch((error) => {
        if (error.response.status === 401 && !session) {
          setError('You need to be logged in to purchase a course')
        }
        if (error.response.status === 500) {
          setError('Unexpected error, please try again later')
        }
        return error.response
      })

    if (response.status === 401 || response.status === 500) {
      setShowPurchasePopup(true)
      setTimeout(() => {
        setShowPurchasePopup(false)
      }, 2000)
    }
    if (response.data?.url) {
      window.location.href = `${response.data.url}`
    }
  }
  const handleLike = async () => {
    const response = await api.toggleLike(user?.accessToken, courseId)
    if (response.status === 200) {
      setShowIsLiked(!showIsLiked)
      if (response.data.likes) {
        setLikeCount(Number(likeCount) + 1)
      } else if (!response.data.likes) {
        setLikeCount(Number(likeCount) - 1)
      }
    }
    if (response.status === 401) {
      setError(response.data.msg)
      setShowLikePopup(true)
      setTimeout(() => {
        setShowLikePopup(false)
      }, 2000)
    }
  }
  return (
    <div className='flex items-center justify-evenly'>
      <button className='flex items-center gap-1 hover:bg-bgTertiary rounded-md p-1 duration-300'>
        <CommentIcon color='#a8b3cf' />
        <p className='text-sm text-accent cursor-pointer'>{comments}</p>
      </button>
      {user && (
        <div className='relative'>
          <button
            className='flex items-center gap-1 hover:bg-bgTertiary rounded-md p-1 duration-300'
            onClick={handleLike}
          >
            {showIsLiked ? (
              <UpvoteIcon color='#e879f9' />
            ) : (
              <UpvoteIcon color='#a8b3cf' />
            )}
            <p className='text-sm text-accent cursor-pointer'>{likeCount}</p>
          </button>
          <Popup
            showPopup={showLikePopup}
            message={error}
            className='absolute'
          />
        </div>
      )}
      <div className='relative'>
        <button
          className='flex items-center gap-1 hover:bg-bgTertiary rounded-md p-1 duration-300'
          onClick={handleCopyLink}
        >
          <LinkIcon />
        </button>
        <Popup
          className='absolute'
          showPopup={showPopup}
          message='Link copied to clipboard!'
        />
      </div>

      <div className='relative'>
        <button
          onClick={handlePurchase}
          disabled={isPurchased}
          className='flex items-center gap-1 hover:bg-bgTertiary rounded-md p-1 duration-300'
        >
          {!isPurchased ? (
            <CreditCardIcon />
          ) : (
            <CreditCardIcon color='#4ade80' />
          )}
        </button>
        <Popup
          showPopup={showPurhcasePopup}
          message={error}
          className='absolute'
        />
      </div>
    </div>
  )
}
export default CourseCardButtons
