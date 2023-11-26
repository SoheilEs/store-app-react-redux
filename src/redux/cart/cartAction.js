const intailState ={
    selecteditems :[],
    itemsCounter:0,
    total:0,
    checkout:false,
}
const sumItems = items =>{
    const itemsCounter = items.reduce((total, product)=>total + product.quantity ,0)
    const total = items.reduce((total,product)=> total + product.price * product.quantity,0).toFixed(2)
    return {
        itemsCounter,
        total
    }
}
const cartReducer = (state=intailState, action)=>{

    switch(action.type){
        case"ADD_ITEM":
            if(!state.selecteditems.find(item => item.id === action.payload.id)){
                state.selecteditems.push({
                    ...action.payload,
                    quantity:1
                })
            }
            return { 
                ...state,
                selecteditems : [...state.selecteditems],
                ...sumItems(state.selecteditems),
                checkout:false
            }
        case "REMOVE_ITEM":
            const newSeletedItems = state.selecteditems.filter(item => item.id !== action.payload.id)
            return{
                ...state,
                selecteditems : [...newSeletedItems],
                ...sumItems(newSeletedItems),
            }
        case "INCREASE":
            const indexItem = state.selecteditems.findIndex(item => item.id === action.payload.id)
            state.selecteditems[indexItem].quantity++;
            return{
                ...state,
                ...sumItems(state.selecteditems)
            }
        case "DECREASE":
            const indexItemD= state.selecteditems.findIndex(item => item.id === action.payload.id)
            state.selecteditems[indexItemD].quantity--;
            return{
                ...state,
                ...sumItems(state.selecteditems),
            }
        case "CHECKOUT":
            return{
                selecteditems :[],
                itemsCounter:0,
                total:0,
                checkout:true,
            }
        case "CLEAR":
            return{
                selecteditems :[],
                itemsCounter:0,
                total:0,
                checkout:false,
            }
        default :
             return state
    }
}
export default cartReducer