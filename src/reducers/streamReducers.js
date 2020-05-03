import _ from "lodash";
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "../actions/Types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.id };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.id };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.id };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
