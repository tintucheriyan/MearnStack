import { useState } from 'react';
import Tile from '../tile/Tile';
function Home(){
    const[header,setHeader]=useState("Good Morning")
    const[count,setCount]=useState(0)
    function changeHeading(name){
        setHeader(name)
    }
    function countIncrement(){
        setCount(count+1)
    }
    return(
        <>
        <h4>Welcome-{header}</h4><br/><br/>
        <button onClick={()=>changeHeading("Josh")}>Change</button>
        <Tile heading={header} count={count} countInc={countIncrement} changeHeading={changeHeading}/>
        </>
    )
        
    
}
export default Home;