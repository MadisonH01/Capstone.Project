//api
import { useGetProductsQuery, useGetAllCategoriesQuery } from "../redux/api";
//components
import ProductCard from "./ProductCard";
//react
import React, { useState } from "react";
//styles
import "./styles/productList.css";

function ProductList({ token }) {
  const { data = {}, error, isLoading } = useGetProductsQuery(token);
  const {
    data: categoriesData = [],
    error: categoriesError,
    isLoading: categoriesLoading,
  } = useGetAllCategoriesQuery();
  const [sortByPrice, setSortByPrice] = useState(false);
  const [sortOrder, setSortOrder] = useState("ascending");
  const [selectedCategory, setSelectedCategory] = useState("all");
  if (isLoading || categoriesLoading) {
    return <p>Loading...</p>;
  }

  if (error || categoriesError) {
    return <h3>Error loading data</h3>;
  }

  const handleSortByPrice = () => {
    setSortByPrice(!sortByPrice);
    if (sortOrder === "ascending") {
      setSortOrder("descending");
    } else {
      setSortOrder("ascending");
    }
  };

  const handleFilterByCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="productList">
      <h2 id="title">Products</h2>
      <button id="sortButton" onClick={handleSortByPrice}>Sort by price</button>
      <select id="filterButton" onChange={(e) => handleFilterByCategory(e.target.value)}>
        <option value="all">All</option>
        {categoriesData.map((category, index) => (
          <option key={index} value={category}>
            {category
              ? category.charAt(0).toUpperCase() + category.slice(1)
              : ""}
          </option>
        ))}
      </select>
      <div className="productList_div">
        {data
          .slice()
          .filter(
            (product) =>
              selectedCategory === "all" ||
              product.category === selectedCategory
          )
          .sort((a, b) =>
            sortOrder === "ascending" ? a.price - b.price : b.price - a.price
          )
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
}

export default ProductList;
