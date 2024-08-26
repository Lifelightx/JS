import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'
import Login from '../components/Login'



function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:4000')
    .then(res => {
      setData(res.data)
    }
  )
},[data])
  const handleClick = (e)=>{
    e.preventDefault()
    const formData = {
      name: e.target.form.name.value,
      email: e.target.form.email.value,
      password : e.target.form.password.value,
      phoneNo : e.target.form.phoneNo.value
    } 

    axios.post('http://localhost:4000', formData).then(res => console.log(res.data))
    .then(err => console.log(err))
  }
  return (
    <>
      {data.map((val,key)=>{
        return (
        <div style={{display:'flex',padding:'4px', border:'1px solid white', width:'600px','justifyContent':'space-between'}}>
          <p>{val.id}</p>
          <div style={{display:"flex", border:'1px solid green', width:'500px'}}>
          <p>{val.setup}</p>
          <p>{val.punchline}</p>          
          </div>
        </div>
        )
      })}

      <div>
        <form action="/" method='post'>
          <input type="text" name='name' placeholder='Name'/> <br />
          <input type="text" name='email' placeholder='Email' /> <br />
          <input type="text" name='password' placeholder='password' /> <br />
          <input type="text" name='phoneNo' placeholder='Phone No' /> <br />
          <input type="submit" onClick={handleClick} value="submit" />
        </form>
      </div>
      <Login/>
    </>
  )
}

export default App
