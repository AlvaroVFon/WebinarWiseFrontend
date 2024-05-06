import Header from '@/components/Header'
function HomeLayout({ children }) {
  return (
    <div className='min-h-screen relative'>
      <Header />
      <div className='mt-28 z-0'>{children}</div>
    </div>
  )
}
export default HomeLayout
