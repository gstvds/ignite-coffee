import {
  createContext,
  useContext,
  useEffect,
  ReactNode,
  useReducer,
} from 'react'

import { CartContextType } from './types'
import {
  Address,
  CartCoffee,
  PaymentMethodTypes,
} from '../../reducers/cart/types'

import { cartReducer } from '../../reducers/cart/reducer'
import {
  addAddressAction,
  addToCartAction,
  increaseCoffeeAction,
  removeCoffeeAction,
  removeFromCartAction,
  selectPaymentMethodAction,
} from '../../reducers/cart/action'

const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      address: null,
      paymentMethod: null,
    },
    () => {
      const localCartState = localStorage.getItem(
        '@ignite-coffee/cart-state-v1.0.0',
      )
      if (localCartState) {
        return JSON.parse(localCartState)
      }

      return { cart: [], address: null, paymentMethod: null }
    },
  )
  const { cart, address, paymentMethod } = cartState

  function addToCart(coffee: CartCoffee) {
    dispatch(addToCartAction(coffee))
  }

  function removeFromCart(coffeeId: string) {
    dispatch(removeFromCartAction(coffeeId))
  }

  function increaseCoffee(coffeeId: string) {
    dispatch(increaseCoffeeAction(coffeeId))
  }

  function removeCoffee(coffeeId: string) {
    dispatch(removeCoffeeAction(coffeeId))
  }

  function selectPaymentMethod(paymentMethod: PaymentMethodTypes) {
    dispatch(selectPaymentMethodAction(paymentMethod))
  }

  function addAddress(address: Partial<Address>) {
    dispatch(addAddressAction(address))
  }

  useEffect(() => {
    const stringifiedCartState = JSON.stringify(cartState)
    localStorage.setItem(
      '@ignite-coffee/cart-state-v1.0.0',
      stringifiedCartState,
    )
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        cart,
        address,
        paymentMethod,
        addToCart,
        removeFromCart,
        increaseCoffee,
        removeCoffee,
        selectPaymentMethod,
        addAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
