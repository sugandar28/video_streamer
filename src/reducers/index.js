import { combineReducers } from "redux";
import authReducers from "./authReducers";
import { reducer as formReducer } from "redux-form";
export default combineReducers({ authReducers, form: formReducer });
