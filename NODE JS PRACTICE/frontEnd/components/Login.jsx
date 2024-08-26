import axios from 'axios'
import React, { useState } from 'react'

function Login() {
    const [data, fomrData] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e)=>{
        fomrData({...data,
            [e.target.name]: e.target.value
        } )
    }
  const handleLogin = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:4000/login', data)
    .then(res => {res.data? alert('login Success'): alert('Enter valid credintials')})
    .then(err => console.log(err))
  }
  return (
    <div>
      <form>
      
        <input type="text" name="email" onChange={handleChange} value={data.email} placeholder='Enter your mail' />
        <input type="password" name="password" onChange={handleChange}  value={data.password} placeholder='Enter your password' />
        <input type="submit" onClick={handleLogin} value="Login" />
      </form>
    </div>
  )
}

export default Login
