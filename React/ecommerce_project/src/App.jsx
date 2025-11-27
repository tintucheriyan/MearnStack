import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home"
import {Route,Routes } from "react-router-dom";
import Login from "./Login/login";
import Registration from "./Registration/registration";
import Admin from "./pages/AdminPage";
import CreateProduct from "./product/createProduct";
import CreateOrder from "./order/createOrder";
import Cart from "./pages/cart";
function App() {
 

  return (
    <>
    <BrowserRouter>
       
       <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/createOrder/:productId" element={<CreateOrder/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Registration/>}></Route>
                <Route path="/admin" element={<Admin/>}></Route>
                <Route path="/admin/createProduct" element={<CreateProduct />}></Route>
                <Route path="/cart" element ={<Cart/>}></Route>
                
            </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
