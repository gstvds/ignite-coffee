import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  background: ${(props) => props.theme.colors.background};

  width: 100%;
  max-width: 70rem;
  max-height: 104px;

  padding: 2rem;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.75rem;
  }
`

export const Location = styled.div`
  padding: 0.5rem;
  border-radius: 8px;
  background: ${(props) => props.theme.colors['purple-light']};
  color: ${(props) => props.theme.colors['purple-dark']};
  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`

export const Cart = styled(NavLink)`
  position: relative;
  background: ${(props) => props.theme.colors['yellow-light']};
  border-radius: 8px;
  height: 2.375rem;
  width: 2.375rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  svg {
    color: ${(props) => props.theme.colors['yellow-dark']};
  }
`

export const Counter = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background: ${(props) => props.theme.colors['yellow-dark']};
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: ${(props) => props.theme.colors.white};
    font-size: 0.75rem;
    font-weight: bold;
    line-height: 130%;
  }
`
