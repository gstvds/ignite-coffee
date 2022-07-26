export enum CartActionTypes {
  ADD_TO_CART = 'cart/ADD_TO_CART',
  REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART',
  INCREASE_COFFEE = 'cart/INCREASE_COFFEE',
  REMOVE_COFFEE = 'cart/REMOVE_COFFEE',
  SELECT_PAYMENT_METHOD = 'cart/SELECT_PAYMENT_METHOD',
  ADD_ADDRESS = 'cart/ADD_ADDRESS',
}

export interface Coffee {
  id: string
  title: string
  description: string
  tags: string[]
  imageSource: string
  price: number
}

export interface CartCoffee extends Coffee {
  quantity: number
}

export interface Address {
  postCode: string
  street: string
  number: string
  additional: string
  neighbourhood: string
  city: string
  state: string
}

export type PaymentMethodTypes = 'credit_card' | 'debit_card' | 'money'

export interface CartState {
  cart: CartCoffee[]
  address: Address | null
  paymentMethod: PaymentMethodTypes | null
}

export interface CartReducerAction {
  type: CartActionTypes
  payload?: any
}
