import {all} from 'redux-saga/effects'
import { shopSaga } from './shop-saga/shopSaga'


export function* rootSaga(){
    yield all([shopSaga()])
}