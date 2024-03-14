//api
import { useGetProductsQuery } from "../redux/api";
//components
import ProductCard from "./ProductCard";
//react
import React, { useState } from "react";
//styles
//import "./styles/productList.css";

function ProductList({ token }) {
  const { data = {}, error, isLoading } = useGetProductsQuery(token);
  const [sortByPrice, setSortByPrice] = useState(false);
  const [sortOrder, setSortOrder] = useState("ascending");
  const [selectedCategory, setSelectedCategory] = useState("all");
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <h3>{error.data.message}</h3>;
  }

  const handleSortByPrice = () => {
    setSortByPrice(!sortByPrice);
    if (sortOrder === "ascending") {
      setSortOrder("descending");
    } else {
      setSortOrder("ascending");
    }
  };

  const handleFilterByCategory = () => {
    setSelectedCategory(category);
  }

  const category = ["electronics","jewelery","men's clothing","women's clothing"];

  return (
    <section className="productList">
      <h2>Products</h2>
      <button onClick={handleSortByPrice}>Sort by price</button>
      <select onChange={(e) => handleFilterByCategory(e.target.value)}>
        {category.map((category, index) => (
          <option key={index} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
      <div className="productList_div">
      {data
          .slice()
          .filter(product => selectedCategory === "all" || product.category === selectedCategory)
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
