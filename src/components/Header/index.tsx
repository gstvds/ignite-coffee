import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { HeaderContainer, Location, Cart, Counter } from './styles'

import coffeeLogo from '../../assets/logo.svg'
import { useCart } from '../../contexts/CartContext'

export function Header() {
  const { cart, address } = useCart()

  return (
    <HeaderContainer>
      <div>
        <NavLink to="/">
          <img src={coffeeLogo} alt="" />
        </NavLink>
        <nav>
          {address?.city && (
            <Location>
              <MapPin size={22} weight="fill" />
              {address.city}
            </Location>
          )}
          <Cart to="/checkout">
            <ShoppingCart size={22} weight="fill" />
            {cart.length > 0 && (
              <Counter>
                <span>{cart.length}</span>
              </Counter>
            )}
          </Cart>
        </nav>
      </div>
    </HeaderContainer>
  )
}
