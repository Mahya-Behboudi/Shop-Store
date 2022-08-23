import React, { useContext } from 'react';
// contexts 
import { cardContext } from '../Contex/CardContextProvider';
// functions 
import { shorten } from '../helper/shorten';
// images
import trash from '../asserts/icons/trash-bin.svg';
// style
import style from './Card.module.css';
const Card = (props) => {
    const { dispatch} = useContext(cardContext);
    const {image , title, price, quantity} = props.data
    return (
        <div className={style.container}>
            
                <img className={style.productImage} src={image} alt='clothes'/>
            
            <div className={style.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={style.quantity}>{quantity}</span>
            </div>
            <div className={style.buttonContainer}>
                {quantity > 1 ?
                    <button onClick={()=>dispatch({type:'DECREASE', payload:props.data})}>-</button>:
                    <button onClick={()=>dispatch({type:'REMOVE_ITEM',payload:props.data})}><img src={trash} alt="trash" style={{width:'20px'}}/></button>
                }
                {
                    <button onClick={()=>dispatch({type:'INCREASE' , payload:props.data})}>+</button>
                }
                {

                }
            </div>
        </div>
    );
};

export default Card;