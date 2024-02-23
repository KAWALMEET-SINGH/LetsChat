import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'

function App() {

  return (
   
    <>
     <div className={`p-4 h-screen flex items-center justify-center`}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />}/>
        <Route path='/signup' element={<SignUp  />}/>
        <Route path='/home' element={<Home  />}/>
      </Routes>
      </BrowserRouter>
      
     </div>
    </>
  )
}

export default App
