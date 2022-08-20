import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

//Styles
import styles from "./Navbar.module.css";

//Icons
import { FiShoppingCart } from "react-icons/fi";


const Navbar = () => {

    const state = useSelector(state => state.cartState);

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