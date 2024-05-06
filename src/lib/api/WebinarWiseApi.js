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
    return response
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

    return response.data
  }
  async getUserInfo(token) {
    const response = await this.axiosInstance.get('/auth/info', {
      headers: {
        Authorization: `${token}`,
      },
    })
    return response
  }
  async getCourses(url) {
    const response = await this.axiosInstance
      .get(url)
      .then((res) => {
        if (res.status === 200) {
          return res.data
        }
      })
      .catch((error) => error)
    return response
  }
  async getCoursesById(id) {
    const response = await this.axiosInstance
      .get(`/courses/${id}`)
      .then((res) => {
        if (res.status === 200) {
          return res.data
        }
      })
      .catch((error) => error)
    return response
  }
  async getCategoryByCourseId(id) {
    const response = await this.axiosInstance
      .get(`/courses/${id}/category`)
      .then((res) => {
        if (res.status === 200) {
          return res.data
        }
      })

    return response
  }
  async getCommentsByCourseId(id) {
    const response = await this.axiosInstance
      .get(`/courses/${id}/comments`)
      .then((res) => {
        if (res.status === 200) {
          return res.data
        }
      })
      .catch((error) => error)
    return response
  }
  async getCategories() {
    const response = await this.axiosInstance
      .get('/category')
      .catch((error) => error)
    return response.data
  }
}
const api = new WebinarWiseApi('https://webinarwise-api.onrender.com/api/')
export default api
