import { shopTypes } from "./shopTypes";

const initialSate ={
    products:[]
}

export const shopReducer = (state=initialSate,action={})=>{
    
    switch (action.type) {
        case shopTypes.SETSHOPDATA:
            return {...state,products:action.payload}
        default:
            return state 
    }
    
    
}