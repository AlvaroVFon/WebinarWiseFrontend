import AddComment from '@/components/AddComment'
import Comment from '@/components/Comment'
import Image from 'next/image'
import axios from 'axios'
async function CursosPage({ params }) {
  const { courseId } = await params
  const course = await axios
    .get(`https://webinarwise-api.onrender.com/api/courses/${courseId}`)
    .then((res) => res.data)

  const category = await axios
    .get(
      `https://webinarwise-api.onrender.com/api/courses/${courseId}/category`
    )
    .then((res) => res.data)
    .catch((err) => err)
  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-10 pb-10'>
      <div className=''>
        <div className=''>
          <h1 className='text-2xl font-bold my-10'>{course.name}</h1>
          <p>{category.name}</p>
        </div>
        <Image
          src='https://placehold.jp/27272A/ffffff/920x600.png'
          width={920}
          height={600}
          alt='img'
          className='rounded-xl'
          layout='responsive'
        />
        <div className='flex justify-end items-center gap-3'>
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
    </div>
  )
}
export default CursosPage
