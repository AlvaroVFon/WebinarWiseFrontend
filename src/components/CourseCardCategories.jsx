import Link from 'next/link'

function CourseCardsCategories({ categories }) {
  return (
    <div className='categories flex justify-end gap-1'>
      <Link
        href=''
        className='text-xs text-[#525866] border p-1 rounded-lg border-[#525866] hover:bg-[#32353b] duration-300 hover:text-[#a8b3cf]'
      >
        #Frontend
      </Link>
      <Link
        href=''
        className='text-xs text-[#525866] border p-1 rounded-lg border-[#525866] hover:bg-[#32353b] duration-300 hover:text-[#a8b3cf]'
      >
        #Backend
      </Link>
      <Link
        href=''
        className='text-xs text-[#525866] border p-1 rounded-lg border-[#525866] hover:bg-[#32353b] duration-300 hover:text-[#a8b3cf]'
      >
        #Fullstack
      </Link>
    </div>
  )
}
export default CourseCardsCategories
