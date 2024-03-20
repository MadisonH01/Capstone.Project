
import { useGetProductByIdQuery } from "../redux/api";
import CartItemCounter from "./CartItemCounter";

function CartItem({ productId, token }) {
  const {
    data = {},
    error,
    isLoading,
  } = useGetProductByIdQuery({ id: productId, token });
  console.log(data, isLoading, error, productId, token);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <h3>{error.data.message || "An error occurred."}</h3>;
  }

  if (data) {
    console.log(data);
    const { title, price, image } = data;
    return (
      <section className="padding">
        <h3>Price: ${price}</h3>
        <img src={image} />
        <h2>{title}</h2>
        <CartItemCounter />
      </section>
    );
  }
}

export default CartItem;
