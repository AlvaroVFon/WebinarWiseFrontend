import { Roboto } from 'next/font/google'
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700', '900'] })
import Link from 'next/link'
function CourseCardHeader({ course }) {
  const { id, name } = course
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <span className='text-muted'>#{id}</span>
        <Link
          href={`/home/courses/${id}`}
          className='text-sm text-muted hover:text-accent duration-300'
        >
          View course
        </Link>
      </div>
      <h2 className={`${roboto.className} font-extrabold text-xl text-primary`}>
        {name}
      </h2>
    </div>
  )
}
export default CourseCardHeader
