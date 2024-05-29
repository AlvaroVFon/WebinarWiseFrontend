import { useState, useEffect } from 'react'
import api from '@/lib/api/WebinarWiseApi'
export const useNotifications = (accessToken) => {
  const [notifications, setNotifications] = useState([])
  const [readedNotifications, setReadedNotifications] = useState([])
  const getNotifications = async () => {
    try {
      const response = await api.getNotifications(accessToken)
      const data = response.data.notifications
      setNotifications(data)
    } catch (error) {
      error.response
    }
  }
  useEffect(() => {
    if (accessToken === undefined) return
    getNotifications()
  }, [accessToken])
  useEffect(() => {
    if (accessToken === undefined) return
    const readed = notifications.filter((notification) => notification.readed)
    setReadedNotifications(readed)
  }, [notifications, accessToken])

  return { notifications, readedNotifications }
}
