
import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const fetchData = async () => {
  try {
    const response = await apiClient.get('/api/data')
    return response.data
  } catch (error) {
    console.error('API error:', error)
    throw error
  }
}

export default apiClient
