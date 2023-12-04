import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AboutMe from "./pages/AboutMe.jsx"
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
        element: <AboutMe />
      },
      {
        path: "/AboutMe",
        element: <AboutMe />
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
