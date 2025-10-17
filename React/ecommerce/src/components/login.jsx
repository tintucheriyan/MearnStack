import { useState } from "react";
import "./Login.css"; // 
import axios from "axios";
import { data, useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    
    axios.post("http://localhost:3000/user/login",{email:email,password:password})
    .then(result=>{
        if(result.data.success){
          alert(result.data.message)
           navigate('/home')}
        else
          alert(result.data.message)
      })
    .catch(err=>console.log(err))
};

  const handleSignup = () => {
    navigate("/register");
  };

  return (
    <div className="container">
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="input"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn">
            Log In
          </button>
        </form>

        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          Don’t have an account?{" "}
          <span
            style={{ color: "#4a90e2", cursor: "pointer", fontWeight: "600" }}
            onClick={handleSignup}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
