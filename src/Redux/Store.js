import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "./All_reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

export { store };
