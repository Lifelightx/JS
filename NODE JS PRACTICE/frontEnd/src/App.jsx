import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'
import Login from '../components/Login'
import Signup from '../components/Signup'



function App() {
  
  
  return (
    <>
      <Signup/>
      <Login/>
    </>
  )
}

export default App
