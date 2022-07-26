import { useState } from 'react'
import { AddressFormContainer, InputRow } from './styles'

import { Input } from '../../../../components/Input'
import { useCart } from '../../../../contexts/CartContext'

export function AddressForm() {
  const { address, addAddress } = useCart()
  const [postCode, setPostCode] = useState(() => address?.postCode ?? '')
  const [street, setStreet] = useState(() => address?.street ?? '')
  const [number, setNumber] = useState(() => address?.number ?? '')
  const [additional, setAdditional] = useState(() => address?.additional ?? '')
  const [neighbourhood, setNeighbourhood] = useState(
    () => address?.neighbourhood ?? '',
  )
  const [city, setCity] = useState(() => address?.city ?? '')
  const [state, setState] = useState(() => address?.state ?? '')

  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        value={postCode}
        onChange={(event) => setPostCode(event.target.value)}
        onBlur={() => postCode !== '' && addAddress({ postCode })}
      />
      <Input
        placeholder="Rua"
        value={street}
        onChange={(event) => setStreet(event.target.value)}
        onBlur={() => street !== '' && addAddress({ street })}
      />
      <InputRow>
        <Input
          placeholder="Número"
          inputSize="medium"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
          onBlur={() => number !== '' && addAddress({ number })}
        />
        <Input
          placeholder="Complemento"
          optional
          value={additional}
          onChange={(event) => setAdditional(event.target.value)}
          onBlur={() => addAddress({ additional })}
        />
      </InputRow>
      <InputRow>
        <Input
          placeholder="Bairro"
          inputSize="medium"
          value={neighbourhood}
          onChange={(event) => setNeighbourhood(event.target.value)}
          onBlur={() => neighbourhood !== '' && addAddress({ neighbourhood })}
        />
        <Input
          placeholder="Cidade"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          onBlur={() => city !== '' && addAddress({ city })}
        />
        <Input
          placeholder="UF"
          inputSize="small"
          value={state}
          onChange={(event) => setState(event.target.value)}
          onBlur={() => state !== '' && addAddress({ state })}
          max={2}
          min={2}
        />
      </InputRow>
    </AddressFormContainer>
  )
}
