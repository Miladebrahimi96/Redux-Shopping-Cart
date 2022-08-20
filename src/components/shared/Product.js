import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//styles
import styles from "./Product.module.css";

//Icons
import {FiTrash} from "react-icons/fi";

//Functions
import { shorten, isInCart, quantityCount } from '../../helper/functions';

//ACtions
import { addItem, removeItem, increase, decrease } from "../../redux/cart/cartAction";


const Product = ({productData}) => {

    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt={productData.title} style={{width:"200px"}}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price} $</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                    {
                        quantityCount(state, productData.id) === 1 &&
                        <button className={styles.smallButton} onClick={() => dispatch(removeItem(productData))}><FiTrash/></button>
                    }
                    {
                        quantityCount(state, productData.id) > 1 &&
                        <button className={styles.smallButton} onClick={() => dispatch(decrease(productData))}>-</button>
                    }
                    {
                        quantityCount(state, productData.id) > 0 &&
                        <span className={styles.counter}>{quantityCount(state, productData.id)}</span>
                    }
                    {
                        isInCart(state, productData.id) ?
                        <button className={styles.smallButton} onClick={() => dispatch(increase(productData))}>+</button> :
                        <button onClick={() => dispatch(addItem(productData))}>Add to Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;