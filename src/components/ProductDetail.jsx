import { useNavigate, useParams } from "react-router-dom";
//api query
import { useGetProductByIdQuery } from "../redux/api";
//styles
//

function ProductDetail({ token }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const {  data = {}, error, isLoading } = useGetProductByIdQuery({ id, token });

    if (data?.product) {
        const { title, price, category, description, img_url } = data?.product;
        return (
            <section className="padding">
                <h3>Price: {price}</h3>
                <img src={img_url || products} />
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