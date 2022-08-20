import React from 'react';
import { useDispatch } from 'react-redux/es/exports';

//ACTIONS
import { removeItem, decrease, increase } from '../../redux/cart/cartAction';

//styles
import styles from "./Cart.module.css";


//fucntions
import { shorten } from '../../helper/functions';

//Icons
import {FiTrash} from "react-icons/fi";

const Cart = ({data}) => {

    const dispatch = useDispatch()

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
                    <button onClick={() => dispatch(decrease(data))}>-</button> :
                    <button onClick={() => dispatch(removeItem(data))}><FiTrash/></button>
                }
                <button onClick={() => dispatch(increase(data))}>+</button>
            </div>
        </div>
    );
};

export default Cart;