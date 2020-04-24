import * as actions from './productActions'
import * as types from './actionTypes'

describe('Product Actions', () => {
  it('should create an action to add a product', () => {
    const prodObj = {
        "productId": 1,
        "productName": "Long Sleeve Shirt",
        "category": "Tops",
        "price": "45$",
        "isAvailable": true,
        "description": "Covers full sleeve",
        "image": "shirt.png",
        "isFavourite": false
      }
    const expectedAction = {
      type: types.ADD_PRODUCT,
      payload: prodObj
    }
    expect(actions.addProduct(prodObj)).toEqual(expectedAction)
  })
})