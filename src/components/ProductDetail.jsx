import { useNavigate, useParams } from "react-router-dom";
//api query
import { useGetProductByIdQuery } from "../redux/api";
//styles
//

function ProductDetail({ token }) {
    const { id } = useParams();
    //const navigate = useNavigate();
    const {  data = {}, error, isLoading } = useGetProductByIdQuery({ id, token });
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
            <h4>{description}</h4>
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