import React from 'react';
import { useContext } from 'react';
// contexts
import { cardContext } from '../Contex/CardContextProvider';
// router - dom
import { Link } from 'react-router-dom';
// images
import shopImage from '../asserts/icons/cart.svg'
const Navbar = () => {
    const {state} = useContext(cardContext)
    return (
        <div>
            <div>
                <Link to='/card'>Products</Link>
                <img src={shopImage} alt="shop basket"/>
                <span>{state.itemCounter}</span>
            </div> 
        </div>
    );
};

export default Navbar;