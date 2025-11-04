import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './global.css'
import Layout from './layout/Layout'
import Homepage from './components/Homepage'
import Appointments from './pages/Appointments'
import ContactUs from './pages/ContactUs'
import Doctors from './pages/Doctors'


function App() {

  let router = createBrowserRouter([
    {
      path: "/", //! root path
      element: <Layout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/appointments", element: <Appointments /> },
        { path: "/contactus", element: <ContactUs /> },
        { path: "/doctors", element: <Doctors /> }
      ]
      //! Note: Children will be rendered inside the root element (in our case, Layout)
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
