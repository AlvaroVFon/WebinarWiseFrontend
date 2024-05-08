function Comment({
  username = 'John Doe',
  userRole = 'estudiante',
  comment = `     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia qui
repudiandae doloribus tenetur praesentium. Itaque fugiat neque modi
doloribus facilis laborum porro iure, libero numquam, tenetur error,
quae veniam nulla quibusdam. Vero, veritatis non voluptas nobis
inventore facilis exercitationem, id illo dolore consequuntur fuga harum
maxime accusantium aliquam amet repellendus debitis eos, odio hic animi!
Ratione velit itaque modi ex temporibus consequatur a! Totam, hic`,
  commentDate = '2021-09-01',
}) {
  return (
    <div className='lg:w-[920px] min-h-[100px] p-5 bg-bgSecondary rounded-lg'>
      <div className='flex justify-between'>
        <h3 className='font-semibold'>
          @{username} -{' '}
          <span className='font-thin italic'>#{userRole.split('_')[1]}</span>
        </h3>
        <p className='text-sm text-muted'>
          {commentDate.split('-').reverse().join('-')}
        </p>
      </div>
      <p className='p-3'>{comment}</p>
    </div>
  )
}
export default Comment
