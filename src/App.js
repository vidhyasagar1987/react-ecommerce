import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/css/defaults.css"
import Learning from "./pages/Learning";

import Products from "./pages/Products";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      {/* <Users/>
      <Products /> */}
      {/* <Learning/> */}
    </div>
  );
}

export default App;
