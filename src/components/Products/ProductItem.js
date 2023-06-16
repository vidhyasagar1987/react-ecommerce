import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTocart } from "../../Slices/CartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ButtonStyle from "../../utils/ButtonStyle";
const ProductItem = ({ product }) => {
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
        <h4>
          <span>Category: </span>
          {product.category}
        </h4>
      </div>

      <ButtonStyle
        className={"cart-button"}
        onClick={() => addToCartHandler(product)}
      >
        {isItemAdded ? "Item Added" : "Add to Cart"}
      </ButtonStyle>
    </div>
  );
};

export default ProductItem;
