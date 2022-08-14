import React, { useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

//styles
import styles from "./ProductDetails.module.css";


const ProductDetails = () => {
    
    const params = useParams();
    const id = params.id;

    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => setData(response.data))
    }, [id])

    const {image, title, description, price, category} = data;


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