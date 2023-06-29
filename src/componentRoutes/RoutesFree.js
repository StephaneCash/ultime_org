import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages'
import NousConnaitre from '../components/nousConnaitre/NousConnaitre'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ToutesLesActus from '../components/actus/ToutesLesActus'

const RoutesFree = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/a-propos' element={<NousConnaitre />} />
        <Route path='/actus' element={<ToutesLesActus />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default RoutesFree