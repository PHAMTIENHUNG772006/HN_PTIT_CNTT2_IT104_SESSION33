import { combineReducers, createStore } from "redux";
import { ProductReducer } from "./reducers/ListProduct";
import { CartReducer } from './reducers/Cart'

const rootState = combineReducers({
    products : ProductReducer,
    cart : CartReducer
})

const store = createStore(rootState);

export default store;