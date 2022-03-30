import { userTypes } from './userTypes';

export {userTypes} from './userTypes'

const initialSate = {
    currentUser:null,
    isLoading:false,
    error:null
}


export const userReducer = (state=initialSate,action={})=>{
    const {type,payload} = action
    switch (type) {
        case userTypes.SETUSER:
            return {...state,currentUser:payload}
        case userTypes.SETUSERSIGNINSUCCESS:
        case userTypes.SETSIGNOUTSUCCESS:
            return {...state,currentUser:payload}
        case userTypes.SETUSERSIGNINFAIL:
        case userTypes.SETSIGNOUTFAIL:
             return {...state,error: payload}
    
        default:
            return state
    }
    
}
