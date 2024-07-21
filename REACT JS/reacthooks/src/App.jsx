import React from "react"
import { useState , useEffect} from "react"


function App() {

  
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('black');
  
  const countIn = () => setCount(count +1);
  useEffect(()=>{
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    document.title = `Hello ${count}`;
    setColor(`rgb(${r},${g},${b})`);
    console.log(r,g,b);
  }, [count]);


  return (
    <>

      {/* use effect hook */}
      <h1 style={{color:color}}>Hello This a React App</h1>
      <button onClick={countIn}>clicked {count}</button>
      <button ></button>
    </>
  )
}

export default App
