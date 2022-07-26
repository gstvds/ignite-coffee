import { useNavigate } from 'react-router-dom'

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
import { AddressForm } from './components/AddressForm'
import { PaymentMethod } from './components/PaymentMethod'
import { CartCoffeeCard } from './components/CartCoffeeCard'

import * as images from '../../utils/images'
import { useCart } from '../../contexts/CartContext'

export function Checkout() {
  const { cart, address, paymentMethod, selectPaymentMethod } = useCart()
  const totalPrice = cart.reduce((acc, coffee) => {
    acc += coffee.price * coffee.quantity
    return acc
  }, 0)
  const deliveryPrice = address ? 3.5 : 0
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
                onSelect={() => selectPaymentMethod('credit_card')}
                type="credit_card"
                selected={paymentMethod === 'credit_card'}
              />
              <PaymentMethod
                title="Cartão de Débito"
                onSelect={() => selectPaymentMethod('debit_card')}
                type="debit_card"
                selected={paymentMethod === 'debit_card'}
              />
              <PaymentMethod
                title="Dinheiro"
                onSelect={() => selectPaymentMethod('money')}
                type="money"
                selected={paymentMethod === 'money'}
              />
            </PaymentMethodContainer>
          </DeliveryCard>
        </div>
        <div>
          <h2>Cafés selecionados</h2>
          <CoffeeCard>
            {cart.length > 0 ? (
              cart.map((coffee) => (
                <CartCoffeeCard
                  key={coffee.id}
                  id={coffee.id}
                  title={coffee.title}
                  imageSource={
                    images[coffee.imageSource as keyof typeof images]
                  }
                  quantity={coffee.quantity}
                  price={coffee.price}
                />
              ))
            ) : (
              <h1>Nenhum café selecionado</h1>
            )}
            <Divider />
            <DescriptionContainer>
              <div>
                <SubtotalTitle>Total de itens</SubtotalTitle>
                <SubtotalPrice>
                  R$ {totalPrice.toFixed(2).replace('.', ',')}
                </SubtotalPrice>
              </div>
              <div>
                <SubtotalTitle>Entrega</SubtotalTitle>
                <SubtotalPrice>
                  R$ {deliveryPrice.toFixed(2).replace('.', ',')}
                </SubtotalPrice>
              </div>
              <div>
                <TotalTitle>Total</TotalTitle>
                <TotalPrice>
                  R$ {(totalPrice + deliveryPrice).toFixed(2).replace('.', ',')}
                </TotalPrice>
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
