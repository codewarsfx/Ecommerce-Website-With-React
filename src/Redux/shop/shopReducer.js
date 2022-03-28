import { shopTypes } from "./shopTypes";

const initialSate ={
    products:[],
    isLoading: false,
    error: null
}

export const shopReducer = (state=initialSate,action={})=>{
    const {type,payload} =action
    switch (type) {
        case shopTypes.SETSHOPDATASTART:
            return {...state,isLoading:true}
        case shopTypes.SETSHOPDATASUCCESS:{
            return {...state,isLoading:false,products:payload}
        }
        case shopTypes.SETSHOPDATAFAIL:{
            return {...state,isLoading:false,error:payload}
        }
        default:
            return state 
    }
    
}