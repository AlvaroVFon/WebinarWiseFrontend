'use client'
import { useState } from 'react'
function AddComment() {
  const [counter, setCounter] = useState(140)
  const handleChange = (e) => {
    setCounter(140 - e.target.value.length)
  }
  return (
    <form
      action=''
      className='flex flex-col items-end gap-3'
    >
      <textarea
        name='addComment'
        id='addComment'
        placeholder="What's on your mind?"
        onChange={handleChange}
        className='bg-bgTertiary hover:bg-bgSecondary focus:bg-bgSecondary placeholder:text-muted p-3 border border-muted hover:border-accent h-[100px] lg:w-[920px] rounded-lg resize-none duration-300'
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
