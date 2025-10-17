import Navbar from "./components/Navbar"
import {Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import CartPage from "./pages/CartPage"
import ProductPage from "./pages/ProductPage"
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom"
import CategoryList from "./components/cartPreview"
import Login from "./components/login"
import Register from "./components/registration"

function App() {
 

  return (
    <>
    
    <BrowserRouter>
      <Navbar/>
      
       <Routes>
            
            <Route path="/home" element={<Home />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/about" element={<ProductPage/>}></Route>
            <Route path="/categories" element={<CategoryList/>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
        </Routes>
       
  </BrowserRouter>
    
      
    </>
  )
}

export default App
