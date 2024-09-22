import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>

      <div className='fixed inset-0 z-0'>
        
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to bg-gray-900 opacity-80' />

        <div className='absolute inset-0 backdrop-blur-sm'/>

      </div>

      <Sidebar />

      <Outlet />

    </div>
  )
}

export default App
