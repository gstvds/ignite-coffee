import styled, { DefaultTheme } from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 2rem 15rem;
`

export const SuccessContent = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  max-width: 70rem;
  margin-top: 2.5rem;

  > div {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme.colors['yellow-dark']};
    margin-bottom: 0.25rem;
  }

  > span {
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }
`

export const DeliveryInformationContainer = styled.div`
  border-radius: 6px 36px;
  background: linear-gradient(to right, #dbac2c, #8047f8);
  padding: 1px;
  margin-top: 2.5rem;
`

export const DeliveryInformationContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  padding-right: 8rem;
  border-radius: inherit;
  background: ${(props) => props.theme.colors.background};
  gap: 2rem;
`

interface OrderInfoProps {
  iconColor: keyof DefaultTheme['colors']
}

export const OrderInfo = styled.div<OrderInfoProps>`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  > svg {
    color: ${(props) => props.theme.colors.background};
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    padding: 0.5rem;
    background-color: ${(props) => props.theme.colors[props.iconColor]};
  }

  > div {
    display: flex;
    flex-direction: column;
  }
`
