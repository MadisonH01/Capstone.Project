import { NavLink } from "react-router-dom";
import "./styles/plantList.css";

function ProductCard({ product }) {
    const { product_id, img_url, title } = product;
  
    return (
      <NavLink to={`/products/${product_id}`}>
        <section className="productCard">
          <img src={img_url || product} />
          <h3>
            {title ? "Title:" : "Price"} {title || price}
          </h3>
        </section>
      </NavLink>
    );
  }
  
  export default ProductCard;