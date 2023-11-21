import {createStore, compose, combineReducers, applyMiddleware} from "redux";
import {userReducer, menuReducer} from "./reducers";
import thunk from "redux-thunk";

const reducer = combineReducers({
    user: userReducer,
    menu: menuReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
