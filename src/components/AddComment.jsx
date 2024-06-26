'use client'
import { useState, useEffect } from 'react'
import api from '@/lib/api/WebinarWiseApi'
import { useSession } from 'next-auth/react'
function AddComment({ course }) {
  const { data: session } = useSession()
  const [counter, setCounter] = useState(140)
  const [comment, setComment] = useState('')
  const [user, setUser] = useState(null)
  useEffect(() => {
    if (session) {
      setUser(session.user)
    }
  }, [session])
  const handleChange = (e) => {
    setCounter(140 - e.target.value.length)
    setComment(e.target.value)
  }
  const handleComment = async (e) => {
    e.preventDefault()
    const response = await api
      .postComment(course.id, user?.accessToken, comment)
      .then((res) => window.location.reload())
  }
  return (
    <form
      onSubmit={handleComment}
      className='flex flex-col items-end gap-3'
    >
      <textarea
        name='addComment'
        id='addComment'
        placeholder="What's on your mind?"
        onChange={handleChange}
        className='bg-bgTertiary hover:bg-bgSecondary focus:bg-bgSecondary placeholder:text-muted p-3 border border-muted hover:border-accent h-[100px] min-w-[300px] sm:w-[500px] md:w-[700px] lg:w-[920px] 4xl:w-[1020px] rounded-lg resize-none duration-300'
        maxLength={140}
      />
      <div className='flex justify-between w-full'>
        <p className='text-sm text-muted p-1'>Characters left: {counter}</p>
        <button className='p-2 border border-muted text-muted rounded-lg hover:border-accent hover:text-accent duration-300'>
          Submit
        </button>
      </div>
    </form>
  )
}
export default AddComment
