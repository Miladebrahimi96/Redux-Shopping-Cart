import React, { useContext } from 'react';
import { Link } from "react-router-dom";

//styles
import styles from "./Product.module.css";

//Icons
import {FiTrash} from "react-icons/fi";

//Functions
import { shorten, isInCart, quantityCount } from '../../helper/functions';

//Contexts
import { CartContext } from '../../contexts/CartContextProvider';

const Product = ({productData}) => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt={productData.title} style={{width:"200px"}}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                    {
                        quantityCount(state, productData.id) === 1 &&
                        <button className={styles.smallButton} onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}><FiTrash/></button>
                    }
                    {
                        quantityCount(state, productData.id) > 1 &&
                        <button className={styles.smallButton} onClick={() => dispatch({type: "DECREASE", payload: productData})}>-</button>
                    }
                    {
                        isInCart(state, productData.id) ?
                        <button className={styles.smallButton} onClick={() => dispatch({type: "INCREASE", payload: productData})}>+</button> :
                        <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;