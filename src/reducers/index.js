import { combineReducers } from "redux";
import products from "./productReducer";
import user from "./userReducer";

const rootReducers = combineReducers({
  products,
  user
});

export default rootReducers;
