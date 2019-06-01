import { applyMiddleware, createStore ,compose} from 'redux';

import reducer from "../reducer/mainReducer";

import thunk from "thunk";


const composer = window.__REDUX_DEVTOOLS_EXTENSION__  || compose;

const store = createStore(reducer,
compose(applyMiddleware(...thunk))

);


export default store;