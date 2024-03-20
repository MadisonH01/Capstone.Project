import React from "react";
import { useParams } from "react-router-dom";
//api query
import { useGetProductByIdQuery, useUpdateCartMutation } from "../redux/api";
import CartItemCounter from "./CartItemCounter";
//styles
import "./styles/productDetail.css";

function ProductDetail({ token }) {
  const { id } = useParams();

  const { data = {}, error, isLoading } = useGetProductByIdQuery({ id, token });
  //cartId, body
  const [updateCart] = useUpdateCartMutation();

  const handleAddToCart = async (quantity) => {
    try {
      const body = {
        productId: id,
        quantity: quantity,
      };
      await updateCart(body);
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <h3>{error.data.message || "An error occurred."}</h3>;
  }

  if (data) {
    const { title, price, category, description, image } = data;
    return (
      <section className="padding">
        <h3>Price: ${price}</h3>
        <img src={image || products} />
        <h2>
          {title ? "Title:" : "Category"} {title || category}
        </h2>
        <button id="checkoutButton" onClick={handleAddToCart}>Add to Cart</button>
        <CartItemCounter id={id} updateCart={updateCart} />
        <h4>Description: {description}</h4>
      </section>
    );
  }

  return (
    <section>
      <h3>Not Found!</h3>
    </section>
  );
}

export default ProductDetail;
