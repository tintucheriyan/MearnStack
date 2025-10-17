import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  return (
    <>
      <header className="top-bar">
        <b><i>Shoply</i></b>
        <b><i>Minutes</i></b>
        <b><i>Travel</i></b>
      </header>

      <nav className="navbar">
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/about">About</Link>
          <Link to="/categories">Categories</Link>
        </div>
       

        <input
          type="text"
          placeholder="Search products..."
          className="search-bar"
        />
         <div className="nav-links">
          <Link to="/login">SignIn</Link>
          <Link to="/register">SignUp</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
