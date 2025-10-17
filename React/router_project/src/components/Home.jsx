import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  function getData() {                               //         express/validation.js
    axios  
      .get("http://localhost:3500/getUser")
      .then(result => setUsers(result.data))
      .catch(err => console.log(err));
  }

  function insertData(){
    const newUser={"name":'Mariya',"age":23,"mark":60,"gmail":"mary@gmail.com"}
    axios.post("http://localhost:3600/insertUser",newUser)
    .then(()=>{
      axios
      .get("http://localhost:3600/getUser")
      .then(result => setUsers(result.data))
      .catch(err => console.log(err));
    })
}

function updateData(oldGmail){
  
  const newName=prompt("enter the name")
  const newMark=prompt("enter the mark")
  const data={gmail:oldGmail,updatedData:{name:newName,mark:newMark}}
  axios.put("http://localhost:3600/updateUser",data)
  .then(()=>{
    axios.get("http://localhost:3600/getUser")
    .then(result=>setUsers(result.data))
    .catch(err=>console.log(err))
  }
  )
  .catch(err=>console.log(err))
}
 
function deleteData(gmail){
   const isConfirmed=confirm("Do you want to delete the item ?")
   if(isConfirmed){
    axios.delete("http://localhost:3600/deleteUser",{ data: { gmail } })
    .then(()=>{
    axios.get("http://localhost:3600/getUser")
    .then(result=>setUsers(result.data))
    .catch(err=>console.log(err))
       }
       )
     .catch(err=>console.log(err))
   }
  else{
    navigate('/')
  }
}


  useEffect(() => {
    getData();
    insertData();
  }, []);

  return (
    <>
    <h2>Home</h2>
    <nav>
        <Link to="/login">Login</Link> {"   "}
        <Link to="/register">Register</Link> {"   "}
        <Link to="/dashboard">Dashboard</Link> {"   "}
    </nav>
      <br/> <br/>
      <div>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Mark</th>
            <th>Email</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.mark}</td>
              <td>{item.gmail}</td>
              <button onClick={()=>updateData(item.gmail)}>EDIT</button>
               <button onClick={()=>deleteData(item.gmail)}>DELETE</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Home;
