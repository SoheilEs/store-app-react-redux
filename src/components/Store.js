import React, { useEffect } from 'react';
import Product from './shared/Product';
import { fetchProducts } from '../redux/products/productsAction';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Store.module.css'
const Store = () => {
    const productsData = useSelector( state => state.productsState)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(!productsData.products.length) dispatch(fetchProducts())
    },[])
    return (
        <div className={classes.container}>
            {
                productsData.isLoading ? <h1>Loading....</h1> :
                productsData.error ? <p>{productsData.error}</p> :
                productsData.products.map(item => <Product key={item.id} item={item} />)
            }
            
        </div>
    );
};

export default Store;