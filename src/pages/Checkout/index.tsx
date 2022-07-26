import { useNavigate } from 'react-router-dom'

import { CartCoffeeCard } from './CartCoffeeCard'

import { AddressForm } from './components/AddressForm'
import {
  DeliveryHeader,
  DeliveryCard,
  CheckoutContainer,
  CheckoutContent,
  CoffeeCard,
  Divider,
  DescriptionContainer,
  SubtotalTitle,
  SubtotalPrice,
  TotalTitle,
  TotalPrice,
  ConfirmButton,
  LocationIcon,
  CurrencyIcon,
  PaymentMethodContainer,
} from './styles'

import * as images from '../../utils/images'
import { PaymentMethod } from './components/PaymentMethod'

export function Checkout() {
  const navigate = useNavigate()

  function handleCompleteOrder() {
    navigate('/success')
  }

  return (
    <CheckoutContainer>
      <CheckoutContent>
        <div>
          <h2>Complete seu pedido</h2>
          <DeliveryCard>
            <DeliveryHeader>
              <LocationIcon size={22} />
              <div>
                <span>Endereço de Entrega</span>
                <span>Infome o endereço onde deseja receber o pedido</span>
              </div>
            </DeliveryHeader>
            <AddressForm />
          </DeliveryCard>
          <DeliveryCard>
            <DeliveryHeader>
              <CurrencyIcon size={22} />
              <div>
                <span>Pagamento</span>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </DeliveryHeader>
            <PaymentMethodContainer>
              <PaymentMethod
                title="Cartão de Crédito"
                onSelect={() => null}
                type="credit_card"
                selected
              />
              <PaymentMethod
                title="Cartão de Débito"
                onSelect={() => null}
                type="debit_card"
              />
              <PaymentMethod
                title="Dinheiro"
                onSelect={() => null}
                type="money"
              />
            </PaymentMethodContainer>
          </DeliveryCard>
        </div>
        <div>
          <h2>Cafés selecionados</h2>
          <CoffeeCard>
            <CartCoffeeCard
              title="Expresso Tradicional"
              imageSource={images.expresso}
              price={9.9}
            />
            <Divider />
            <DescriptionContainer>
              <div>
                <SubtotalTitle>Total de itens</SubtotalTitle>
                <SubtotalPrice>R$ 29,70</SubtotalPrice>
              </div>
              <div>
                <SubtotalTitle>Entrega</SubtotalTitle>
                <SubtotalPrice>R$ 3,50</SubtotalPrice>
              </div>
              <div>
                <TotalTitle>Total</TotalTitle>
                <TotalPrice>R$ 33,20</TotalPrice>
              </div>
            </DescriptionContainer>
            <ConfirmButton onClick={handleCompleteOrder}>
              Confirmar Pedido
            </ConfirmButton>
          </CoffeeCard>
        </div>
      </CheckoutContent>
    </CheckoutContainer>
  )
}
