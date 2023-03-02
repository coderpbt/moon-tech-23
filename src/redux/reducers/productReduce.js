import { ADD_TO_CART, CART_REMOVED } from "../ActionType/ActionType";

const initaileState = {
  cart : []
}


const productReducer = (state = initaileState, action) => {
  const selectedProduct = state.cart.find(product => product._Id === action.payload._Id)
  switch (action.type) {
    case ADD_TO_CART:
      if (selectedProduct) {
        const newCart = state.cart.filter(product => product._Id !== selectedProduct._Id)
        selectedProduct.quantity += 1
        return {
          ...state,
          cart : [...newCart, selectedProduct]
        }
      }
      return {
        ...state,
        cart : [...state.cart, {...action.payload, quantity : 1}]
      };
      case CART_REMOVED:
        if (selectedProduct.quantity > 1) {
          const newCart = state.cart.filter(product => product._Id !== selectedProduct._Id)
          selectedProduct.quantity -= 1
          return {
            ...state,
            cart : [...newCart, selectedProduct]
          }
        }
       
      return {
        ...state,
        cart : state.cart.filter(product => product._Id !== action.payload._Id)
      };
    default:
      return state
  }
  
}

export default productReducer;