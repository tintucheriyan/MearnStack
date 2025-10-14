
import './App.css'
 import {ustate} from 'react'

// import Login from './login/login'
// import Home from './home'
function App() {
  names=["kk","sinu","sali"]
    return(
        <>
        <h2>Welcome to the Home Page</h2>
        {
            names.map((name,index)=>{
                return(<h3 key={index}>{name}</h3>)
            })
        }
        </>
    )

  // return (
  //   <>
  //    <Login /> 
    
  //   </>
  // )
}

export default App






























