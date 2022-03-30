import {userTypes} from './userTypes'
import {createAction} from '../../Utils/firebase/createAction'


export const setUserAccount = (userAccount)=>(
    createAction(userTypes.SETUSER,userAccount)
)

export const creatUserSessionAction = ()=> createAction(userTypes.SETUSERSESSION)

export const createUserSignInFail = (error)=> createAction(userTypes.SETUSERSIGNINFAIL,error)

export const createUserSignInSuccess = (userAccount)=> createAction(userTypes.SETUSERSIGNINSUCCESS,userAccount)


export const createGoogleSignInStart = ()=> createAction(userTypes.SETUSERSIGNINWITHGOOGLESTART)

export const creatSignInWIthEmailAndPassword = (email,password)=> createAction(userTypes.SETUSERSIGNINWITHEMAILANDPASSWORDSTART,{email,password})


export const createSignUpStart = (email,password,displayName)=>createAction(userTypes.SETUSERSIGNUPSTART,{email,password,displayName})


export const createDocumentAfterSignUp = (user,displayName)=>createAction(userTypes.SETUSERSIGNUPSUCCESS,{user,displayName})

export const createUserSignOutStart = ()=>createAction(userTypes.SETSIGNOUTSTART)


export const createUserSignOutSuccess =(user)=> createAction(userTypes.SETSIGNOUTSUCCESS,user)

export const createUserSignOutFail = (error)=> createAction(userTypes.SETSIGNOUTFAIL,error)