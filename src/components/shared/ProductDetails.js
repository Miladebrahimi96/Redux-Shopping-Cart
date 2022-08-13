import React, {useContext} from 'react';
import { useParams } from "react-router-dom";

//styles
import styles from "./ProductDetails.module.css";

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
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="prdoduct" />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category:</span> {category}</p>
                <div className={styles.buttonContainer}>
                    <span>{price} $</span>
                    <Link to="/products">Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;