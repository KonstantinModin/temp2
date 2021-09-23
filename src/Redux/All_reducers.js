import products_reducer from "./Reducers";
import { combineReducers } from "redux";

export let rootReducer = combineReducers({
  products_reducer,
});
