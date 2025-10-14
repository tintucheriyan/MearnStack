import Home from "./components/Home/home"
import About from "./components/Home/about"
import Contact from "./components/Home/contact"
import { Routes,Route,Link } from "react-router-dom"
import Dashboard from "./components/Home/Dashboard"
import Profile from "./components/Home/profile"
import Settings from "./components/Home/settings"
import User from "./components/Home/user"

function App() {
 
  return (
    <>
      <h1>React Router DOM</h1>
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/about">About</Link> | {" "}
        <Link to="/contact">Contact</Link> | {" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/user/101">User</Link>

      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/user/:id" element={<User/>} />
        <Route path="/dashboard" element={<Dashboard/>}>
            <Route path="profile" element={<Profile/>} />
            <Route path="settings" element={<Settings/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
