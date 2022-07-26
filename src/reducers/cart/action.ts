import {
  Address,
  CartActionTypes,
  CartCoffee,
  PaymentMethodTypes,
} from './types'

export function addToCartAction(newCoffee: CartCoffee) {
  return {
    type: CartActionTypes.ADD_TO_CART,
    payload: {
      newCoffee,
    },
  }
}

export function removeFromCartAction(id: string) {
  return {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: { id },
  }
}

export function increaseCoffeeAction(id: string) {
  return {
    type: CartActionTypes.INCREASE_COFFEE,
    payload: { id },
  }
}

export function removeCoffeeAction(id: string) {
  return {
    type: CartActionTypes.REMOVE_COFFEE,
    payload: { id },
  }
}

export function selectPaymentMethodAction(paymentMethod: PaymentMethodTypes) {
  return {
    type: CartActionTypes.SELECT_PAYMENT_METHOD,
    payload: { paymentMethod },
  }
}

export function addAddressAction(address: Partial<Address>) {
  return {
    type: CartActionTypes.ADD_ADDRESS,
    payload: { address },
  }
}
