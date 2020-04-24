import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function productReducer(state = initialState.products, action) {
  switch (action.type) {
    case types.PRODUCTS_LOAD_SUCCESS:
      return action.payload;

    case types.PRODUCT_LOAD_COMMIT:
      return action.payload;

    case types.MARK_FAOURITE:
      debugger;
      state[action.payload.productId].isFavourite = true;
      return Object.assign({}, state);

    case types.UNMARK_FAOURITE:
      state[action.payload.productId].isFavourite = false;
      return Object.assign({}, state);

    case types.ADD_PRODUCT:
      debugger;
      state[action.payload.productId] = action.payload;
      return Object.assign({}, state);

    default:
      return state;
  }
}
