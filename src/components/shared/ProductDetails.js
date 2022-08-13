import React, {useContext} from 'react';
import { useParams } from "react-router-dom";

//Contexts
import { ProductContext } from '../../contexts/ProductContextProvider';
import { Link } from "react-router-dom";

const ProductDetails = () => {
    
    const params = useParams();
    const id = params.id;

    const data = useContext(ProductContext);
    const product = data[id -1];
    const {image, title, description, price, category} = product;

    return (
        <div>
            <img src={image} alt="prdoduct" />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>Category:</span> {category}</p>
                <div>
                    <span>{price} $</span>
                    <Link to="/products">Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;