import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import classes from './Detail.module.css'
import { Link } from 'react-router-dom';

const Detail = () => {
    const productData = useSelector(state => state.productsState.products)
    console.log(productData)
    const prams = useParams()
    const id = prams.id
    const product = productData[id - 1]

    const {title,image,description, category, price} = product
    return (
        <div className={classes.container}>
            <img className={classes.image} src={image} alt={image}/>
            <div className={classes.textContainer}>
                <h3>{title}</h3>
                <p className={classes.description}>{description}</p>
                <p className={classes.category}><span>category :</span> {category}</p>
                <div className={classes.buttonContainer}>
                        <span className={classes.price}>price{price}$</span>
                        <Link to="/products">Back to shope</Link>
                </div>
            </div>
        </div>
    );
};

export default Detail;