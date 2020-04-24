import * as types from "./actionTypes";

export function saveUserDetails(userObj) {
  return {
    type: types.USER_SAVE_SUCCESS,
    payload: userObj
  };
}
