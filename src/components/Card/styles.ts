import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.25rem;
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 36px;

  max-width: 16rem;

  img {
    height: 7.5rem;
    width: 7.5rem;
    object-fit: contain;
    margin-top: -2.5rem;
  }

  h1 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-top: 1rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-top: 0.5rem;
  }
`

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.75rem;
`

export const Tag = styled.div`
  padding: 0.25rem 0.5rem;
  background: ${(props) => props.theme.colors['yellow-light']};
  border-radius: 100px;

  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;
  color: ${(props) => props.theme.colors['yellow-dark']};
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 130%;
`

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 1.5rem;
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2px;

  span {
    font-size: 0.875rem;
    line-height: 130%;
  }

  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 130%;
    margin-bottom: -0.25rem;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

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
  }

  svg:hover {
    color: ${(props) => props.theme.colors['purple-dark']};
  }
`

export const AddToCardButton = styled.button`
  background: ${(props) => props.theme.colors['purple-dark']};
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 0.5rem;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme.colors.purple};
  }

  svg {
    color: ${(props) => props.theme.colors['base-card']};
  }
`
