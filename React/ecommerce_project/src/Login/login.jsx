import './login.css'
import axios from "axios";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const[data,setData]=useState({email:'',password:''})
    const navigate=useNavigate()

    function handleLogin(e){
       e.preventDefault();
       axios.post("http://localhost:3000/user/login",data)
       .then(result=>{
        if(result.data.success){
            localStorage.setItem('token',result.data.token)
            localStorage.setItem('user',JSON.stringify(result.data.user))
            if (result.data.user.role=='admin') 
                   navigate("/admin");  // go to admin panel
             else 
                navigate("/");   // normal user page
        }           
        else
          alert(result.data.message)
      })
    .catch(err=>console.log(err))
    }

    function handleSignup(){
        navigate('/register')
    }
    return(
        <>
        <div className="container">
            <div className="login">
             <h2>Login</h2>
             <form onSubmit={handleLogin}>
                <label>email</label>
                <input type="text" onChange={e=>setData({...data,email:e.target.value})}></input><br/><br/>
                <label>password</label>
                <input type="text" onChange={e=>setData({...data,password:e.target.value})}></input><br/><br/>
                <button type="submit" className="btn">Login</button>
             </form>
             <p style={{ marginTop: "15px", fontSize: "14px" }}>
                 Don’t have an account?{" "}
             <span  style={{ color: "#4a90e2", cursor: "pointer", fontWeight: "600" }}
               onClick={handleSignup}>Sign up</span></p>
            </div>
        </div>
        </>
    )
}
export default Login;