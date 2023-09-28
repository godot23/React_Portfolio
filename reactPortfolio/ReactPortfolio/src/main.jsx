import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from "./pages/Home.jsx"
import AboutMe from "./pages/AboutMe.jsx"
import Contact from "./pages/Contact.jsx"
import Portfolio from "./pages/Portfolio.jsx"
import CV from "./pages/CV.jsx"
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const router = createBrowserRouter([
  {
    path : "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/AboutMe",
        element: <AboutMe />
      },
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/Portfolio",
        element: <Portfolio />
      },
      {
        path: "/CV",
        element: <CV />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router} />
)
