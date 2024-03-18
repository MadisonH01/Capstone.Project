import { useGetUserCartQuery } from "../redux/api";
import CartItemCounter from "./CartItemCounter";

function Cart({ userId, token }) {
  const {
    data = {},
    error,
    isLoading,
  } = useGetUserCartQuery({ token, userId });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <h3>{error.data.message}</h3>;
  }

  if (data) {
    const { title, price, image } = data;
    return (
      <section className="padding">
        <h3>Price: {price}</h3>
        <img src={image || products} />
        <h2>
          {title ? "Title:" : "Category"} {title || category}
        </h2>
      </section>
    );
  }

  return (
    <section className="padding">
      <h2>Your cart!</h2>
      <button>Checkout</button>
    </section>
  );
}

export default Cart;
