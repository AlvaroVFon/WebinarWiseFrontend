function Comment({ username, userRole, commentDate, comment }) {
  return (
    <div className='lg:w-[920px] 4xl:w-[1020px] min-h-[100px] p-5 bg-bgSecondary rounded-lg'>
      <div className='flex justify-between'>
        {username && userRole && (
          <h3 className='font-semibold'>
            @{username} -{' '}
            <span className='font-thin italic'>#{userRole.split('_')[1]}</span>
          </h3>
        )}
        <p className='text-sm text-muted'>
          {commentDate.split('-').reverse().join('-')}
        </p>
      </div>
      <p className='p-3 text-accent'>{comment}</p>
    </div>
  )
}
export default Comment
