import Header from '@/components/Header'

function HomeLayout({ children }) {
  return (
    <div className=''>
      <Header />
      {children}
    </div>
  )
}
export default HomeLayout
