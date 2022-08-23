import React, { useContext } from 'react';
// function 
import { shorten  , isInCard ,quantityCounter} from '../helper/shorten';
// router dom
import { Link } from 'react-router-dom';
// context 
import { cardContext } from '../Contex/CardContextProvider';
// images
import trash from '../asserts/icons/trash-bin.svg';
// style
import style from './Product.module.css';
const Product = ({productData}) => {
    const {state , dispatch} = useContext(cardContext);
    return (
        <div className={style.container}>
            <img className={style.cardImage} src={productData.image} alt='' style={{width:'200px'}}/>
            <h3>{shorten(productData.title)}</h3>
            <p></p>
            <div className={style.linkContainer}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div className={style.buttonContainer}>
                    {isInCard(state,productData.id) ? 
                    <button className={style.smallButton} onClick={()=> dispatch({type:"INCREASE", payload:productData})}>+</button> :
                    <button className={style.add} onClick={()=>dispatch({type:"ADD_ITEM" , payload:productData})}>Add to card</button>
                    
                    } 
                     
                        {quantityCounter(state,productData.id) > 1 && <button className={style.smallButton} onClick={()=>dispatch({type:'DECREASE' ,payload:productData})}>-</button>}
                        {quantityCounter(state,productData.id) === 1 && <button className={style.smallButton} onClick={()=>dispatch({type:'REMOVE_ITEM',payload:productData})}><img src={trash} alt='trash' style={{width:'15px'}}/></button>}

                </div>
            </div>
        </div>
    );
};

export default Product;