import { MapPin } from 'phosphor-react'

import { AddressForm } from './components/AddressForm'
import {
  AddressHeader,
  AddressCard,
  CheckoutContainer,
  CheckoutContent,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutContent>
        <div>
          <h2>Complete seu pedido</h2>
          <AddressCard>
            <AddressHeader>
              <MapPin size={22} />
              <div>
                <span>Endereço de Entrega</span>
                <span>Infome o endereço onde deseja receber o pedido</span>
              </div>
            </AddressHeader>
            <AddressForm />
          </AddressCard>
        </div>
        <div>
          <h2>Cafés selecionados</h2>
        </div>
      </CheckoutContent>
    </CheckoutContainer>
  )
}
