import CategoryList from "../components/cartPreview";
import { useState,useEffect } from "react";
import axios from "axios";
function Home(){
     const[products,setProducts]=useState([])
    function getData(){
        axios.get("http://localhost:3000/product/getAll")
        .then(result => setProducts(result.data))
        .catch(err=>console.log(err))
    }
    useEffect(() =>{
        getData()       
    },[])
    return(
        <>
        <div style ={{display:"flex",minHeight: "100vh"}}>
            <div style={{width: "250px", backgroundColor: "#f0f0f0",
                          padding: "20px",boxSizing: "border-box"}}>
                <CategoryList/>
            </div>
        
            {/* Product Tiles Section */}
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
      </div>
    </>
  );
}

export default Home;