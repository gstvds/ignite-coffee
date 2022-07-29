import styled from 'styled-components'

export const CartCoffeeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3.125rem;

  > span {
    font-size: 1rem;
    font-weight: bold;
    text-align: right;
    color: ${(props) => props.theme.colors['base-text']};
  }

  & + & {
    margin-top: 3rem;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > span {
    font-size: 1rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  > div {
    display: flex;
    gap: 0.5rem;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.25rem;
  border-radius: 8px;
  background: ${(props) => props.theme.colors['base-button']};
  color: ${(props) => props.theme.colors['base-text']};

  font-size: 0.75rem;
  text-transform: uppercase;
  padding: 0.5rem;
  border: 0;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.colors.purple};
  }
`
