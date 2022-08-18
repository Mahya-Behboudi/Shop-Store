import React, { useContext } from 'react';
// The context
import { ProductContex } from '../Contex/ProductContexProvider';
import Product from './share/Product';
const Store = () => {
    const products = useContext(ProductContex)
    return (
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
            {
                products.map(product =>  <Product key={product.id} productData={product}/>)
            }
            
        </div>
    );
};

export default Store;   