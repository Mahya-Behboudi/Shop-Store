import React , { createContext, useReducer} from 'react';
const initialization= {
    selectItems : [],
    itemCounter :0,
    total: 0,
    checkout:false,
}
const sumItems = items => {
    const itemCounter =items.reduce((total,product) => total + product.quantity , 0);
    const total = items.reduce((total , product) =>(total + product.price * product.quantity ),0)
    return{itemCounter,total}
    // console.log(total)
}
const cardReducer=(state,action)=> {
    console.log(state);
    switch(action.type) {
        case 'ADD_ITEM':
            if(!state.selectItems.find(item =>item.id === action.payload.id)) {
                state.selectItems.push({
                        ...action.payload,
                        quantity:1,
                    })
                }
                return {
                    ...state,
                    selectItems:[...state.selectItems],
                    ...sumItems(state.selectItems),
                    checkout:false
            }
        case 'REMOVE_ITEM':
                const newSelectedItems = state.selectItems.filter(item => item.id !== action.payload.id) 
                return {
                    ...state,
                    selectItems:[newSelectedItems]
                }
        case 'INCREASE':
            const indexI = state.selectItems.findIndex(item => item.id === action.payload.id);
            state.selectItems[indexI].quantity++;
            return {
                ...state,
                ...sumItems(state.selectItems)
            }
        case 'DECREASE':
            const indexD = state.selectItems.findIndex(item =>item.id === action.payload.id)
            state.selectItems[indexD].quantity--;
            return {
                ...state,
                ...sumItems(state.selectItems)
            }
        case 'CHECKOUT':
            return {
                selectItems : [],
                itemCounter :0,
                total: 0,
                checkout:true,
            }
        case 'CLEAR':
            return {
                selectItems : [],
                itemCounter :0,
                total: 0,
                checkout:false,
            }
        default:
            return state
    }
}
export const cardContext = createContext()

const CardContextProvider = ({children}) => {
    const [state , dispatch] =useReducer(cardReducer , initialization);
    return (
        <div>
            <cardContext.Provider value={{state, dispatch}}>
                {children}
            </cardContext.Provider>
        </div>
    );
};

export default CardContextProvider;