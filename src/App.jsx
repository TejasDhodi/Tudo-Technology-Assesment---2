import React from 'react'
import Navbar from './Components/Navbar'
import FooterComponent from './Components/FooterComponent'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import MyAccount from './Pages/MyAccount'
import ConnectComponent from './Components/ConnectComponent'
const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route element={<Dashboard />} path='/' />
          <Route element={<MyAccount />} path='/myAccount' />
        </Routes>
        <ConnectComponent />
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </>
  )
}

export default App
