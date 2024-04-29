import { Roboto } from 'next/font/google'
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700', '900'] })
import Link from 'next/link'
function CourseCardHeader({
  courseId = 23,
  courseTitle = 'Learn React from cero to hero - 2024',
}) {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <span className='text-[#525866]'>#{courseId}</span>
        <Link
          href={`/home/courses/${courseId}`}
          className='text-sm text-[#525866] hover:text-[#a8b3cf] duration-300'
        >
          View course
        </Link>
      </div>

      <h2 className={`${roboto.className} font-extrabold text-xl`}>
        {courseTitle}
      </h2>
    </div>
  )
}
export default CourseCardHeader
