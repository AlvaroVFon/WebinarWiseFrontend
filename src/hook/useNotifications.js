import axios from 'axios'
import { useState, useEffect } from 'react'

export const useNotifications = () => {
  const [notifications, setNotifications] = useState([])
  const [readedNotifications, setReadedNotifications] = useState([])

  useEffect(() => {}, [])
}
