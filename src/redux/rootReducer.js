import { combineReducers } from "redux";
import prodctReduser from "./products/productsReducer";
import cartReducer from "./cart/cartAction";
export const rootReducer = combineReducers({
    productsState : prodctReduser,
    cartState : cartReducer
})