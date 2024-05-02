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
          className='text-xs text-muted border p-1 rounded-lg border-muted hover:bg-bgTertiary duration-300 hover:text-accent'
        >
          #{category}
        </Link>
      ))}
    </div>
  )
}
export default CourseCardsCategories
