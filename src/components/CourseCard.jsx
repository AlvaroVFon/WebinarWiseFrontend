import Image from 'next/image'
import CourseCardButtons from './CourseCardButtons'
import CourseCardsCategories from './CourseCardCategories'
import CourseCardHeader from './CourseCardHeader'

function CourseCard({ course }) {
  const { creation_date } = course
  const date = creation_date.split('T')[0].split('-').reverse().join('-')
  return (
    <article className='bg-bgSecondary rounded-xl w-[285px] h-[414px] p-4 border border-muted hover:border-accent flex flex-col justify-between hover:scale-105 duration-300'>
      <CourseCardHeader course={course} />
      <div className='flex flex-col gap-2'>
        <CourseCardsCategories />
        <p className='text-xs p-1 text-muted'>{date}</p>
        <Image
          src='https://placehold.jp/3d4070/ffffff/300x160.png'
          alt='Curso de React'
          width={300}
          height={160}
          className='rounded-xl'
        />
      </div>
      <CourseCardButtons course={course} />
    </article>
  )
}
export default CourseCard
