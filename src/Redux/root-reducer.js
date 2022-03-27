import { combineReducers } from "redux";
import { cartReducer } from "./cart/cartReducer";
import { shopReducer } from "./shop/shopReducer";
import {userReducer} from "./user/userReducer"


const rootReducer = combineReducers({
    user: userReducer,
    shop:shopReducer,
    cart: cartReducer
})

export default rootReducer