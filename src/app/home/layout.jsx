import Header from '@/components/Header'
function HomeLayout({ children }) {
  return (
    <div className='min-h-screen'>
      <Header />
      {children}
    </div>
  )
}
export default HomeLayout
