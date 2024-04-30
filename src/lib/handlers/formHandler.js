import api from '@/lib/api/WebinarWiseApi'
import { redirect } from 'next/navigation'

export const signupHandler = async (e) => {
  const response = await api
    .signup(e.name, e.email, e.password)
    .then((res) => {
      if (res.status === 200) {
        alert('Account created successfully. Please login to continue.')
        redirect('/login')
      }
    })
    .catch((error) => {
      alert('Something went wrong. Please try again later.')
      return error
    })
  return response
}
export const loginHandler = async (e) => {
  const response = await api.login(e.email, e.password).catch((error) => {
    alert('Invalid email or password')
    return error
  })
  console.log(response)
  return response
}
