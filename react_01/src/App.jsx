import { useState } from 'react'

import './App.css'

function App() {
  let  [counter,setCounter]=useState(15)

  const addValue =()=>{
    counter=counter+1;
    setCounter(counter)
    
    
  }
  const removeValue=()=>{
    counter=counter-1;
    if(counter < 0) return false 
    setCounter(counter)
  }
    
   
  

  return (
    <>
   <h1>chai aur react</h1>
   <h2>Counter value: {counter} </h2>

   <button onClick={addValue}>add value</button>

   <br />
   <br />

   <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
