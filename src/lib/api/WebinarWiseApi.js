import axios from 'axios'
class WebinarWiseApi {
  constructor(API_URL) {
    this.API_URL = API_URL
    this.axiosInstance = axios.create({
      baseURL: API_URL,
    })
  }
  async login(email, password) {
    const response = await this.axiosInstance
      .post('/auth/login', { email, password })
      .catch((error) => {
        console.log(error)
        return error
      })

    console.log(response) //aqui tengo que rescatar el token
    return response.data
  }

  async register(name, email, password) {
    const response = await this.axiosInstance
      .post('/auth/register', {
        name,
        email,
        password,
      })
      .catch((error) => {
        console.log(error)
        return error
      })

    console.log(response)
    return response.data
  }
}
const api = new WebinarWiseApi('https://webinarwise-api.onrender.com/api/')
export default api
