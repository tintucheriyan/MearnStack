import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home(){
    const[students,setStudent]=useState([])
    const navigate=useNavigate()
     function getStudents(){
            axios.get("http://localhost:3600/getStudents")        //  ExpressMongo/index.js
            .then(result=>setStudent(result.data))
            .catch(err=>console.log(err))
        }
    function deleteStudent(name){
        
        const isDelete=confirm("Do you want to delete ?")
        
        if(isDelete){
            axios.delete("http://localhost:3600/deleteUser",{data:{name:name}})
            .then(()=> getStudents())
            .catch(err=>console.log(err))
        }
        else{
            navigate('/')
        }
       
    }

    function updateStudent(name){
        const oldname=name
        const newMark=prompt("enter the data")
        axios.put(`http://localhost:3600/updateStudent?oldname=${name}`, { mark: newMark })
        .then(() => getStudents())
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
      getStudents()
    },[])
    
    return(
        <>
        <nav>
            <Link to='/login'>Login</Link>{" "}
            <Link to='/register'>Register</Link>{" "}
            <Link to='/dashboard'>Dashboard</Link>{" "}
            
        </nav> <br/>
       
        <table border="1" cellPadding="5" cellSpacing="0" >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Mark</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {students.map((item,i) =>(
                <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.mark}</td>
                    <button onClick={() =>deleteStudent(item.name)}>Delete</button>
                    <button onClick={()=>updateStudent(item.name)}>Edit</button>
                </tr>
                ))}
                
            </tbody>
        </table>
        </>
    )
}

export default Home;