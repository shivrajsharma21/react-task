import rootReducers from './reducers';
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhance = composeWithDevTools(applyMiddleware(thunk))
const store = createStore(rootReducers, composeEnhance)

export default store;