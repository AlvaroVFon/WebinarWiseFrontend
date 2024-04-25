import Link from 'next/link'
function CourseCardButtons({ numberOfComments, numberOfLikes, courseId }) {
  return (
    <div className='flex justify-evenly'>
      <Link href=''>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='25'
          viewBox='0 0 24 24'
        >
          <path
            fill='#a8b3cf'
            d='M12 23a1 1 0 0 1-1-1v-3H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.1l-3.7 3.71c-.2.19-.45.29-.7.29zm1-6v3.08L16.08 17H21V7H7v10zM3 15H1V3a2 2 0 0 1 2-2h16v2H3z'
          />
        </svg>
      </Link>
      <Link href=''>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-arrow-big-up'
          width='26'
          height='26'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='#a8b3cf'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' />
        </svg>
      </Link>
      <Link href=''>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='25'
          viewBox='0 0 24 24'
        >
          <g
            fill='none'
            stroke='#a8b3cf'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
          >
            <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
            <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
          </g>
        </svg>
      </Link>
    </div>
  )
}
export default CourseCardButtons
