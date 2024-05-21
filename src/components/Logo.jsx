import { Roboto } from 'next/font/google'
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })
function Logo() {
  return (
    <h1 className={`${roboto.className} text-3xl text-logo font-semibold`}>
      <span className='text-blue-700'>&#60;</span> WebinarWise{' '}
      <span className='text-blue-700'>&#47;&#62; </span>
    </h1>
  )
}
export default Logo
