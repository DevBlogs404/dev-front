import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Navbar from './components/Navbar'
import Prodcuts from './pages/Prodcuts'
import Contact from './pages/Contact'
import CreateProduct from './pages/CreateProduct'
import SignIn from './components/SignIn'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/create' element={<CreateProduct />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/products' element={<Prodcuts />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
