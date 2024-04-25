import Link from 'next/link'

function CourseCardsCategories({ categories }) {
  return (
    <div className='categories flex justify-end gap-1'>
      <Link
        href=''
        className='text-xs text-[#525866] border p-1 rounded-lg border-[#525866]'
      >
        #Frontend
      </Link>
      <Link
        href=''
        className='text-xs text-[#525866] border p-1 rounded-lg border-[#525866]'
      >
        #Backend
      </Link>
      <Link
        href=''
        className='text-xs text-[#525866] border p-1 rounded-lg border-[#525866]'
      >
        #Fullstack
      </Link>
    </div>
  )
}
export default CourseCardsCategories
