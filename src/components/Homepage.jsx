import React from 'react'
import { NavLink } from 'react-router-dom'

const Homepage = () => {
  return (
    <section className="homepageMainContainer">
        <article className="homepageFirstChildContainer">
            <h2>Your Trusted Online Healthcare Application!</h2>
            <aside className="buttonsContainer">
                <NavLink to="/appointments">View Appointments</NavLink>
                <NavLink to="/doctors">View Doctors</NavLink>
            </aside>
        </article>
        <article className="homepageSecondChildContainer">
            <img src="https://media.istockphoto.com/id/1293373291/photo/portrait-of-confident-ethnic-female-doctor.jpg?s=612x612&w=0&k=20&c=CJsw6IgTecJZoBeVXqZdvh2BI-NyVa-8VcQM3fPhbYc=" alt="" />
        </article>
    </section>
  )
}

export default Homepage