import React , { useReducer} from 'react';
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
                    selectItems:[...newSelectedItems];
                }
    }
}


const CardContextProvider = () => {
    const [state , dispatch] =useReducer(cardReducer , initialization);
    return (
        <div>
            
        </div>
    );
};

export default CardContextProvider;