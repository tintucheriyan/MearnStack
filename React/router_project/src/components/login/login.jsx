// import { useState} from "react";
// import { useNavigate } from "react-router-dom";
// function Login(){
//     const[userName,setUserName]=useState();
//     const[password,setPassword]=useState();
//     const navigate=useNavigate()
    
//     function authentication(){
//         if(userName=='kk' && password==123)
//               navigate('/dashboard')
//         else
//             alert("Invalid credentials")
//     }
//     return(
//         <>
//         <h2>Login </h2>
//        <form>
//       <label>Username</label>
//       <input type="text" onChange={(e)=>setUserName(e.target.value)}></input><br></br>
//       <label>Password</label>
//       <input type="text" onChange={(e)=>setPassword(e.target.value)}></input><br></br>
//       <button onClick={authentication}>Login</button>
//       </form>
//         </>
//     )
// }
// export default Login;

import { useState} from "react";
import { useNavigate } from "react-router-dom";
 function Login(){
    const[user,setUser]=useState({name:"",age:'',password:""})
    const navigate=useNavigate()
    function authentication(){
        if(user.name=='ram' && user.password==123)
              navigate('/dashboard')
        else
             alert("Invalid credentials")     
    }
    return(
        <>
        
           <h2>Login </h2>
        <form>
        <label>Username</label>
        <input type="text"  value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})}></input><br></br>
        <label>Password</label>
         <input type="text"  value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}></input><br></br>
      <button onClick={authentication}>Login</button>
       </form>
        </>
    )
 }
 export  default Login;