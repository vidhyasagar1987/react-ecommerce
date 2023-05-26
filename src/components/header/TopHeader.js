import React , {useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "../../assets/css/header.css";

const TopHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="menu-toggle" onClick={handleMenuToggle}>
        <div className="hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav className="menu">

      <ul >
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/products">Products</Link>
        </li>
        <li>
          {" "}
          <Link to="/users">Users</Link>
        </li>
        <li>
          {" "}
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          {" "}
          <Link to="/contact">Reach Us</Link>
        </li>
      </ul>
      </nav>

    </header>
  );
};

export default TopHeader;
