import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css'
import shopIcon from '../../assets/icon/shop.svg'
import { useSelector } from 'react-redux';
const Navbar = () => {
    const item = useSelector(state => state.cartState)
    return (
        <div className={classes.container}>
            <div className={classes.navContainer}>
                    <Link to="/products" className={classes.productLink}>Products</Link>
                <div className={classes.iconContainer}>
                    <Link to="/cart"><img src={shopIcon} alt="shopIcon"/></Link>
                    <span>{item.itemsCounter}</span>
                </div> 
            </div>
        </div>
    );
};

export default Navbar