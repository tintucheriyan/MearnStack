import Navbar from "./components/Navbar"
import {Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import CartPage from "./pages/CartPage"
import ProductPage from "./pages/ProductPage"
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom"
import CategoryList from "./components/cartPreview"
function App() {
 

  return (
    <>
    
    <BrowserRouter>
      <Navbar/>
      
       <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/about" element={<ProductPage/>}></Route>
            <Route path="/categories" element={<CategoryList/>}></Route>
        </Routes>
       
  </BrowserRouter>
    
      
    </>
  )
}

export default App
