import React, { useContext } from 'react';

//Styles
import styles from "./Store.module.css";

//components
import Product from './shared/Product';

//context
import { ProductContext } from '../contexts/ProductContextProvider';
import Loading from './shared/Loading';

const Store = () => {

    const products = useContext(ProductContext);


    return (
        <>
            {
                products.length ? 
                    <div className={styles.container}>
                        {
                            products.map(product => <Product 
                                                        key={product.id}
                                                        productData={product}
                                                    />)
                        }
                    </div>
                    :
                    <Loading />
            }
        </>
    );
};

export default Store;