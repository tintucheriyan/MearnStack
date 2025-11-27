import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  // Get user info from localStorage
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const isAdmin = user?.role === "admin";

  return (
    <>
      {/* Top bar with site branding */}
      <header className="top-bar">
        <b><i>Shoply</i></b>
        <b><i>Minutes</i></b>
        <b><i>Travel</i></b>
      </header>

      {/* Main navbar */}
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/categories">Categories</Link>

          {/* Show Admin link only if user is admin */}
          {isAdmin && <Link to="/admin">Admin Panel</Link>}
        </div>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className="search-bar"
        />

        {/* Login / Logout link */}
        <div className="nav-links">
          <Link to={user ? "/logout" : "/login"}>
            {user ? "Logout" : "Login"}
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
