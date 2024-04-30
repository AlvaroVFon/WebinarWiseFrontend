import AddComment from '@/components/AddComment'
import Comment from '@/components/Comment'
import Image from 'next/image'
import axios from 'axios'
import api from '@/lib/api/WebinarWiseApi'
async function CursosPage({ params }) {
  const { courseId } = params
  const url = `https://webinarwise-api.onrender.com/api/courses/${courseId}`
  const course = await axios.get(url)

  const { id, name, description, duration, likes } = course.data

  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-10 pb-10'>
      <div className=''>
        <div className=''>
          <h1 className='text-2xl font-bold my-10'>{name}</h1>
          <p>Categoría</p>
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
          <p>Duration: {duration / 3600}</p>
          <p> Upvotes: {likes}</p>
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
