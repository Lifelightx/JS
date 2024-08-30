import axios from 'axios'
import React, { useState } from 'react'
import Jokes from './Jokes'

function Login() {
    const [data, fomrData] = useState({
        email: '',
        password: ''
    })
    const [isLoggedIn, setLoggedIn] = useState(false)
    const handleChange = (e)=>{
        fomrData({...data,
            [e.target.name]: e.target.value
        } )
        
    }
  const handleLogin = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:4000/login', data)
    .then(res => {
      if(res.data.status){
        console.log(res.data.status)
        setLoggedIn(true)
    }
    else{
      alert('Login Failed')
    }
  })
    
  }
  return (
    <div>
      {isLoggedIn? <Jokes />: 'Lodding..'}
      <form>
      
        <input type="text" name="email" onChange={handleChange} value={data.email} placeholder='Enter your mail' />
        <input type="password" name="password" onChange={handleChange}  value={data.password} placeholder='Enter your password' />
        <input type="submit" onClick={handleLogin} value="Login" />
      </form>
    </div>
  )
}

export default Login
