import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Slices/ProductsSlice";
import { LATEST_PRODUCTS } from "../../utils/Constants";
import ProductList from "./ProductList";
import Loaders from "../../utils/Loaders";
import CartToast from "../../utils/CartToast";

const Products = () => {
  const dispatch = useDispatch();
  const { products, error, productsLoading } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <section className="latest">
      <div className="container">
        <h2 className="section-heading">{LATEST_PRODUCTS}</h2>
        <div className="wrapper">
          {error
            ? error
            : productsLoading
            ? <Loaders/>
            : products && products.length > 0
            ? products
                .filter((p) => p.category === "men's clothing")
                .map((p) => <ProductList key={p.id} product={p} />)
            : "No Products Found"}
        </div>
      </div>
     <CartToast/>
    </section>
  );
};

export default Products;
