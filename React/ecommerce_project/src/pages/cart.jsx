import { useEffect,useState } from "react";
import axios from "axios";
function Cart(){
    const[orders,setProduct]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/order/myOrders",{headers: {
          Authorization: `Bearer ${token}`,
            }
         })
        .then(result=>setProduct(result.data))
        .catch(err=>console.log(err))
    },[])
    return(
        <>
        <h2>🛍 My Cart</h2>
      {orders.length === 0 ? (
        <p>No items in your cart</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              margin: "15px 0",
              borderRadius: "10px",
              background: "#f9f9f9",
            }}
          >
            <h3>🧾 Order ID: {order._id}</h3>

            <div>
              <strong>📦 Items:</strong>
              <ul>
                {order.orderItems.map((item, i) => (
                  <li key={i}>
                    {item.name} — ₹{item.price} × {item.quantity}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <strong>🏠 Address:</strong>
              <p>
                {order.shippingAddress.fullName}, {order.shippingAddress.houseNo},{" "}
                {order.shippingAddress.location} - {order.shippingAddress.pinCode}
              </p>
            </div>

            <div>
              <strong>💰 Payment:</strong>
              <p>Method: {order.paymentMethod}</p>
              <p>Items Price: ₹{order.itemsPrice}</p>
              <p>Tax: ₹{order.taxPrice}</p>
              <p>Shipping: ₹{order.shippingPrice}</p>
              <p><b>Total: ₹{order.totalPrice}</b></p>
              <p>
                Status:{" "}
                {order.isPaid ? (
                  <span style={{ color: "green" }}>Paid ✅</span>
                ) : (
                  <span style={{ color: "red" }}>Not Paid ❌</span>
                )}
              </p>
              <p>
                Delivery:{" "}
                {order.isDelivered ? (
                  <span style={{ color: "green" }}>Delivered 🚚</span>
                ) : (
                  <span style={{ color: "orange" }}>Pending ⏳</span>
                )}
              </p>
            </div>

            <button
              onClick={() => handleDelete(order._id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "8px 12px",
                cursor: "pointer",
                borderRadius: "5px",
                marginTop: "10px",
              }}
            >
              🗑 Remove
            </button>
          </div>
        ))
      )}
    </>
    
    )
}
export default Cart;