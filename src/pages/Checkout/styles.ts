import { CurrencyDollar, MapPin } from 'phosphor-react'
import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 2rem 15rem;
`

export const CheckoutContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
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

  @media screen and (max-width: 1180px) {
    flex-direction: column;
    max-width: 50rem;
    justify-content: flex-start;
    gap: 1rem;
  }
`

const BaseCard = styled.div`
  border-radius: 6px;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.colors['base-card']};

  display: flex;
  flex-direction: column;
`

export const DeliveryCard = styled(BaseCard)`
  width: 100%;
  box-sizing: content-box;

  &:first-of-type {
    margin-bottom: 0.75rem;
  }
`

export const CoffeeCard = styled(BaseCard)`
  max-width: 28rem;
  border-radius: 6px 44px;
`

export const DeliveryHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;

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

export const PaymentMethodContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 2rem;
`

export const LocationIcon = styled(MapPin)`
  color: ${(props) => props.theme.colors['yellow-dark']};
`

export const CurrencyIcon = styled(CurrencyDollar)`
  color: ${(props) => props.theme.colors.purple};
`

export const Divider = styled.div`
  margin: 1.5rem 0;
  width: 100%;
  height: 0px;
  border: 1px solid ${(props) => props.theme.colors['base-button']};
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const SubtotalTitle = styled.span`
  font-size: 0.875rem;
  text-align: left;
  color: ${(props) => props.theme.colors['base-text']};
`

export const SubtotalPrice = styled.span`
  font-size: 1rem;
  text-align: right;
  color: ${(props) => props.theme.colors['base-text']};
`

export const TotalTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  text-align: left;
  color: ${(props) => props.theme.colors['base-subtitle']};
`

export const TotalPrice = styled.span`
  font-size: 1rem;
  font-weight: 700;
  text-align: right;
  color: ${(props) => props.theme.colors['base-subtitle']};
`

export const ConfirmButton = styled.button`
  padding: 0.75rem 0.5rem;
  border-radius: 8px;
  border: 0;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  min-height: 2.875rem;

  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;

  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.yellow};
`
