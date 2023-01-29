import changeTheNumber from "./reducer.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber:changeTheNumber
})
export default rootReducer;