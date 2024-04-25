import { Roboto } from 'next/font/google'
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700', '900'] })

function CourseCardHeader({ courseId, courseTitle }) {
  return (
    <div className='flex flex-col gap-4'>
      <span className='text-[#525866]'>#23</span>
      <h2 className={`${roboto.className} font-extrabold text-xl`}>
        Esto es el título de un curso cualquiera
      </h2>
    </div>
  )
}
export default CourseCardHeader
