import { ADD_TO_CART, CART_REMOVED } from "../ActionType/ActionType"

export const addToCart = (data) => {
  return {
    type : ADD_TO_CART,
    payload : data
  }
}

export const cartRemoved = (data) => {
  return {
    type : CART_REMOVED,
    payload : data
  }
}