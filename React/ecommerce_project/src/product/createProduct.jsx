import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function CreateProduct(){
    const[data,setData]=useState({name:'',description:'',brand:'',price:'',countInStock:''})
    const navigate=useNavigate()

    function handleCreate(e){
        e.preventDefault();
        axios.post("http://localhost:3000/product/createProduct",data,
                    {
                        headers:{
                            Authorization:`Bearer ${localStorage.getItem("token")}`
                        }
                    })
        .then(result=>{
            alert(result.data.message)
            navigate('/admin')})
         
        .catch(err=>console.log(err))
    }
    return(
        <>
        <form onSubmit={handleCreate}>
          <label>name</label>
          <input type="text"  onChange={e=>setData({...data,name:e.target.value})}></input> <br/><br/>
          <label>description</label>
          <input type="text" onChange={e=>setData({...data,description:e.target.value})} ></input> <br/><br/>
          <label>brand</label>
          <input type="text" onChange={e=>setData({...data,brand:e.target.value})}></input> <br/><br/>
          <label>price</label>
          <input type="number" onChange={e=>setData({...data,price:e.target.value})}></input> <br/><br/>
          <label>countInStock</label>
          <input type="number" onChange={e=>setData({...data,countInStock:e.target.value})}></input> <br/><br/>
          <button type="submit">Create</button>
        </form>
        </>
    )
}
export default CreateProduct;

