import AddComment from '@/components/AddComment'
function CursosPage() {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-3'>
      <div className=''>
        <h1 className='text-2xl font-bold mb-10'>
          This is a course page. It should display the course content and
          comments
        </h1>
        <div className='w-[920px] h-[600px] bg-zinc-800 rounded-lg'></div>
      </div>
      <AddComment />
    </div>
  )
}
export default CursosPage
