import { combineReducers } from "redux";
import PrdoctReducer from "./prodcutReducer";

const rootReducers = combineReducers({
    product: PrdoctReducer
})

export default rootReducers;  