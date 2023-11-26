import React from 'react';
import classes from './Cart.module.css'
import trash from '../../assets/icon/trash.svg'
import { useDispatch } from 'react-redux';
import { shorterTitle} from '../../helper/helperfuctions';
import { decrease, increase, removeItem } from '../../redux/cart/cartReducer';

const Cart = (props) => {
    const {title, price, image,quantity } = props.item
    const dispatch = useDispatch()
    return (
        <div className={classes.container}>
        <img className={classes.productImage} src={image} alt={title} />
        <div className={classes.data}>
            <h3>{shorterTitle(title)}</h3>
            <p>{price}</p>
        </div>
        <div>
            <span className={classes.quantity}>{quantity}</span>
        </div>
        <div className={classes.buttonContainer}>
            {
                quantity > 1 ? 
                <button onClick={()=>dispatch(decrease(props.item))}>-</button>:
                <button onClick={()=> dispatch(removeItem(props.item))}><img src={trash} alt={trash} /></button>
            }
            <button onClick={()=>dispatch(increase(props.item))} >+</button>
        </div>
    </div>
    );
};

export default Cart;