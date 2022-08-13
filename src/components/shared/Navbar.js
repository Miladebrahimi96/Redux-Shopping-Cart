import React, { useContext } from 'react';
import { Link } from "react-router-dom";

//Styles
import styles from "./Navbar.module.css";

//Icons
import { FiShoppingCart } from "react-icons/fi";

//Contexts
import { CartContext } from '../../contexts/CartContextProvider';

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/cart"><FiShoppingCart /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;