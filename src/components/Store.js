import React, { useContext } from 'react';

//Styles
import styles from "./Store.module.css";

//components
import Product from './shared/Product';

//context
import { ProductContext } from '../contexts/ProductContextProvider';

const Store = () => {

    const products = useContext(ProductContext);


    return (
        <div className={styles.container}>
            {
                products.map(product => <Product 
                                            key={product.id}
                                            productData={product}
                                        />)
            }
        </div>
    );
};

export default Store;