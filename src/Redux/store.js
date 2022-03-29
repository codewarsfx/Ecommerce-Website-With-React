import { createStore } from "redux";

import { applyMiddleware,compose } from "redux";
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from "@redux-saga/core";
import storage from 'redux-persist/lib/storage'
import logger from "redux-logger";
// import thunk from "redux-thunk";

import rootReducer from './root-reducer'
import { rootSaga } from "./root-saga";

const reduxPersisitConfig ={
    key:"root",
    storage,
    whitelist:["cart"]
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(reduxPersisitConfig,rootReducer)

const middlewares=[process.env.NODE_ENV!=="production"&&logger,sagaMiddleware].filter(Boolean)

const combinedmiddlewares = compose(applyMiddleware(...middlewares))


export const store = createStore(persistedReducer,undefined,combinedmiddlewares)


export const persistedStore = persistStore(store)

sagaMiddleware.run(rootSaga)

