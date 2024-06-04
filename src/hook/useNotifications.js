import { useState, useEffect } from 'react'
import api from '@/lib/api/WebinarWiseApi'
export const useNotifications = (accessToken) => {
  const [notifications, setNotifications] = useState([])
  const [readedNotifications, setReadedNotifications] = useState([])
  const [unreadedNotifications, setUnreadedNotifications] = useState([])
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
    if (!accessToken) return
    getNotifications()
  }, [accessToken])

  useEffect(() => {
    if (!accessToken) return
    const readed = notifications.filter((notification) => notification.readed)
    setReadedNotifications(readed)

    const unreaded = notifications.filter(
      (notification) => !notification.readed
    )
    setUnreadedNotifications(unreaded)
  }, [notifications, accessToken])

  return { notifications, readedNotifications, unreadedNotifications }
}
