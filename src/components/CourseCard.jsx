'use client'
import Image from 'next/image'
import CourseCardButtons from './CourseCardButtons'
import CourseCardHeader from './CourseCardHeader'
import { useRouter } from 'next/navigation'
async function CourseCard({ course, isPurchased, isLiked }) {
  const router = useRouter()
  return (
    <article className='bg-bgSecondary rounded-xl w-[285px] h-[414px] p-4 border border-muted hover:border-accent flex flex-col justify-between hover:scale-105 duration-300'>
      <div
        onClick={() => router.push(`/home/courses/${course.id}`)}
        className='cursor-pointer'
      >
        <CourseCardHeader course={course} />
        <div className='flex flex-col items-end gap-4'>
          <p className='border border-muted text-accentDarker p-1 rounded-md'>
            #{course.category?.name}
          </p>
          <Image
            src='https://placehold.jp/3d4070/ffffff/300x160.png'
            alt='Curso de React'
            width={300}
            height={160}
            className='rounded-xl'
          />
        </div>
      </div>
      <CourseCardButtons
        course={course}
        isPurchased={isPurchased}
        isLiked={isLiked}
      />
    </article>
  )
}
export default CourseCard
