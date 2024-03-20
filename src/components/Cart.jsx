import { useGetUserCartQuery } from "../redux/api";
import CartItemCounter from "./CartItemCounter";
import Checkout from "./Checkout";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useGetProductByIdQuery } from "../redux/api";
import CartItem from "./CartItem";
import "./styles/cart.css";

function Cart({ token, userId }) {
  if (!userId) {
    return null;
  }

  const {
    data = {},
    error,
    isLoading,
  } = useGetUserCartQuery({ token, userId });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <h3>{error.data.message || "An error occurred."}</h3>;
  }

  if (data.length === 0) {
    return (
      <section>
        <h2>Your cart is empty!</h2>
      </section>
    );
  }

  if (data) {
    // product.productId
    return (
      <section>
        <h1 id="title"> Your cart </h1>
        {data[0].products.map((product) => (
          <CartItem
            key={product.productId}
            productId={product.productId}
            token={token}
          />
        ))}
        <Link to="/checkout">
          <button id="checkout-btn">Checkout</button>
        </Link>
      </section>
    );
  }
}

export default Cart;
