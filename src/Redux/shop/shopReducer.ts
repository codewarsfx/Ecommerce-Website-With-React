import { shopCategory, shopTypes } from "./shopTypes";
import { categoryActions } from "./shopActions";


export type initialState = {
    readonly products:shopCategory[];
    readonly isLoading: boolean;
    error : Error | null;
}

const initialSate : initialState ={
    products:[],
    isLoading: false,
    error: null
}




export const shopReducer = (state=initialSate,action={} as categoryActions)=>{

    switch (action.type) {
        case shopTypes.SETSHOPDATASTART:
            return {...state,isLoading:true}
        case shopTypes.SETSHOPDATASUCCESS:{
            return {...state,isLoading:false,products:action.payload}
        }
        case shopTypes.SETSHOPDATAFAIL:{
            return {...state,isLoading:false,error:action.payload}
        }
        default:
            return state 
    }
    
}