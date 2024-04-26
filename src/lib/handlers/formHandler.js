import api from '@/lib/api/WebinarWiseApi'

export const signupHandler = async (e) => {
  const response = await api
    .signup(e.name, e.email, e.password)
    .then((res) => console.log(res))
    .catch((error) => {
      alert('Something went wrong. Please try again later.')
      return error
    })
  return response
}
export const loginHandler = async (e) => {
  const response = await api
    .login(e.email, e.password)
    .then((res) => console.log(res))
    .catch((error) => {
      alert('Invalid email or password')
      return error
    })
  return response
}