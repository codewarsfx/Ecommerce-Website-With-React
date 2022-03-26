import { userTypes } from './userTypes';

export {userTypes} from './userTypes'

const initialSate = {
    currentUser:null,
    setUser: ()=> null
}


export const userReducer = (state=initialSate,action)=>{
    
    switch (action.type) {
        case userTypes.SETUSER:
            return {...state,currentUser:action.payload}
    
        default:
            return state
    }
    
}
