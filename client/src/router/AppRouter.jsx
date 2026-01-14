import React, { useEffect, useState } from 'react'
import {
  Route,
  Routes,
  useLocation,
  Navigate,
} from 'react-router-dom'

import MainPage from '../pages/MainPage'
import EmptyLayout from '../layouts/EmptyLayout'
import MainLayout from '../layouts/MainLayout'

const AppRouter = () => {
  const location = useLocation()
  const [layout, setLayout] = useState(<MainLayout />)

  useEffect(() => {
    let name = location.pathname
    if (name === '/') {
      setLayout(<MainLayout />)
    } else if (name !== '/') {
      setLayout(<EmptyLayout />)
    }
  }, [location.pathname])
  return (
    <Routes>
      <Route path="/" element={layout}>
        <Route index element={<MainPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
