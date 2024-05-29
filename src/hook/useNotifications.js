import { useState, useEffect } from 'react'
import api from '@/lib/api/WebinarWiseApi'
export const useNotifications = (accessToken) => {
  const [notifications, setNotifications] = useState([])
  const getNotifications = async () => {
    try {
      const response = await api.getNotifications(accessToken)
      const data = response.data.notifications
      setNotifications(data)
      console.log(data)
    } catch (error) {
      error.response
    }
  }
  useEffect(() => {
    getNotifications()
  }, [accessToken])
  return { notifications }
}
