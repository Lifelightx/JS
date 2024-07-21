
import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [show, setShow] = useState('');

  useEffect(()=>{
    showInput();
  },[show])

  const showInput =  useCallback( ()=>{
    setShow(input);
  })
  const inputChange = (e)=>{
    setInput(e.target.value);
  }

  return (
    <>
      <h1>UseEffect</h1>
      <input type="text"
      value={input}
      onChange={inputChange}
      />
      <button onClick={showInput}>Show Input</button>
      <p>{show}</p>
    </>
  )
}

export default App
