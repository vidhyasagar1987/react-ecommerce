import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "../../assets/css/header.css";
import { useSelector } from "react-redux";
import { BsCart2, BsSuitHeart } from "react-icons/bs";
import { AiOutlineCloseSquare } from "react-icons/ai";

import { BiMenu } from "react-icons/bi";

const TopHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    toggleBodyScrollLock();

  };
  const { cart } = useSelector((state) => state.cart);

  const cartNo =
    !!cart && cart.length > 0
      ? cart.reduce((acc, curr) => acc + curr.quantity, 0)
      : 0;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleBodyScrollLock = () => {
    const body = document.querySelector('body');
    body.classList.toggle('body-scroll-lock');
  };
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link to={"/"}>
            {" "}
            <img src={logo} alt="logo"></img>
          </Link>
        </div>

        <div className={`main-menu ${menuOpen ? "active" : ""}`}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>

              <li>
                <Link to="/contact">Reach Us</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header-right-wrap">
          <ul>
            <li className="cart">
              <Link to="/cart">
                <BsCart2 /> <span className="count-style">{cartNo}</span>{" "}
              </Link>
            </li>
            <li className="wishList">
              <Link to="/cart">
                <BsSuitHeart />
                <span className="count-style">{cartNo}</span>
              </Link>
            </li>
            <li className="mobile-menu">
              <button onClick={handleMenuToggle}>
                {menuOpen ? <AiOutlineCloseSquare className={`${menuOpen ? "close" : ""}`}/> : <BiMenu />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
