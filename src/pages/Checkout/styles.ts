import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const CheckoutContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 70rem;
  margin-top: 2.5rem;

  div > h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: 1rem;
    text-align: left;
  }
`

const BaseCard = styled.div`
  border-radius: 6px;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.colors['base-card']};

  display: flex;
  flex-direction: column;
`

export const AddressCard = styled(BaseCard)`
  min-width: 40rem;
`

export const AddressHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;

  svg {
    color: ${(props) => props.theme.colors['yellow-dark']};
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  div > span {
    font-size: 1rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  div > span + span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors['base-text']};
  }
`
