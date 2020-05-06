import { combineReducers } from "redux";
import authReducers from "./authReducers";
import { reducer as formReducer } from "redux-form";
import streamReducer from "./streamReducers";
export default combineReducers({
  authReducers,
  form: formReducer,
  streams: streamReducer,
});
