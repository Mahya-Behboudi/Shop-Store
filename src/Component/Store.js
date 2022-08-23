import React, { useContext } from 'react';
// The context
import { ProductContex } from '../Contex/ProductContexProvider';
import Product from '../share/Product';
// style
import style from './Store.module.css';
const Store = () => {
    const products = useContext(ProductContex)
    return (
        <div className={style.container}>
            {
                products.map(product =>  <Product key={product.id} productData={product}/>)
            }
            
        </div>
    );
};

export default Store;   