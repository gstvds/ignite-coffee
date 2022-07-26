import { Minus, Plus } from 'phosphor-react'

import { QuantityContainer } from './styles'

export function QuantitySelect() {
  return (
    <QuantityContainer>
      <Minus size={14} weight="bold" />
      <span>1</span>
      <Plus size={14} weight="bold" />
    </QuantityContainer>
  )
}
