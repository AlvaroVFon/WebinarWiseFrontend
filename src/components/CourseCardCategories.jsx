import Link from 'next/link'

function CourseCardsCategories({
  categories = ['Frontend', 'Backend', 'FullStack'],
}) {
  return (
    <div className='categories flex justify-end gap-1'>
      {categories.map((category, index) => (
        <Link
          key={index}
          href=''
          className='text-xs text-[#525866] border p-1 rounded-lg border-[#525866] hover:bg-[#32353b] duration-300 hover:text-[#a8b3cf]'
        >
          #{category}
        </Link>
      ))}
    </div>
  )
}
export default CourseCardsCategories
