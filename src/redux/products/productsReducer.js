const initialState = {
    products :[],
    isLoading :false,
    error :""
}

const prodctReduser = (state=initialState, action) =>{
    switch(action.type){
        case 'FETCH_PRODUCTS_REQ':
            return{
                ...state,
                isLoading: true,
            }
        case 'FETCH_PRODUCTS_SUCCESS':
            return{
                ...state,
                products : action.payload,
                isLoading:false
            }
        case 'FETCH_PRODUCTS_FAIL':
            return{
                ...state,
                isLoading : false,
                error : action.payload
            }
        default:
            return state
    }

}

export default prodctReduser