import { useState } from "react";
import "./registration.css"; // 
import axios from "axios";
import { useNavigate} from "react-router-dom";

function Register() {
    
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const navigate=useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/user/register",{username:username,email:email,password:password,role:role})
    .then(()=>navigate('/login'))
  };

 

  return (
    <div className="container">
      <div className="register">
        <h2>SignUp</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            className="input"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

            <input
            type="email"
            className="input"
            placeholder="email"
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
          <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="user">user</option>
          <option value="admin">admin</option>
          </select>

          <button type="submit" className="btn">
             signup
          </button>
        </form>

        
      </div>
    </div>
  );
}

export default Register;
