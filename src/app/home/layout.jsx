import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import api from '@/lib/api/WebinarWiseApi'
import { Suspense } from 'react'
async function HomeLayout({ children }) {
  const categories = await api.getCategories()
  const courses = await api.getCourses('/courses')
  return (
    <div className='relative'>
      <Suspense>
        <Header />
      </Suspense>
      <div>
        <Breadcrumb
          categories={categories}
          courses={courses.results}
        />
        {children}
      </div>
    </div>
  )
}
export default HomeLayout
