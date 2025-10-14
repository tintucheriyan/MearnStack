import { useState,useEffect } from "react";
function Dashboard(){
    const[title,setTitle]=useState('Welcome')
    const [name,setName] =useState([])
    useEffect(()=>{
       async function getNames(req,res){
            try{
                const result=await fetch("http://localhost:3063/getAluser")
                const data=await result.json()
                setName(data)
               }
            catch(err){
                console.log("failed to get names")
            }
       }
       getNames()
    },[])
    function changeTitle(){
        setTitle('ByeBye')
    }
    return(
        <>
        <h2>Dashboard</h2>
        <h4>{title}</h4>
        <p>Names</p>
        <ul>
           {name.map((item,index)=>{
            return  <li key={index}>{item}</li>
           })
          }
        </ul>
        <button onClick={changeTitle}>change Title</button>
        </>
    )
}
export default Dashboard;