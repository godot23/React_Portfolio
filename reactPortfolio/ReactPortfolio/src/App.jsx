import { useState } from 'react'
import Header from "./components/Header";
import { Outlet } from "react-router-dom"
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  )
}
export default App
