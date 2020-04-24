import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function productReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.USER_SAVE_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
