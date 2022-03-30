import {all,call} from 'redux-saga/effects'
import { shopSaga } from './shop-saga/shopSaga'
import { userSaga } from './user-saga/userSaga'


export function* rootSaga(){
    yield all([call(shopSaga),call(userSaga)])
}