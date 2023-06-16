import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productFilter } from "../../Slices/ProductsSlice";
import Slider from "@mui/material/Slider";

const FilterCategory = ({ products }) => {
  const dispatch = useDispatch();

  const { productsCategory } = useSelector((state) => state.products);

  let category = productsCategory.map((p) => p.category);
  category = [...new Set(category)];

  const [range, setRange] = React.useState([5, 2000]);
  function handleChanges(event, newValue) {
    setRange(newValue);
  }
  const [selectedCategory, setSelectedCategory] = useState("");
  const categoryHandler = (p) => {
    setSelectedCategory(p);
  };
  useEffect(() => {
    const handleFilter = () => {
      dispatch(
        productFilter({
          minPrice: parseInt(range[0]),
          maxPrice: parseInt(range[1]),
          category: selectedCategory,
        })
      );
    };
    handleFilter();
  }, [selectedCategory, range, dispatch]);

  const clearFilter = () => {
    setRange([5, 2000]);
    setSelectedCategory('');
    dispatch(productFilter({ minPrice: 0, maxPrice: 100, category: '' }));
    
  };
  return (
    <div>
      <h3>Filter Products:</h3>
      <hr />
      <h4>By Category:</h4>
      {productsCategory && productsCategory.length > 0
        ? category.map((p) => (
            <li key={p}>
              <button onClick={() => categoryHandler(p)}>{[p]}</button>
            </li>
          ))
        : "Nothing Found"}
      <h4>By Price Range:</h4>
      <Slider
        value={range}
        onChange={handleChanges}
        valueLabelDisplay="auto"
        min={5}
        max={2000}
        step={100}
      />
      {(selectedCategory || range) && (
        <button onClick={clearFilter}>Clear Filter</button>
      )}
    </div>
  );
};

export default FilterCategory;
