import React from 'react';
import { shorten } from '../helper/shorten';

const Product = ({productData}) => {
    return (
        <div>
            <img src={productData.image} alt='' style={{width:'200px'}}/>
            <h3>{shorten(productData.title)}</h3>
            <p></p>
            <div>
                <a href=''>Details</a>
                <div>
                    <button>Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default Product;