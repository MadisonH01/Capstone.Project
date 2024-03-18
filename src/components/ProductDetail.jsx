import { useParams } from "react-router-dom";
//api query
import {
  useGetProductByIdQuery,
  useAddProductToCartMutation,
} from "../redux/api";
import CartItemCounter from "./CartItemCounter";
//styles
import "./styles/productDetail.css";

function ProductDetail({ token }) {
  const { id } = useParams();
  //const navigate = useNavigate();

  const { data = {}, error, isLoading } = useGetProductByIdQuery({ id, token });
  const [addProductToCart] = useAddProductToCartMutation();
  const handleAddToCart = async () => {
    try {
      await addProductToCart(id);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <h3>{error.data.message}</h3>;
  }

  if (data) {
    const { title, price, category, description, image } = data;
    return (
      <section className="padding">
        <h3>Price: {price}</h3>
        <img src={image || products} />
        <h2>
          {title ? "Title:" : "Category"} {title || category}
        </h2>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <CartItemCounter />
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
