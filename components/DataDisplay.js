
import { Transition } from '@headlessui/react'
import { AlertCircle, Loader2 } from 'lucide-react'

export default function DataDisplay({ data, loading, error }) {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <Loader2 size={40} className="text-primary-500 animate-spin mb-4" />
        <p className="text-gray-500">Loading data from server...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
        <AlertCircle size={20} className="text-red-500 mt-0.5 mr-3 flex-shrink-0" />
        <div>
          <h3 className="font-medium text-red-800">Error</h3>
          <p className="text-red-700 mt-1">{error}</p>
        </div>
      </div>
    )
  }

  if (!data) {
    return <p className="text-gray-500 py-8 text-center">No data available</p>
  }

  return (
    <Transition
      show={true}
      appear={true}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
        <div className="grid gap-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">Message:</span>
            <span className="text-gray-800">{data.message}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">Timestamp:</span>
            <span className="text-gray-800">{new Date(data.timestamp).toLocaleString()}</span>
          </div>
          
          {data.count !== undefined && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Request Count:</span>
              <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full font-medium">
                {data.count}
              </span>
            </div>
          )}
        </div>
      </div>
    </Transition>
  )
}
