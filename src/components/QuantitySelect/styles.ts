import styled from 'styled-components'

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.25rem;
  background: ${(props) => props.theme.colors['base-button']};
  border-radius: 6px;

  span {
    text-align: center;
    width: 1.25rem;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme.colors['base-title']};
  }

  svg {
    color: ${(props) => props.theme.colors.purple};
    transition: color 0.2s;
    cursor: pointer;
  }

  svg:hover {
    color: ${(props) => props.theme.colors['purple-dark']};
  }
`
