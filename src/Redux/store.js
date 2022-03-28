import { createStore } from "redux";

import { applyMiddleware,compose } from "redux";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from './root-reducer'

const reduxPersisitConfig ={
    key:"root",
    storage,
    whitelist:["cart"]
}

const persistedReducer = persistReducer(reduxPersisitConfig,rootReducer)

const middlewares=[logger,thunk]

const combinedmiddlewares = compose(applyMiddleware(...middlewares))


export const store = createStore(persistedReducer,undefined,combinedmiddlewares)


export const persistedStore = persistStore(store)

