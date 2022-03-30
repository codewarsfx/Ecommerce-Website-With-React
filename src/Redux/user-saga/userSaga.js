import {all,call,put,takeLatest} from 'redux-saga/effects'
import { createUserDocument,signInUserWithEmailAndPassword,signInWIthGooglePopup,signUpwithUserNameandPassord,signUserOut,subscribeToFirebaseAuthService } from '../../Utils/firebase/firebaseUtils'
import { createDocumentAfterSignUp, createUserSignInFail, createUserSignInSuccess} from '../user/userAction'
import { userTypes } from '../user/userTypes'


//worker function

export function* storeUserAuthObject(userAuthObject,additionalDetails){
    try{
         const user = yield call(createUserDocument,userAuthObject,additionalDetails)
         
         yield put(createUserSignInSuccess({id:user.id,...user.data()}))      
    }
    catch(error){
        yield put(createUserSignInFail(error))
    }  
}

export function* onAuthChanges(){
    try{
           const userAuthObject = yield call(subscribeToFirebaseAuthService)
           if(!userAuthObject) return
           
            yield call(storeUserAuthObject,userAuthObject)
    }
    catch(error){
      yield  put(createUserSignInFail(error))
    }
}

export function* callSignInWithGoogle(){
    try{
           const {user}= yield call(signInWIthGooglePopup)
           yield call(storeUserAuthObject,user)
    }
    catch(error){
        yield put(createUserSignInFail(error))
    }
}


export function* callSignInWithEmailAndPassword({payload:{email,password}}){
    try{
           const {user} = yield call(signInUserWithEmailAndPassword,email,password)
           
           yield call(storeUserAuthObject,user)
    }
    catch(error){
        yield put(createUserSignInFail(error))
    } 

}


export function* callSignUpWithEmailAndPassword({payload:{email,password,displayName}}){
    try{
          const {user}= yield call(signUpwithUserNameandPassord,email,password)
          yield put(createDocumentAfterSignUp(user,displayName))
    }
    catch(error){
        yield put(createUserSignInFail(error))
    }
  
}



export function* callCreateUserDocumentOnSignUp({payload:{user,displayName}}){
    try{
            yield call(storeUserAuthObject,user,{displayName})
    }
    catch(error){
        yield put(createUserSignInFail(error))
    }
}

export function* callSignOutUser(){
    
  try{
        const user = yield call(signUserOut)
        yield put(createUserSignInSuccess(user))
  }catch(error){
      yield put(createUserSignInFail(error))
  }
  
}




//watcher sagas 
export function* listenUserSession(){
    yield takeLatest(userTypes.SETUSERSESSION, onAuthChanges)
}



export function* listenSignInWithGoogle(){
    yield takeLatest(userTypes.SETUSERSIGNINWITHGOOGLESTART,callSignInWithGoogle)
}



export function* listenSignInWithEmailAndPassword(){
    yield takeLatest(userTypes.SETUSERSIGNINWITHEMAILANDPASSWORDSTART,callSignInWithEmailAndPassword)
}


export function* listenCreateUserDocumentAfter(){
    yield takeLatest(userTypes.SETUSERSIGNUPSUCCESS,callCreateUserDocumentOnSignUp)
}




export function* listenSignUpWithEmailandPassword(){
    yield takeLatest(userTypes.SETUSERSIGNUPSTART,callSignUpWithEmailAndPassword)   
}


export function* listenSignOut(){
    yield takeLatest(userTypes.SETSIGNOUTSTART,callSignOutUser)
}


export function* userSaga(){
    
    yield all([call(listenUserSession),call(listenSignInWithGoogle),call(listenSignInWithEmailAndPassword),call(listenCreateUserDocumentAfter),    call(listenSignUpWithEmailandPassword),call(listenSignOut)])
}