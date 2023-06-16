import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addTocart } from "../../Slices/CartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonStyle from "../../utils/ButtonStyle";

const ProductList = ({ product }) => {
  const [isItemAdded, setItemAdded] = useState(false);

  const dispatch = useDispatch();

  const addToCartHandler = (p) => {
    setItemAdded(true);

    dispatch(addTocart({ ...p, quantity: parseInt(1) }));
    toast("Cart Added Successfully");
    setTimeout(() => {
      setItemAdded(false);
    }, 3000);
  };

  return (
    <section>
      <div className="card">
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt={product.title} />
        </Link>

        <div className="contentBox">
          <Link to={`/products/${product.id}`}>
            <h3 title={product.title}>
              {product.title.split(" ").slice(0, 3).join(" ") + "..."}
            </h3>
          </Link>
          <h2 className="price">
            {product.price} <span>&#x20b9;</span>
          </h2>
        </div>
        <ButtonStyle
          className={"cart-button"}
          onClick={() => addToCartHandler(product)}
        >
          {isItemAdded ? "Item Added" : "Add to Cart"}
        </ButtonStyle>
        {/* <button
        className="button cart-button"
        onClick={() => addToCartHandler(product)}
      >
        <span className="button-content"> {isItemAdded ? "Item Added"  : "Add to Cart"}</span>
      </button> */}
      </div>
    </section>
  );
};

export default ProductList;
