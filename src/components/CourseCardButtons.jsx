'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Popup from '@/components/Popup'
import api from '@/lib/api/WebinarWiseApi'
import { useSession } from 'next-auth/react'
function CourseCardButtons({ course, purchasedCourses }) {
  const { data: session } = useSession()
  const { id: courseId, likes = 12, comments } = course
  const [user, setUser] = useState(null)
  const [showPopup, setShowPopup] = useState(false)
  const [showPurhcasePopup, setShowPurchasePopup] = useState(false)
  const [showLikePopup, setShowLikePopup] = useState(false)
  const [userLike, setUserLikes] = useState(false)
  const [likeCount, setLikeCount] = useState(likes)
  const [error, setError] = useState('')
  const [isPurchased, setIsPurchased] = useState(false)

  useEffect(() => {
    if (session) {
      setUser(session.user)
    }
  }, [session])

  useEffect(() => {
    purchasedCourses?.forEach((course) => {
      if (course.id === courseId) {
        setUserLikes(true)
      }
    })
  }, [userLike, user])
  useEffect(() => {
    purchasedCourses?.forEach((course) => {
      if (course.id === courseId) {
        setIsPurchased(true)
      }
    })
  }, [])
  const handleCopyLink = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(`http://localhost:3000/courses/${courseId}`)
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
    const response = await api
      .startPurchase(courseId, user?.accessToken)
      .catch((error) => {
        if (error.response.status === 401) {
          setError(error.response.data.msg)
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
  const handleLike = async (e) => {
    e.preventDefault()
    const response = await api.toggleLike(user?.accessToken, courseId)
    if (response.status === 200) {
      console.log(response.data.likes)
      if (response.data.likes) {
        setLikeCount(response.data.likes)
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
      {user && (
        <div className='relative'>
          <Link
            href='#'
            className={
              userLike
                ? 'flex items-center gap-1 bg-bgTertiary rounded-md p-1 duration-300'
                : 'flex items-center gap-1 hover:bg-bgTertiary rounded-md p-1 duration-300'
            }
            onClick={handleLike}
          >
            <Image
              src='/upvote.svg'
              alt='upvote'
              width={25}
              height={25}
            />
            <p className='text-sm text-accent cursor-pointer'>{likeCount}</p>
          </Link>
          <Popup
            showPopup={showLikePopup}
            message={error}
            className='absolute'
          />
        </div>
      )}
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

      <div className='relative'>
        <button
          onClick={handlePurchase}
          disabled={isPurchased}
          className='flex items-center gap-1 hover:bg-bgTertiary rounded-md p-1 duration-300'
        >
          {!isPurchased ? (
            <Image
              src='/purchase.svg'
              alt='purchase'
              width={25}
              height={25}
            />
          ) : (
            <Image
              src='/purchased.svg'
              alt='purchased'
              width={25}
              height={25}
            />
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
