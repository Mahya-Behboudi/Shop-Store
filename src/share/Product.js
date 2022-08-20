import React, { useContext } from 'react';
// function 
import { shorten  , isInCard ,quantityCounter} from '../helper/shorten';
// router dom
import { Link } from 'react-router-dom';
// context 
import { cardContext } from '../Contex/CardContextProvider';
// images
import trash from '../asserts/icons/trash-bin.svg';
const Product = ({productData}) => {
    const {state , dispatch} = useContext(cardContext);
    return (
        <div>
            <img src={productData.image} alt='' style={{width:'200px'}}/>
            <h3>{shorten(productData.title)}</h3>
            <p></p>
            <div>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div>
                    {isInCard(state,productData.id) ? 
                    <button onClick={()=> dispatch({type:"INCREASE", payload:productData})}>+</button> :
                    <button onClick={()=>dispatch({type:"ADD_ITEM" , payload:productData})}>Add to card</button>
                    
                    } 
                    
                        {quantityCounter(state,productData.id) > 1 && <button onClick={()=>dispatch({type:'DECREASE' ,payload:productData})}>-</button>}
                        {quantityCounter(state,productData.id) === 1 && <button onClick={()=>dispatch({type:'REMOVE_ITEM',payload:productData})}><img src={trash} alt='trash' style={{width:'15px'}}/></button>}

                </div>
            </div>
        </div>
    );
};

export default Product;