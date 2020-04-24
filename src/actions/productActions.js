import * as types from "./actionTypes";

export const loadProducts = () => {
  return {
    type: types.PRODUCTS_LOAD_SUCCESS,
    payload: [],
    meta: {
      offline: {
        //effect: { url: window.location.origin + "/productsList", method: "GET" },
        effect: { url: "http://localhost:2000/productsList", method: "GET" },
        commit: { type: types.PRODUCT_LOAD_COMMIT }
      }
    }
  };
};

export const markFavourite = productId => {
  return {
    type: types.MARK_FAOURITE,
    payload: { productId: productId }
  };
};

export const unMarkFavourite = productId => {
  return {
    type: types.UNMARK_FAOURITE,
    payload: { productId: productId }
  };
};

export function addProduct(prodObj) {
  return {
    type: types.ADD_PRODUCT,
    payload: prodObj
  };
}
