import { useState } from "react";
import Car from "../Car/car";
function Home(){
     const [data,setData]=useState([{name:"Honda",price:20000,color:"black"},
                 {name:"Benz",price:80000,color:"white"},
                 {name:"BMW",price:6000,color:"blue"}])
    function priceInc(id){
    
        setData(data.map((item,index)=>{
            if(index==id)
              return {...item,price:item.price+10000}
            else
                return item
        }))
    }
    return(
        <>
        <h2>Welcome</h2>
        <div style={{display:"flex"}}>
            {
            data.map((item,index)=>(
                
              <Car key={index} name={item.name} price={item.price} color={item.color} priceInc={()=>priceInc(index)}/>
            ))
        }
        </div>
        
        </>
    )
}
export default Home;