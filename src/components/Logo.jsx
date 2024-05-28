import { Roboto } from 'next/font/google'
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })
function Logo() {
  return (
    <a
      href='/home/courses?page=1'
      className={`${roboto.className} text-3xl text-logo font-semibold p-3 hidden md:block min-w-72`}
    >
      <span className='text-blue-700'>&#60;</span> WebinarWise{' '}
      <span className='text-blue-700'>&#47;&#62; </span>
    </a>
  )
}
export default Logo
