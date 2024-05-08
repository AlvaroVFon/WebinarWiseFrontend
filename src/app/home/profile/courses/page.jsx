'use client'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import api from '@/lib/api/WebinarWiseApi'
import CourseCard from '@/components/CourseCard'
function ProfileCoursesPage() {
  const { data: session } = useSession()
  const [user, setUser] = useState(null)
  const [courses, setCourses] = useState([])
  useEffect(() => {
    if (session) {
      setUser(session.user)
    }
  }, [session])
  useEffect(() => {
    const getLibrary = async (token) => {
      const response = await api
        .getLibrary(token)
        .then((res) => res.data)
        .catch((error) => error.response)
      return response
    }
    getLibrary(user?.accessToken).then((response) => {
      console.log(response.library)
      setCourses(response.library)
    })
  }, [user])
  return (
    <div className='col-start-4'>
      <h1>My courses</h1>
      {courses && courses?.map((course) => <CourseCard course={course} />)}
    </div>
  )
}
export default ProfileCoursesPage
