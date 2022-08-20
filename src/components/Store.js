import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';

//Styles
import styles from "./Store.module.css";

//components
import Product from './shared/Product';
import Loading from './shared/Loading';

//Redux
import {fetchProducts} from "../redux/products/productsAction";


const Store = () => {

    const dispatch = useDispatch();
    const productsState = useSelector(state=> state.productsState);

    useEffect(()=>{
        dispatch(fetchProducts());
    },[])

    return (
        <div className={styles.container}>
            {
                productsState.loading ?
                <Loading/> :
                productsState.error ?
                    <h3>Something went wrong</h3> :
                    productsState.products.map(product => <Product 
                                                            key={product.id}
                                                            productData={product} 
                                                        />)
            }

        </div>
    );
};

export default Store;