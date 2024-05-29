import { useState, useEffect } from 'react'
import api from '@/lib/api/WebinarWiseApi'
import { set } from 'react-hook-form'
export const useSubscriptions = (token) => {
  const [subscriptions, setSubscriptions] = useState([])
  const getSubscriptions = async () => {
    try {
      const response = await api.getNotificationsPreferences(token)
      const data = response?.data?.subscribed
      setSubscriptions(data)
    } catch (error) {
      error.response
    }
  }

  useEffect(() => {
    getSubscriptions()
  }, [token])

  return { subscriptions }
}
