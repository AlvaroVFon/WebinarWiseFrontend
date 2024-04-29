function AddComment() {
  return (
    <form action='' className='flex flex-col items-end gap-3'>
      <textarea
        name='addComment'
        id='addComment'
        className='bg-zinc-800 hover:bg-[#212328] focus:bg-[#212328] border border-[#525866] hover:border-[#a8b3cf] h-[100px] w-[920px] rounded-lg resize-none duration-300'
      />
      <button className='p-2 border border-[#525866] text-[#525866] rounded-lg hover:border-[#a8b3cf] hover:text-[#a8b3cf] duration-300'>
        Submit
      </button>
    </form>
  )
}
export default AddComment
