import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

function CreateOrder(){
    const[item,setItem]=useState({name:'',price:'',quantity:''})
    const[address,setAddress]=useState({Fname:'',location:'',houseNo:'',pincode:''})
    const[payment,setPayment]=useState({paymentMethod:'',itemPrice:'',tax:'',shippingPrice:'',totalPrice:'',paidAt:'',
                                        isPaid:'false',deliveredAt:'',isDelivered:'false'})
    
    const navigate=useNavigate()
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token'); 
    const { productId } = useParams();       /// get the id from the url
    
    function handleOrder(e){
        e.preventDefault()
        const data = {
      orderItems: [
        {
          name: item.name,
          price: Number(item.price),
          quantity: Number(item.quantity),
          product_id: productId
        }
      ],
      shippingAddress: {
        fullName: address.Fname,
        location: address.location,
        houseNo: Number(address.houseNo),
        pinCode: Number(address.pincode)
      },
      paymentMethod: payment.paymentMethod,
      itemsPrice: Number(payment.itemPrice),
      taxPrice: Number(payment.tax),
      shippingPrice: Number(payment.shippingPrice),
      totalPrice: Number(payment.totalPrice),
      isPaid: payment.isPaid,
      paidAt: payment.paidAt,
      isDelivered: payment.isDelivered,
      deliveredAt: payment.deliveredAt,
      user: user?._id
    };
        axios.post("http://localhost:3000/order/createOrder",data,
            {
         headers: {
      Authorization: `Bearer ${token}`  // send token here
                 }
            }
        )
        .then(result=>
            {
             alert(result.data)
             navigate('/cart')
            })
    }
    
        return(
        <>
        <h2>cart</h2>
        <form onSubmit={handleOrder}>
        <div>    
            <label>name</label>
            <input type="text" onChange={e=>setItem({...item,name:e.target.value})}></input> <br/><br/>
            <label>price</label>
            <input type="number" onChange={e=>setItem({...item,price:e.target.value})}></input> <br/><br/>
            <label>quantity</label>
            <input type="number" onChange={e=>setItem({...item,quantity:e.target.value})}></input> <br/><br/>
        </div>
        <div>   
            <h2>Checkout</h2> 
            <label>Fname</label>
            <input type="text" onChange={e=>setAddress({...address,Fname:e.target.value})}></input> <br/><br/>
            <label>location</label>
            <input type="text" onChange={e=>setAddress({...address,location:e.target.value})}></input> <br/><br/>
            <label>houseNo</label>
            <input type="number" onChange={e=>setAddress({...address,houseNo:e.target.value})}></input> <br/><br/>
            <label>pincode</label>
            <input type="number" onChange={e=>setAddress({...address,pincode:e.target.value})}></input> <br/><br/>
        </div>
        <div>  
            <h2>Payment</h2>  
            <label>paymentMethod</label>
            <select  value={payment.paymentMethod} onChange={e=>setPayment({...payment,paymentMethod:e.target.value})}>
                <option value="COD">COD</option>
                <option value="UPI">UPI</option>
                <option value="Card">Card</option>

            </select>
           
            <label>itemPrice</label>
            <input type="number" onChange={e=>setPayment({...payment,itemPrice:e.target.value})}></input> <br/><br/>
            <label>tax</label>
            <input type="number" onChange={e=>setPayment({...payment,tax:e.target.value})}></input> <br/><br/>
            <label>shippingPrice</label>
            <input type="number" onChange={e=>setPayment({...payment,shippingPrice:e.target.value})}></input> <br/><br/>
            <label>totalPrice</label>
            <input type="number" onChange={e=>setPayment({...payment,totalPrice:e.target.value})}></input> <br/><br/>
            <label>paidAt</label>
            <input type="datetime-local" onChange={e=>setPayment({...payment,paidAt:e.target.value})}></input> <br/><br/>
            <label>isPaid</label>
            <input type="checkbox" checked={payment.isPaid} onChange={e=>setPayment({...payment,isPaid:e.target.checked})}></input> <br/><br/>
            <label>deliveredAt</label>
            <input type="datetime-local" onChange={e=>setPayment({...payment,deliveredAt:e.target.value})}></input> <br/><br/>
            <label>isDelivered</label>
            <input type="checkbox" checked={payment.isDelivered} onChange={e=>setPayment({...payment,isDelivered:e.target.checked})}></input> <br/><br/>
        </div>
        <button type="submit">ADD</button>
        </form>
        </>
    )
}
export default CreateOrder;