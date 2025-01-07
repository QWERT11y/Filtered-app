import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Lox from './lox/Lox'
import Tours from './Pages/tours/Cards'
import Login from './login/login'
import Register from './Register/register'
// import Login from './Login'

const App = () => {



  return (
    <>
 {/* <Login/>   */}
    <Lox>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Cards/:CardId" element={<Tours/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
      </Routes>
    </Lox>
    </>
  )
}

export default App
