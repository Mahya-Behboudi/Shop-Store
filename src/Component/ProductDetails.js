import React, {useContext} from 'react';
import {ProductContex} from '../Contex/ProductContexProvider';
import { Link } from 'react-router-dom';

const ProductDetails = (props) => {
    const data = useContext(ProductContex);
    const id = props.match.params.id;
    const product = data[id - 1];
    // const {image ,price , description , category , title} = product;
    return (
        <div>
            <img src={product.image} alt='product'/>
            <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p><span>category</span>{product.category}</p>
                <div>
                    <span>{product.price} $</span>
                    <Link to='/product'> back to product</Link> 
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;