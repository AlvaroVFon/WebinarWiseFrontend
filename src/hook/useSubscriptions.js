import { useState, useEffect } from 'react'
import api from '@/lib/api/WebinarWiseApi'
export const useSubscriptions = (accessToken) => {
  const [subscriptions, setSubscriptions] = useState([])
  const getSubscriptions = async () => {
    try {
      const response = await api.getNotificationsPreferences(accessToken)
      const data = response?.data?.subscribed
      setSubscriptions(data)
    } catch (error) {
      error.response
    }
  }

  useEffect(() => {
    if (!accessToken) return
    getSubscriptions()
  }, [accessToken])

  return { subscriptions }
}
