import React from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import ToDos from './components/ToDos'
import Login from './components/Login'
import Categories from './components/Categories'
import Navigation from './Navigation'


export default function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='categories' element={<Categories />} />
          <Route path='todos' element={<ToDos />} />
        </Routes>
      </Router>
    </div>
  )
}
