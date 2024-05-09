function CourseCardsCategories({
  categories = ['Frontend', 'Backend', 'FullStack'],
}) {
  return (
    <div className='categories flex justify-end gap-1'>
      {categories.map((category, index) => (
        <div
          key={index}
          className='text-xs text-muted border p-1 rounded-lg border-muted hover:bg-bgTertiary duration-300 hover:text-accent'
        >
          #{category}
        </div>
      ))}
    </div>
  )
}
export default CourseCardsCategories
