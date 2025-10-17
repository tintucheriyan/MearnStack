import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Register(){
    //const[data,setData]=useState([])
    const[formData,setFormData]=useState({name:'',age:'',mark:''})
    const navigate=useNavigate()
    function registerData(){
        
        axios.post("http://localhost:3600/insertStudent",formData)
        .then(() => 
           setData(result.data))
        .then(()=>navigate('/'))
            
        
        .catch(err=> console.log(err))
        
    }
    return(
        <>
        <h2>Register</h2>
        <form>
            <label>Name</label>
            <input type="text" onChange={e =>setFormData({...formData,name:e.target.value})}></input><br/><br/>
            <label>Age</label>
            <input type="text"  onChange={e =>setFormData({...formData,age:e.target.value})}></input><br/><br/>
            <label>Mark</label>
            <input type="text"  onChange={e =>setFormData({...formData,mark:e.target.value})}></input><br/><br/>
            <button onClick={registerData}>Register</button>
        </form>
        </>
    )
}
export default Register;