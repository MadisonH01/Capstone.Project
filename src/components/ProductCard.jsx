import { NavLink } from "react-router-dom";
//import "./styles/plantList.css";

function ProductCard({ product }) {
    const { id, image, title } = product;
  
    return (
      <NavLink to={`/products/${id}`}>
        <section className="productCard">
          <img src={image || product} />
          <h3>
            {title ? "Title:" : "Price"} {title || price}
          </h3>
        </section>
      </NavLink>
    );
  }
  
  export default ProductCard;