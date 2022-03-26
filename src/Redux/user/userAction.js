import {userTypes} from './userTypes'
import {createAction} from '../../Utils/firebase/createAction'


export const setUserAccount = (userAccount)=>(
    createAction(userTypes.SETUSER,userAccount)
)