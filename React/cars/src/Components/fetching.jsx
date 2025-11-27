import { useState,useEffect } from "react";
import axios from "axios";
function Fetch(){
    const[fetchData,setData]=useState([])
    useEffect(()=>{
       async function fetchResult(){
         try{
           const result= await axios.get('https://fakestoreapi.com/products')
           setData(result.data)
         }
         catch(err){
           console.log(err)
         }
       }
       fetchResult()
    },[])
    
    return(
        <>
        <h2>Data fetching</h2>
        <ul>
          {
         fetchData.map((item,index)=>(
           <li key={index}>{item.title} - {item.price} - {item.description}</li>
           
         ))
        }
        </ul>
        
        </>
    )
}
export default Fetch;