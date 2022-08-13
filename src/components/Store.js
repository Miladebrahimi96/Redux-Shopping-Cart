import React, { useContext } from 'react';

//components
import Product from './shared/Product';

//context
import { ProductContext } from '../contexts/ProductContextProvider';

const Store = () => {

    const products = useContext(ProductContext);


    return (
        <div>
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