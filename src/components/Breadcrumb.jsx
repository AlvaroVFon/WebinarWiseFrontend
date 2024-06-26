'use client'
import { usePathname, useSearchParams, useParams } from 'next/navigation'
function Breadcrumb({ categories, courses }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = useParams()
  const { courseId } = params
  const categoryId = searchParams.get('category')
  const category = categories?.results.find(
    (category) => category.id === Number(categoryId)
  )
  const courseName = courses?.find(
    (course) => course.id === Number(courseId)
  )?.name

  const crumbs = pathname.split('/').filter(Boolean)

  return (
    <p className='text-accent text-xl ml-14 mt-10'>
      {crumbs.map((crumb, index) => {
        if (crumb !== courseId) return <span key={index}> &#62; {crumb} </span>
      })}
      {categoryId && <span>&#62; {category?.name}</span>}
      {courseName && <span>&#62; {courseName}</span>}
    </p>
  )
}
export default Breadcrumb
