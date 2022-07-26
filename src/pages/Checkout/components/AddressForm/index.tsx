import { AddressFormContainer, InputRow } from './styles'
import { Input } from '../../../../components/Input'

export function AddressForm() {
  return (
    <AddressFormContainer>
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
    </AddressFormContainer>
  )
}
