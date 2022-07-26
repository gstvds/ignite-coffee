import styled, { css } from 'styled-components'

interface PaymentContainerProps {
  selected?: boolean
}

export const PaymentContainer = styled.button<PaymentContainerProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  gap: 0.75rem;
  border: 0;
  border-radius: 8px;
  width: 100%;
  background: ${(props) =>
    props.theme.colors[props.selected ? 'purple-light' : 'base-button']};

  color: ${(props) => props.theme.colors['base-subtitle']};
  font-size: 0.75rem;
  text-transform: uppercase;
  text-align: left;

  cursor: pointer;

  ${(props) =>
    !props.selected &&
    css`
      &:hover {
        background: ${(props) => props.theme.colors['base-hover']};
      }

      &:focus {
        box-shadow: none;
        outline: 0;
      }
    `}

  ${(props) =>
    props.selected &&
    css`
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors.purple};
    `}

  svg {
    height: 22px;
    width: 22px;
    color: ${(props) => props.theme.colors.purple};
  }
`
