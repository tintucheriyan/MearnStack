import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mark: '',
    gmail: ''
  });
   const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  

  
  function registerData(e) {
    e.preventDefault(); 
    axios.post("http://localhost:3600/insertUser", formData)        //         express/validation.js
      .then(() => {
        axios.get("http://localhost:3600/getUser")
        .then(result=>setUsers(result.data))
        .then(()=>navigate('/'))
        .catch(err=>console.log(err))
         
      })
      

      .catch(err => console.log(err));
  }
  

 
  // useEffect(() => {
  //     registerData();
  // }, []);

  return (
    <>
      <h2>Registration</h2>
      <form >
        <label>Name</label>
        <input
          type="text"
          placeholder="enter the name"
        
          onChange={e => setFormData({ ...formData, name: e.target.value })}
        /><br /><br />

        <label>Age</label>
        <input type="text" placeholder="enter the age" onChange={e => setFormData({ ...formData, age: e.target.value })}
        /><br /><br />

        <label>Mark</label>
        <input type="text" placeholder="enter the mark" onChange={e => setFormData({ ...formData, mark: e.target.value })}
        /><br /><br />

        <label>Email</label>
        <input type="text" placeholder="enter the email" onChange={e => setFormData({ ...formData, gmail: e.target.value })}
        /><br /><br />

        <button  onClick={registerData}>Register</button>
      </form>

      
    </>
  );
}

export default Registration;
