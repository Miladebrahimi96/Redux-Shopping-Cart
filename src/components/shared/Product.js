import React, { useContext } from 'react';
import { Link } from "react-router-dom";

//Functions
import { shorten, isInCart } from '../../helper/functions';

//Contexts
import { CartContext } from '../../contexts/CartContextProvider';

const Product = ({productData}) => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div>
            <img src={productData.image} alt={productData.title} style={{width:"200px"}}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div>
                    {
                        isInCart(state, productData.id) ?
                        <button onClick={() => dispatch({type: "INCREASE", payload: productData})}>+</button> :
                        <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>Add to Cart</button>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Product;