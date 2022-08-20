import axios from "axios"

const fetchProductsRequest = () => {
    return {
        type: "FETCH_PRODUCTS_REQUEST"
    }
}
const fetchProductsSuccuss = products => {
    return {
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: products
    }
}
const fetchProductsFailure = errors => {
    return {
        type: "FETCH_PRODUCTS_FAILURE",
        payload: errors
    }
}

export const fetchProducts = () => {
    return () => {
        dispatch(fetchProductsRequest());
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                const products = response.data;
                dispatch(fetchProductsSuccuss(products));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchProductsFailure(errorMsg))
            })
    }
}