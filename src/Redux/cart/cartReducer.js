
import { cartTypes } from "./cartType"

const initialState = {
    cartItems: [],
    isCartOpen : true
}


export const cartReducer = (state=initialState,action={})=>{
  const {type,payload} = action 
    switch (type) {
        case cartTypes.UPDATECARTITEMS:
          return  {...state,cartItems:payload}
        case cartTypes.isCartOpen:
          return {...state,isCartOpen:payload}
        default:
             return state
    }
    
}

