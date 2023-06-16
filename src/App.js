import { Route, Routes } from "react-router-dom";
import "./assets/css/defaults.css";
import Learning from "./pages/Learning";

import Products from "./pages/Products";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import WishList from "./pages/WishList";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const spinner = document.getElementById("loader-wrapper");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/users" element={<Users />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
        {/* <Users/>
      <Products /> */}
        {/* <Learning/> */}
      </div>
    )
  );
}

export default App;
