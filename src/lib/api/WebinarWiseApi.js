import axios from 'axios'
class WebinarWiseApi {
  constructor(API_URL) {
    this.API_URL = API_URL
    this.axiosInstance = axios.create({
      baseURL: API_URL,
    })
  }
  async login(email, password) {
    const response = await this.axiosInstance.post('/auth/login', {
      email,
      password,
    })
    if (response.status === 200) {
      const { token } = response.data
      console.log(token)
      const userInfo = await this.getUserInfo(token)
        .then((data) => {
          console.log(data)
          return data
        })
        .catch((error) => console.log(error))
    }
  }
  async signup(name, email, password) {
    const response = await this.axiosInstance
      .post('/auth/register', {
        name,
        email,
        password,
      })
      .catch((error) => {
        return error
      })

    console.log(response)
    return response.data
  }
  async getUserInfo(token) {
    const response = await this.axiosInstance.post('/auth/info', token)
    return response.data
  }
  async getCourses() {
    const response = await this.axiosInstance
      .get('/courses')
      .then((res) => {
        if (res.status === 200) {
          console.log(res)
          return res.data
        }
      })
      .catch((error) => console.log(error))
    return response
  }
}
const api = new WebinarWiseApi('https://webinarwise-api.onrender.com/api/')
export default api
