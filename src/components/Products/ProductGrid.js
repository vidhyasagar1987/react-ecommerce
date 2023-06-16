import React, { useEffect, useState } from "react";
import Loaders from "../../utils/Loaders";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Slices/ProductsSlice";
import FilterCategory from "./FilterCategory";
import ProductItem from "./ProductItem";
const ProductGrid = () => {
  const dispatch = useDispatch();
  const { products, error, productsLoading, filterProducts } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const [searchInput, setSearchInput] = useState("");
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const filterSearch = filterProducts.filter((p) => {
    if (searchInput === "") {
      return p;
    } else if (p.title.toLowerCase().includes(searchInput.toLowerCase())) {
      return p;
    }
  });
  return (
    <div className="products">
      <div className="p-lt">
        {" "}
        <FilterCategory products={products}/>
      </div>
      <div className="p-rt">
        <div className="search-box">
          <label>Search Products: </label>
          <input
            type="text"
            onChange={handleSearch}
            value={searchInput}
            placeholder="Enter a Keyword"
          />
        </div>
        <div className="wrapper">
          {error ? (
            error
          ) : productsLoading ? (
            <Loaders />
          ) : filterProducts && filterSearch.length > 0 ? (
            filterSearch.map((p) => <ProductItem key={p.id} product={p} />)
          ) : (
            "No Products Found"
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
