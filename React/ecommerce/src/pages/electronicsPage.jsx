import axios from "axios";
import { useEffect,useState } from "react";
function ElectronicsPage(){
     const[data,setData]=useState('')
    useEffect(()=>{
        axios.get("http://localhost:3000/product/getAll")
        .then(result=>setData(result.data))
    },[])

    return(
       <>
        <div style ={{display:"flex",minHeight: "100vh"}}>
            <div style={{width: "250px", backgroundColor: "#f0f0f0",
                          padding: "20px",boxSizing: "border-box"}}>
               
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
          {data.map((item, i) => (
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
    
export default ElectronicsPage;