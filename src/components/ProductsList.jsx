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

  return (
    <section className="productList">
      <h2>Products</h2>
      <button onClick={handleSortByPrice}>Sort by price</button>
      <div className="productList_div">
        {data
          .slice()
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
