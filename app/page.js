
'use client'

import { useState, useEffect } from 'react'
import { RefreshCw, Server } from 'lucide-react'
import axios from 'axios'
import DataDisplay from '@/components/DataDisplay'
import Header from '@/components/Header'

export default function Home() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/data`)
      setData(response.data)
      setError(null)
    } catch (err) {
      console.error('Error fetching data:', err)
      setError('Failed to fetch data. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        
        <div className="mt-8 bg-white shadow-sm rounded-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <Server size={20} className="text-primary-500" />
              Server Data
            </h2>
            <button 
              onClick={fetchData}
              className="btn btn-primary flex items-center gap-2"
              disabled={loading}
            >
              <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
              Refresh
            </button>
          </div>
          
          <DataDisplay data={data} loading={loading} error={error} />
        </div>
      </div>
    </main>
  )
}
