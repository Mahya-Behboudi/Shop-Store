 const shorten =(para) => {
    const splitePara = para.split(" ");
    const newPara = `${splitePara[0]} ${splitePara[1]}`
    return newPara
}
const isInCard  = (state,id) => {
    const result =!!state.selectItems.find(item=>item.id === id)
    return result;

}
const quantityCounter=(state , id)=>{
    const index = state.selectItems.findIndex(item=>item.id === id); 
    if(index ===-1){
        return false
    }else {
        return state.selectItems[index].quantity;
    }
}
export {shorten, isInCard , quantityCounter};