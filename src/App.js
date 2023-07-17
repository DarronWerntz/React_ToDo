import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ToDos from './components/ToDos/ToDos'
import Login from './components/Auth/Login'
import Categories from './components/Categories/Categories'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import AuthProvider from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Logout from './components/Auth/Logout'

export default function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Navigation/>
          <Routes>
            <Route path='/' element={<ProtectedRoute><ToDos /></ProtectedRoute>} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/todos' element={<ProtectedRoute><ToDos /></ProtectedRoute>} />
            <Route path='/categories' element={<ProtectedRoute><Categories /></ProtectedRoute>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  )
}
