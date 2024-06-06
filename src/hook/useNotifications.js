import { useState, useEffect } from 'react'
import api from '@/lib/api/WebinarWiseApi'
export const useNotifications = (accessToken) => {
  const [notifications, setNotifications] = useState([])
  const [readedNotifications, setReadedNotifications] = useState([])
  const [unreadedNotifications, setUnreadedNotifications] = useState([])
  const [page, setPage] = useState(1)
  const getNotifications = async () => {
    try {
      const response = await api.getNotifications(accessToken, page)
      const data = response.data.notifications
      setNotifications(notifications.concat(data))
    } catch (error) {
      error.response
    }
  }
  const sortNotifications = (notifications) => {
    return notifications.sort((a, b) => b.id - a.id)
  }
  useEffect(() => {
    if (!accessToken) return
    getNotifications()
  }, [accessToken, page])

  useEffect(() => {
    if (!accessToken) return
    setReadedNotifications(
      notifications.filter((notification) => notification.readed)
    )
    setUnreadedNotifications(
      notifications.filter((notification) => !notification.readed)
    )
  }, [notifications, accessToken])

  const NextPage = () => {
    setPage(Number(page) + 1)
  }

  return {
    notifications,
    readedNotifications,
    unreadedNotifications,
    NextPage,
    currentPage: page,
  }
}
