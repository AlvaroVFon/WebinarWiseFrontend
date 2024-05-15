'use client'
import Image from 'next/image'
import CourseCardButtons from './CourseCardButtons'
import CourseCardHeader from './CourseCardHeader'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
function CourseCard({ course, isPurchased, isLiked }) {
  const router = useRouter()
  return (
    <article className='bg-bgSecondary rounded-xl w-[285px] h-[414px] p-4 border border-muted hover:border-accent flex flex-col justify-between hover:scale-105 duration-300'>
      <div
        onClick={() => router.push(`/home/courses/${course.id}`)}
        className='cursor-pointer'
      >
        <CourseCardHeader course={course} />
        <div className='flex flex-col items-end gap-4'>
          <Link
            href={`/home/courses?perPage=12&page=1&category=${course.category.id}`}
            onClick={(e) => e.stopPropagation()}
            className='border border-muted text-accentDarker p-1 rounded-md hover:bg-bgTertiary hover:text-accent cursor-pointer duration-300'
          >
            #{course.category?.name}
          </Link>
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
