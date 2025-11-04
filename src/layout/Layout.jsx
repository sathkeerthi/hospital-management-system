import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div className='layoutContainer'>
        <Navbar />
        <article className="displayPage">
            <Outlet />
        </article>
        <Footer />
    </div>
  )
}

export default Layout