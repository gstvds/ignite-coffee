import { MapPin } from 'phosphor-react'
import { Input } from '../../components/Input'
import {
  AddressHeader,
  AddressCard,
  CheckoutContainer,
  CheckoutContent,
  InputRow,
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
            <form>
              <Input placeholder="CEP" />
              <Input placeholder="Rua" />
              <InputRow>
                <Input placeholder="Número" inputSize="medium" />
                <Input placeholder="Complemento" optional />
              </InputRow>
              <InputRow>
                <Input placeholder="Bairro" inputSize="medium" />
                <Input placeholder="Cidade" />
                <Input placeholder="UF" inputSize="small" />
              </InputRow>
            </form>
          </AddressCard>
        </div>
        <div>
          <h2>Cafés selecionados</h2>
        </div>
      </CheckoutContent>
    </CheckoutContainer>
  )
}
