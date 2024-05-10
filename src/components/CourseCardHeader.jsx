import { Roboto } from 'next/font/google'
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700', '900'] })
function CourseCardHeader({ course }) {
  const date = course.creation_date.split('T')[0].split('-').reverse().join('-')

  const { id, name } = course
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <span className='text-muted'>#{id}</span>
        <p className='text-xs p-1 text-muted'>{date}</p>
      </div>
      <h2
        className={`${roboto.className} font-extrabold text-xl text-primary tracking-tight h-20`}
      >
        {name}
      </h2>
    </div>
  )
}
export default CourseCardHeader
