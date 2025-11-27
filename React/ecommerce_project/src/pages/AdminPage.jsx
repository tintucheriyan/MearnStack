import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Admin(){
    const[products,setProduct]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/product/getAll")
        .then(result=>setProduct(result.data))
        .catch(err=>console.log(err))
    },[])
    
    return(
        <>
        <h2>Welcome to Admin Panel</h2>
        <Navbar />
        <div>
            <Link to="/admin/createProduct"><button>CREATE</button></Link>
            <Link to="/admin/updateProduct"><button>UPDATE</button></Link>
            <Link to="/admin/deleteProduct"><button>DELETE</button></Link>
            <Link to="/admin/readProduct"><button>READ</button></Link>
        </div>
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
            padding: "20px",
            justifyItems: "center",
          }}
        >
          {products.map((item, i) => (
            <div
              key={i}
              style={{
                width: "250px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Product Image */}
              <div style={{ height: "180px", overflow: "hidden" }}>
                <img
                  src={item.image || "https://via.placeholder.com/250x180"} // fallback image
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Product Info */}
              <div style={{ padding: "15px" }}>
                <h3 style={{ margin: "0 0 10px", fontSize: "18px" }}>
                  {item.name}
                </h3>
                <p style={{ margin: "0 0 5px", color: "#555" }}>
                  {item.description}
                </p>
                <p style={{ margin: "0 0 5px" }}>
                  <strong>Brand:</strong> {item.brand}
                </p>
                <p style={{ margin: "0 0 5px" }}>
                  <strong>Category:</strong> {item.category}
                </p>
                <p style={{ margin: "0 0 5px" }}>
                  <strong>Price:</strong> ₹{item.price}
                </p>
                <p style={{ margin: "0 0 5px" }}>
                  <strong>Stock:</strong> {item.countInStock}
                </p>
              </div>
            </div>
          ))}
        </div>
      

       <Footer />
        </>
    )
}
export default Admin;