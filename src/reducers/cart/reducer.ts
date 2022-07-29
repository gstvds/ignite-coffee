import { produce } from 'immer'

import { CartActionTypes, CartReducerAction, CartState } from './types'

export function cartReducer(state: CartState, action: CartReducerAction) {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART: {
      return produce(state, (draft) => {
        const coffeeIndex = state.cart.findIndex(
          (coffee) => coffee.id === action.payload.newCoffee.id,
        )
        // If the coffee isn't already in the cart, add it.
        if (coffeeIndex < 0) {
          draft.cart.push(action.payload.newCoffee)
        } else {
          draft.cart[coffeeIndex].quantity += action.payload.newCoffee.quantity
        }
      })
    }
    case CartActionTypes.REMOVE_FROM_CART: {
      return produce(state, (draft) => {
        draft.cart = draft.cart.filter(
          (coffee) => coffee.id !== action.payload.id,
        )
      })
    }
    case CartActionTypes.INCREASE_COFFEE: {
      const coffeeIndex = state.cart.findIndex(
        (coffee) => coffee.id === action.payload.id,
      )
      if (coffeeIndex < 0) return state
      return produce(state, (draft) => {
        draft.cart[coffeeIndex].quantity += 1
      })
    }
    case CartActionTypes.REMOVE_COFFEE: {
      const coffeeIndex = state.cart.findIndex(
        (coffee) => coffee.id === action.payload.id,
      )
      if (coffeeIndex < 0) return state
      return produce(state, (draft) => {
        const currentQuantity = draft.cart[coffeeIndex].quantity

        // If current quantity is equal 1, removing a unit should remove coffee from cart
        if (currentQuantity === 1) {
          draft.cart = draft.cart.filter(
            (coffee) => coffee.id !== action.payload.id,
          )
          // Otherwise, remove just a unit
        } else {
          draft.cart[coffeeIndex].quantity -= 1
        }
      })
    }
    case CartActionTypes.SELECT_PAYMENT_METHOD: {
      return produce(state, (draft) => {
        draft.paymentMethod = action.payload.paymentMethod
      })
    }
    case CartActionTypes.ADD_ADDRESS: {
      return produce(state, (draft) => {
        draft.address = {
          ...state.address,
          ...action.payload.address,
        }
      })
    }
    default:
      return state
  }
}
