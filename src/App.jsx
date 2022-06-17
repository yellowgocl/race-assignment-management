import { useState, Suspense } from 'react'
import Header from '@/components/Header'
import Loading from '@/components/Loading'
import Landing from '@/pages/Landing'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Suspense fallback={<Loading />}>
      <div className="h-screen bg-white shadow overflow-hidden sm:rounded-lg">
        <Header></Header>
        <Landing></Landing>
      </div>
    </Suspense>
  )
}

export default App
