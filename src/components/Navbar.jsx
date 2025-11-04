import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbarContainer">
        <h1>My Doctor Care</h1>
        <aside className="menuItems">
            <NavLink to="/">Homepage</NavLink>
            <NavLink to="/appointments">Appointments</NavLink>
            <NavLink to="/contactus">Contact Us</NavLink>
            <NavLink to="/doctors">Doctors</NavLink>
        </aside>
    </nav>
  )
}

export default Navbar