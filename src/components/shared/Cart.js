import React, { useContext } from 'react';

//styles
import styles from "./Cart.module.css";

//Contexts
import { CartContext } from '../../contexts/CartContextProvider';

//fucntions
import { shorten } from '../../helper/functions';

//Icons
import {FiTrash} from "react-icons/fi";

const Cart = ({data}) => {

    const { dispatch } = useContext(CartContext);

    const { image, title, price, quantity } = data;
 
    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt="product" />
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch({type: "DECREASE", payload: data})}>-</button> :
                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: data})}><FiTrash/></button>
                }
                <button onClick={() => dispatch({type: "INCREASE", payload: data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;