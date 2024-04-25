'use server'
import api from '@/lib/api/WebinarWiseApi'

export const login = async (formData) => {
  const { email, password } = formData
  try {
    const response = await api.login(email, password)
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
