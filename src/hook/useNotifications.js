import { useState, useEffect } from 'react'
import api from '@/lib/api/WebinarWiseApi'
export const useNotifications = () => {
  const [notifications, setNotifications] = useState([])
  const [readedNotifications, setReadedNotifications] = useState([])
  const [preferences, setPreferences] = useState([])
  useEffect(() => {}, [])

  return { notifications, readedNotifications }
}
