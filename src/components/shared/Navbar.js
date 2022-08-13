import React, { useContext } from 'react';
import { Link } from "react-router-dom";

//Icons
import { FiShoppingCart } from "react-icons/fi";

//Contexts
import { CartContext } from '../../contexts/CartContextProvider';

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div>
            <div>
                <Link to="/products">Products</Link>
                <div>
                    <Link to="/cart"><FiShoppingCart /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;