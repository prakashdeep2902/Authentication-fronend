import React, { useState,useEffect } from 'react'
import Navbar from './conponent/Navbar'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './conponent/SignIn';
import SignUp from './conponent/SignUp';
import Mymodel from './conponent/Mymodel';
import ForgotPassword from './conponent/ForgotPassword';
import AddNewPassword from './conponent/AddNewPassword';
import Dashboard from './conponent/Dashboard';
import Error from './conponent/Error';

const App = () => {



  const [showMymodel, setshowMymodel] = useState(false)

  const [window_Width, detectW] = useState({
    winWidth: window.innerWidth
  })
  const detectSize = () => {
    detectW({
      winWidth: window.innerWidth
    })  
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [window_Width])

  return (  
    <>


      <BrowserRouter>
        <Navbar showMymodel={showMymodel} setshowMymodel={setshowMymodel} window_Width={window_Width.winWidth}/>
        <Mymodel visible={showMymodel}  window_Width={window_Width.winWidth} />
        <Routes>
         <Route exact path="forgot-password" element={<ForgotPassword/>} ></Route>
          <Route exact path="sign-in" element={<SignIn />} ></Route>
          <Route exact path='sign-up' element={<SignUp />}></Route>
          <Route exact path='addnewpassword/:id/:token' element={<AddNewPassword/>}></Route>
          <Route exact path='dashboard' element={<Dashboard/>}></Route>
          <Route exact path='*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
