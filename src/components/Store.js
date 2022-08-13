import React, { useContext } from 'react';

//context
import { ProductContext } from '../contexts/ProductContextProvider';

const Store = () => {

    const products = useContext(ProductContext);


    return (
        <div>
            
        </div>
    );
};

export default Store;