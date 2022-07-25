import { MapPin, ShoppingCart } from 'phosphor-react'

import { HeaderContainer, Location, Cart, Counter } from './styles'

import coffeeLogo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <NavLink to="/">
          <img src={coffeeLogo} alt="" />
        </NavLink>
        <nav>
          <Location>
            <MapPin size={22} weight="fill" />
            Porto Alegre
          </Location>
          <Cart to="/checkout">
            <ShoppingCart size={22} weight="fill" />
            <Counter>
              <span>3</span>
            </Counter>
          </Cart>
        </nav>
      </div>
    </HeaderContainer>
  )
}
