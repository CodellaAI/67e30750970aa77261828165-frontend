
import { Globe } from 'lucide-react'

export default function Header() {
  return (
    <header className="py-6">
      <div className="flex items-center justify-center">
        <div className="bg-gradient-to-r from-primary-600 to-primary-400 p-3 rounded-full shadow-lg">
          <Globe size={28} className="text-white" />
        </div>
        <h1 className="text-3xl font-bold ml-3 bg-gradient-to-r from-primary-600 to-primary-400 text-transparent bg-clip-text">
          Simple Fullstack App
        </h1>
      </div>
      <p className="text-gray-500 text-center mt-3 max-w-xl mx-auto">
        A minimalist application demonstrating frontend and backend integration with NextJS and Express
      </p>
    </header>
  )
}
