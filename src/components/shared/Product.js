import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Products.module.css'
import { shorterTitle, isInCart, quantityCount } from '../../helper/helperfuctions';
import { useDispatch, useSelector } from 'react-redux';
import trashIcone from '../../assets/icon/trash.svg'
import { addItem, decrease, increase, removeItem } from '../../redux/cart/cartReducer';
const Product = (props) => {
    const {id, title, price , image} = props.item
    const state = useSelector(state => state.cartState)

    const dispatch = useDispatch()
    return (
        <div className={classes.container}>
            <img className={classes.cardImage} src={image} alt={title}/>
            <h3>title: {shorterTitle(title)}</h3>
            <p>price:{price} </p>
            
            <div className={classes.linkContainer}>
                <Link to={`/products/${id}`}>details</Link>
                <div className={classes.buttonContainer}>
                    {quantityCount(state,id) > 1 && <button className={classes.smallButton} onClick={()=>dispatch(decrease(props.item))}>-</button>}
                    {quantityCount(state,id) === 1 && <button className={classes.smallButton} onClick={()=>dispatch(removeItem(props.item))}><img src={trashIcone} alt="trash"/></button>}
                    {quantityCount(state,id) >0 && <span className={classes.counter}>{quantityCount(state,id)}</span>}
                    {
                        isInCart(state, id) ?
                        <button className={classes.smallButton} onClick={()=>dispatch(increase(props.item))} >+</button>:
                        <button onClick={()=>dispatch(addItem(props.item))}>ADD To Cart</button>
                    }
                </div>
       
            </div>
        </div>
    );
};

export default Product