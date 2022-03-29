import {call,put,all,takeLatest} from 'redux-saga/effects'
import { getCollectionDataFromFirebase } from '../../Utils/firebase/firebaseUtils'
import { createSetDataFail, createSetShopDataSuccess } from '../shop/shopActions'
import { shopTypes } from '../shop/shopTypes'


//worker saga. does the api call and either dispatches a success or fail action type 

export function* shopSagaDataGet(){
    
    try{
        const shopData = yield call(getCollectionDataFromFirebase,'categories')
        yield put(createSetShopDataSuccess(shopData))
      
    }catch(error){
        
        yield put(createSetDataFail(error))
    }
        
}


//watcher saga ...watches for when the action to start get shop data is diapatched
export function* shopSagaGetDataIntiate(){
    yield takeLatest(shopTypes.SETSHOPDATASTART, shopSagaDataGet)
}




export function* shopSaga(){
    yield all([shopSagaGetDataIntiate()])
}