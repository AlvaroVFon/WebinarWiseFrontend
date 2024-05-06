import AddComment from '@/components/AddComment'
import Comment from '@/components/Comment'
import Image from 'next/image'
import api from '@/lib/api/WebinarWiseApi'
async function CursosPage({ params }) {
  const { courseId } = await params
  const course = await api.getCoursesById(courseId)
  const category = await api.getCategoryByCourseId(courseId)
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
          className='rounded-xl'
          layout='responsive'
        />
        <div className='flex justify-end items-center gap-3 text-muted p-3'>
          <p>Duration: 1500 h.</p>
          <p> Upvotes: 18</p>
        </div>
      </div>
      <AddComment />
      <Comment comment='"Increíble curso de programación, ¡aprendí más en unas semanas que en años intentando por mi cuenta!"' />
      <Comment
        username='CoderPro92'
        comment='"Me encantó el curso, muy bien explicado y fácil de seguir. ¡Gracias!"'
      />
      <Comment
        username='FinanceWhiz123'
        comment='"No me gustó el curso, no lo recomendaría a nadie."'
      />
      {/* {comments.map((comment) => (
        <Comment
          key={comment.id}
          username={comment.username}
          comment={comment.comment}
        />
      ))} */}
    </div>
  )
}
export default CursosPage
