import React, {useContext} from 'react';
import {ProductContex} from '../Contex/ProductContexProvider';
import { Link } from 'react-router-dom';
// style
import style from './productDetails.module.css';
const ProductDetails = (props) => {
    const data = useContext(ProductContex);
    const id = props.match.params.id;
    const product = data[id - 1];
    // const {image ,price , description , category , title} = product;
    return (
        <div className={style.container}>
            <img className={style.image} src={product.image} alt='product'/>
            <div className={style.textContainer}>
                <h3>{product.title}</h3>
                <p className={style.description}>{product.description}</p>
                <p className={style.category}><span>category</span>{product.category}</p>
                <div className={style.buttonContainer}>
                    <span className={style.price}>{product.price} $</span>
                    <Link to='/product'> back to product</Link> 
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;