import Image from 'next/image'
import Link from 'next/link'
function CategoryCard({ category }) {
  return (
    <div className='bg-bgSecondary rounded-xl w-[285px] h-[414px] p-4 border border-muted hover:border-accent flex flex-col justify-between hover:scale-105 duration-300 '>
      <h1 className='text-2xl font-bold'>{category.name}</h1>
      <Image
        src={
          category.thumbnaul || 'https://placehold.jp/3d4070/ffffff/300x160.png'
        }
        width={300}
        height={160}
        alt='category img'
        className='rounded-xl'
      />
      <p className='p-1 text-accentDarker'>
        {category.description ||
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga cupiditate quidem ipsa voluptate ducimus omnis eos consectetur ipsam iure aliquam!'}{' '}
      </p>
      <div className='flex justify-end'>
        <Link
          href={`/home/courses?perPage=12&page=1&category=${category.id}`}
          className='text-muted hover:text-accent duration-300'
        >
          View courses...
        </Link>
      </div>
    </div>
  )
}
export default CategoryCard
