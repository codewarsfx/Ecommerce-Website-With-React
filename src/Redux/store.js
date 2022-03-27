import { createStore } from "redux";

import { applyMiddleware,compose } from "redux";
import logger from "redux-logger";

import rootReducer from './root-reducer'

const middlewares=[logger]

const combinedmiddlewares = compose(applyMiddleware(...middlewares))


export const store = createStore(rootReducer,undefined,combinedmiddlewares)