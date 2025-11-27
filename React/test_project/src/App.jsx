import { useState } from "react"
function App() {
 const[data,setData]=useState('')
 const[result,setResult]=useState([])
 function handleData(e){
   setData(e.target.value)
    
   
 }
 function displayData(){
   setResult([...result,data])
   console.log(result)
   setData('')
   
 }
  return (
    <>
      <h2>Welcome</h2>
      <input type="text" value={data} onChange={handleData}></input><br/>
      
      <button onClick={displayData}>click</button>
      {result.map((item,index)=>
      <p key={index}>{item}</p>
      )}
      
        
      
    </>
  )
}

export default App
