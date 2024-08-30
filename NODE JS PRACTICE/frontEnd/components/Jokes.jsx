import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Jokes() {
    const [data, setData] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:4000/jokes')
    .then(res => {
      setData(res.data)
      console.log(res.data)
    }
  )
},[])
  return (
    <div>
      {data.map((val,key)=>(
        <div key={key} style={{display:'flex',padding:'4px', border:'1px solid white', width:'600px','justifyContent':'center'}}>
          <p>{val.id}</p>
          <div style={{display:"flex", border:'1px solid green', width:'500px'}}>
          <p>{val.setup}</p>
          <p>{val.punchline}</p>          
          </div>
        </div>
        )
      )}
    </div>
  )
}

export default Jokes
