import {
  Address,
  CartCoffee,
  PaymentMethodTypes,
} from '../../reducers/cart/types'

export interface CartContextType {
  cart: CartCoffee[]
  address: Address | null
  paymentMethod: PaymentMethodTypes | null
  addToCart: (coffee: CartCoffee) => void
  removeFromCart: (coffeeId: string) => void
  increaseCoffee: (coffeeId: string) => void
  removeCoffee: (coffeeId: string) => void
  selectPaymentMethod: (paymentMethod: PaymentMethodTypes) => void
  addAddress: (address: Partial<Address>) => void
}
