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
  async getCourses(url, token) {
    const response = await this.axiosInstance
      .get(url, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          return res.data
        }
      })
      .catch((error) => error.response)
    return response
  }
  async postCourse(token, course) {
    const response = await this.axiosInstance
      .post('/courses', course, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .catch((error) => error.response)
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
  async postComment(courseId, token, comment) {
    const response = await this.axiosInstance
      .post(
        `/courses/${courseId}/comments`,
        {
          text: comment,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .catch((error) => error.response)

    return response
  }
  async startPurchase(courseId, token) {
    const response = this.axiosInstance
      .get(`/library/${courseId}/checkout`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .catch((error) => {
        if (error.response.status === 401) {
          return { error: 'You need to be logged in to purchase a course' }
        }
        if (error.response.status === 500) {
          return { error: 'Unexpected error, please try again later' }
        }
      })
    return response
  }
  async getLibrary(token) {
    const response = await this.axiosInstance
      .get('/library', {
        headers: {
          Authorization: `${token}`,
        },
      })
      .catch((error) => error.response)
    return response
  }
  async toggleLike(token, courseId) {
    const response = await this.axiosInstance
      .post(`/courses/${courseId}/like`, null, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .catch((error) => {
        if (error.response.status === 401) {
          return { error: 'You need to be logged in to like a course' }
        } else if (error.response.status === 500) {
          return { error: 'Unexpected error, please try again later' }
        }
      })
    return response
  }
  async getLikedCourses(token, courseId) {
    const response = this.axiosInstance.get(`/courses/${courseId}/like`, {
      headers: {
        Authorization: `${token}`,
      },
    })
    return response
  }
}
const api = new WebinarWiseApi('https://webinarwise-api.onrender.com/api/')
export default api
