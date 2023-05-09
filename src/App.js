import './App.css';
import React from 'react'
import Signup from './component/Signup';
import Login from './component/login';
import Navbar from './component/Navbar';
// import Login from './login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'




function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
