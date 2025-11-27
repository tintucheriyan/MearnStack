import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Electronics(){
    const[data,setData]=useState({name:'',description:'',brand:'',category:'',price:'',count:''})
    const navigate=useNavigate()
    function handleCreate(e){
        e.preventDefault();
        axios.post("http://localhost:3000/product/createProduct",data)
        .then(()=>navigate('/electronicsPage'))
        .catch(err=>console.log(err))
    }
    return(
        <>
    
        <h2>Welcome to Admin's electronics</h2>
        <form>
            <label>Name</label>
            <input type="text" onChange={e=>setData({...data,name:e.target.value})}></input><br/><br/>
            <label>Description</label> 
            <input type="text" onChange={e=>setData({...data,description:e.target.value})}></input><br/><br/>
            <label>Brand</label>
            <input type="text" onChange={e=>setData({...data,brand:e.target.value})}></input><br/><br/>
            <label>Category</label>
            <input type="text" onChange={e=>setData({...data,category:e.target.value})}></input><br/><br/>
            <label>price</label>
            <input type="text" onChange={e=>setData({...data,price:e.target.value})}></input><br/><br/>
            <label>CountInStock</label>
            <input type="text" onChange={e=>setData({...data,count:e.target.value})}></input><br/><br/>
           <button onClick={handleCreate}>Create</button>
        </form>
        
        </>
    )
}
export default Electronics;