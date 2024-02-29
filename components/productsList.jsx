//api
import { useGetProductsQuery } from "../redux/api";
//components
import ProductCard from "./ProductCard";
//styles
import "./styles/ProductList.css";

function ProductList({ token }) {
  const { data = {}, error, isLoading } = useGetProductsQuery(token);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <h3>{error.data.message}</h3>;
  }

  return (
    <section className="productList">
      <h2>Products</h2>
      <div className="productList_div">
        {data &&
          data.products.map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))}
      </div>
    </section>
  );
}

export default ProductList;
