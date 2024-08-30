import React from 'react'
import axios from 'axios'
function Signup() {
    const handleClick = (e)=>{
        e.preventDefault()
        const formData = {
          name: e.target.form.name.value,
          email: e.target.form.email.value,
          password : e.target.form.password.value,
          phoneNo : e.target.form.phoneNo.value
        } 
    
        axios.post('http://localhost:4000', formData).then(res => console.log(res.data))
      }
  return (
    <div>
      <form>
          <input type="text" name='name' placeholder='Name'/> <br />
          <input type="text" name='email' placeholder='Email' /> <br />
          <input type="text" name='password' placeholder='password' /> <br />
          <input type="text" name='phoneNo' placeholder='Phone No' /> <br />
          <input type="submit" onClick={handleClick} value="submit" />
        </form>
    </div>
  )
}

export default Signup
