import React from 'react';
import { useContext } from 'react';
// contexts
import { cardContext } from '../Contex/CardContextProvider';
// router - dom
import { Link } from 'react-router-dom';
// images
import shopImage from '../asserts/icons/cart.svg'
// style module 
import style from './Navbar.module.css';
const Navbar = () => {
    const {state} = useContext(cardContext)
    return (
        <div className={style.mainContainer}>
            <div className={style.container}>
                <Link className={style.productLink} to='/products'>Products</Link>
                <div className={style.iconContainer}>
                    <Link to='/cards'><img src={shopImage} alt="shop basket"/></Link>
                    <span>{state.itemCounter}</span>
                </div>
            </div> 
        </div>
    );
};

export default Navbar;