import Login from "./components/login/login"
import { Route,Routes } from "react-router-dom"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard/dashboard"
import Registration from "./components/Register/Register"
function App() {
  
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/register' element={<Registration />}></Route>
      <Route path='/login' element={< Login/>}></Route>
      <Route path='/dashboard' element={< Dashboard/>}></Route>
    </Routes>
    </>
  )
}

export default App
