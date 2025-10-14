import { useState } from "react"
import './state.css'
function State(){
   const[name,setName]=useState('kk')
   const[count,setCount]=useState(0)
 
////////////////////////////////////////////////////
   function clickMe(){
     setName('Tintu')
   }
   function clickInc(){
       setCount(count+1)
   }
   function clickDec(){
    
    setCount(count-1)
   }

 ////////////////////////////////////////////////////////////
    return(
        <>
        <h2>Welcome {name}</h2>
        <button onClick={clickMe}>Click</button>
        <h2 className={(count>=5)?'red':'green'}>Welcome {count}</h2>
        <button onClick={clickInc}>Inc Click</button>
        
        <button onClick={clickDec}>Dec Click</button>
        </>
    )
}
export default State;