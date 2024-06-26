import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from '../screen/Signup/Signup'
import SignIn from '../screen/SignIn/SignIn'
import Home from '../screen/Home/Home'
import Header from '../components/Header/Header'
import Dashboard from '../screen/Dashboard/Dashboard'
import Profile from '../screen/Profile/Profile'
import ProtectedRoutes from './ProtectedRoutes'

const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/Signup' element={<Signup/>}/>
              <Route path='/SignIn' element={<SignIn/>}/>
              <Route path='/Dashboard' element={<ProtectedRoutes components={<Dashboard/>}/>}/>
              <Route path='/Profile' element={<ProtectedRoutes components={<Profile/>}/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouterConfig