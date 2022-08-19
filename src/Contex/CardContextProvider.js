import React , { createContext, useReducer} from 'react';
const initialization= {
    selectItems : [],
    itemCounter :0,
    total: 0,
    checkout:false,
}
const cardReducer=(state,action)=> {
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
                selectItems:[...state.selectItems]
            }
        case 'REMOVE_ITEM':
                const newSelectedItems = state.selectItems.filter(item => item.id !== action.payload.id) 
                return {
                    ...state,
                    selectItems:[...newSelectedItems]
                }
        case 'INCREASE':
            const indexI = state.selectItems.findIndex(item => item.id === action.payload.id);
            state.selectItems[indexI].quantity++;
            return {
                ...state
            }
        case 'DECREASE':
            const indexD = state.selectItems.findIndex(item =>item.id === action.payload.id)
            state.selectItems[indexD].quantity--;
            return {
                ...state,
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