import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './shared/Cart';
import { Link } from 'react-router-dom';
import classes from './ShopCart.module.css' 
import { checkout, clear } from '../redux/cart/cartReducer';

const ShopCart = () => {
    const state = useSelector(state => state.cartState)
    const dispatch = useDispatch()
    console.log(state)

    return (
        <div className={classes.container}>
        <div className={classes.cartContainer}>
            {state.selecteditems.map(item=> <Cart key={item.id} item={item}/>)}
        </div>
    {
        state.itemsCounter > 0 && 
        <div className={classes.payments}>
            <p><span>Total Items: </span>{state.itemsCounter}</p>
            <p><span>Total Paymeants: </span>{state.total}</p>
            <div className={classes.buttonContainer}>
                <button className={classes.clear} onClick={()=>dispatch(clear())}>Clear</button>
                <button className={classes.checkout} onClick={()=>dispatch(checkout())}>Check Out</button>
            </div>
        </div>

    }
    {
        !state.checkout && state.itemsCounter===0 &&
        <div className={classes.complete}>
            <h3>Want to buy?</h3>
            <Link to="/products" >Go to shop</Link>
        </div>
    }
    {
        state.checkout && 
        <div className={classes.complete}>
            <h3>Successfully Checked Out</h3>
            <Link to="/products" >Buy More</Link>
        </div>
    }
    </div>
    );
};

export default ShopCart;