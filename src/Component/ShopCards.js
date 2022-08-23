import React , {useContext} from 'react';
// contexts 
import { cardContext } from '../Contex/CardContextProvider';
// components
import Card from '../share/Card';
// react router dom 
import { Link } from 'react-router-dom';
// style
import style from './ShopCard.module.css'
const ShopCards = (props) => {
    const {state ,dispatch} = useContext(cardContext)
    return (
      <div className={style.container}>
        <div className={style.cardContainer}>
            {state.selectItems.map(item=><Card key={item.id} data={item}/>)}
        </div>
        {
            state.itemCounter > 0 &&
          <div className={style.payments}>
              <h3><span>Total items  </span>{state.itemCounter}</h3>
            <p><span>Total payments </span>{state.total} $</p>
            <div className={style.buttonContainer}>
                <button className={style.clear} onClick={()=>dispatch({type:'CHECKOUT'})}>Chech out </button>
                <button className={style.checkout} onClick={()=>dispatch({type:'CLEAR'})}>Clear</button>
            </div>
          </div>
        }

        {
            state.checkout && 
            <div className={style.complete}>
                <h3>cheched out  successfully !</h3> 
                <Link to="/products">Buy more </Link>   
            </div>
        }
        {
            !state.checkout && state.itemCounter ===0 &&
            <div className={style.complete}>
                <h3>Want to buy ?</h3>
                <Link to='/products'>need more ?</Link>
            </div>
        }
      
      </div>
    );
};

export default ShopCards;