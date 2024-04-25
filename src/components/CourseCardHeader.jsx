import { Roboto } from 'next/font/google'
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700', '900'] })

function CourseCardHeader({
  courseId = 23,
  courseTitle = 'Learn React from cero to hero - 2024',
}) {
  return (
    <div className='flex flex-col gap-4'>
      <span className='text-[#525866]'>#{courseId}</span>
      <h2 className={`${roboto.className} font-extrabold text-xl`}>
        {courseTitle}
      </h2>
    </div>
  )
}
export default CourseCardHeader
