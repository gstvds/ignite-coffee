import { Input } from '../../../../components/Input'
import { AddressFormContainer, InputRow } from './styles'

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
