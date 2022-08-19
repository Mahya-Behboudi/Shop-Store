import React from 'react';
// function 
import { shorten } from '../helper/shorten';
// router dom
import { Link } from 'react-router-dom';
const Product = ({productData}) => {
    return (
        <div>
            <img src={productData.image} alt='' style={{width:'200px'}}/>
            <h3>{shorten(productData.title)}</h3>
            <p></p>
            <div>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div>
                    <button>Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default Product;