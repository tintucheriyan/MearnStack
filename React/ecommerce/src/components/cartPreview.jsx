
import beautyImg from "../assets/beauty.jpg";
import fashionImg from "../assets/fashion.jpg"
import homeImg from "../assets/home.jpg"
import appliancesImg from "../assets/appliances.jpg"
import furnitureImg from "../assets/furniture.jpg"
import electronicsImg from "../assets/electronics.jpg"
import sportsImg from "../assets/sports.jpg"
import { Link } from "react-router-dom";

import Electronics from "./category/Admin/electronics";
function CategoryList() {

 

  return (
    <section className="categories">
      <h2>Shop by Category</h2>
      <div className="category-grid">
        
          <div style={{textDecoration: "none",color: "#333",fontWeight: 500,
          transition: "color 0.3s ease"}}>
           
           <p> <Link to="/electronics">Electronics</Link></p>
           <img src={electronicsImg} alt="Product" width="80" />
           <p> <Link to="/fashion">Fashion</Link></p>
           <img src={fashionImg} alt="Product" width="80" />
           <p> <Link to="/home">Home</Link></p>
           <img src={homeImg} alt="Product" width="80" />
          <p> <Link to="/beauty">Beauty</Link></p> 
          <img src={beautyImg} alt="Product" width="80" /> 
          <p> <Link to="/appliances">Appliances</Link></p> 
          <img src={appliancesImg} alt="Product" width="80" /> 
          <p> <Link to="/furniture">Furniture</Link></p> 
          <img src={furnitureImg} alt="Product" width="80" /> 
          <p> <Link to="/sports">Sports</Link></p> 
          <img src={sportsImg} alt="Product" width="80" />                  
          </div>
      
      </div>
    </section>
  );
}

export default CategoryList;