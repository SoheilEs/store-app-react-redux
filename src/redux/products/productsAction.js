import axios from "axios"

const fetchProductsRequst = () =>{
    return{
        type: 'FETCH_PRODUCTS_REQ'
    }
}
const fetchProductsSuccess = (products) =>{
    return{
        type:'FETCH_PRODUCTS_SUCCESS',
        payload : products
    }
}
const fetchProductsFailure = (error) => {
    return{
        type : 'FETCH_PRODUCTS_FAIL',
        payload : error
    }
}

const fetchProducts = () => {
    return (dispatch) => {
         dispatch(fetchProductsRequst())
         axios.get('https://fakestoreapi.com/products')
                .then( res => {
                        const products = res.data
                        dispatch(fetchProductsSuccess(products))
                    } )
                .catch(error => dispatch(fetchProductsFailure(error.message)))
    }
}

export {fetchProducts}