import Image from 'next/image'
import CourseCardButtons from './CourseCardButtons'
import CourseCardsCategories from './CourseCardCategories'
import CourseCardHeader from './CourseCardHeader'

function CourseCard() {
  return (
    <article className='bg-[#1C1F26] rounded-xl w-[285px] h-[414px] p-4 border border-[#525866] hover:border-[#a8b3cf] flex flex-col justify-between'>
      <CourseCardHeader
        courseId={23}
        courseTitle='Esto es el título de un curso cualquiera'
      />
      <div className='flex flex-col gap-2'>
        <CourseCardsCategories categories={''} />
        <p className='text-xs p-1 text-[#525866]'>24 Apr. 2024</p>
        <Image
          src='https://placehold.jp/3d4070/ffffff/300x160.png'
          alt='Curso de React'
          width={300}
          height={160}
          className='w-[300px] h-[160px] object-cover rounded-xl'
        />
      </div>
      <CourseCardButtons />
    </article>
  )
}
export default CourseCard
