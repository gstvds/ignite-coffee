import { MapPin, Timer } from 'phosphor-react'
import {
  DeliveryInformationContainer,
  DeliveryInformationContent,
  OrderInfo,
  SuccessContainer,
  SuccessContent,
} from './styles'

import successImage from '../../assets/success.svg'

export function Success() {
  return (
    <SuccessContainer>
      <SuccessContent>
        <div>
          <h1>Uhu! Pedido confirmado</h1>
          <span>Agora é só aguardar que logo o café chegará até você</span>
          <DeliveryInformationContainer>
            <DeliveryInformationContent>
              <OrderInfo iconColor="purple">
                <MapPin size={16} weight="fill" />
                <div>
                  <span>
                    Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                  </span>
                  <span>Farrapos - Porto Alegre, RS</span>
                </div>
              </OrderInfo>
              <OrderInfo iconColor="yellow">
                <Timer size={16} weight="fill" />
                <div>
                  <span>Previsão de Entrega</span>
                  <strong>20 min - 30 min</strong>
                </div>
              </OrderInfo>
              <OrderInfo iconColor="yellow-dark">
                <Timer size={16} weight="fill" />
                <div>
                  <span>Pagamento na entrega</span>
                  <strong>Cartão de crédito</strong>
                </div>
              </OrderInfo>
            </DeliveryInformationContent>
          </DeliveryInformationContainer>
        </div>
        <img src={successImage} alt="" />
      </SuccessContent>
    </SuccessContainer>
  )
}
