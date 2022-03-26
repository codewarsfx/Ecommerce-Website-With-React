import { combineReducers } from "redux";
import { shopReducer } from "./shop/shopReducer";
import {userReducer} from "./user/userReducer"


const rootReducer = combineReducers({
    user: userReducer,
    shop:shopReducer
})

export default rootReducer