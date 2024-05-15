import AddComment from '@/components/AddComment'
import Comment from '@/components/Comment'
import Image from 'next/image'
import api from '@/lib/api/WebinarWiseApi'
import { getServerSession } from 'next-auth'
import NextAuthOptions from '@/app/api/auth/[...nextauth]/NextAuthOptions'
async function CursosPage({ params }) {
  const session = await getServerSession(NextAuthOptions)
  const user = session?.user
  const { courseId } = await params
  const course = await api.getCoursesById(courseId)
  const durationInHours = course.duration / 3600
  const category = await api.getCategoryByCourseId(courseId)
  const comments = await api
    .getCommentsByCourseId(courseId)
    .then((res) => res.comments)
  const isPurchached = session
    ? await api.getLibrary(user.accessToken).then((res) => {
        const response = res.data.library.find(
          (item) => item.id === Number(courseId)
        )
        return response === undefined ? false : true
      })
    : null

  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-10 pb-10'>
      <div className=''>
        <div className='flex flex-col items-start mb-3'>
          <h1 className='text-4xl font-bold my-10'>{course.name}</h1>
          <p className='border p-1 rounded text-accent border-muted'>
            #{category.name}
          </p>
        </div>
        <Image
          src='https://placehold.jp/27272A/ffffff/920x600.png'
          width={920}
          height={600}
          alt='img'
          className='rounded-xl 4xl:w-[1020px] 4xl:h-[700px]'
        />
        <div className='flex justify-end items-center gap-3 text-muted p-3'>
          <p>Duration: {durationInHours} h.</p>
          <p> Upvotes: {course.likes}</p>
        </div>
      </div>
      {user === undefined
        ? null
        : isPurchached && <AddComment course={course} />}
      {comments.length > 0 &&
        comments?.map((comment) => (
          <Comment
            key={comment.id}
            username={comment.user.name}
            comment={comment.text}
            userRole={comment.user.role}
            commentDate={comment.creation_date.split('T')[0]}
          />
        ))}
      {comments.length === 0 && (
        <Comment
          comment='No comments yet. Purchase the course to leave your comment'
          username=''
          userRole=''
          commentDate=''
        />
      )}
    </div>
  )
}
export default CursosPage
