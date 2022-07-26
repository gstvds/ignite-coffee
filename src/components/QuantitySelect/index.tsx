import { Minus, Plus } from 'phosphor-react'

import { QuantityContainer } from './styles'

interface QuantitySelectProps {
  quantity: number
  onRemove: () => void
  onAdd: () => void
}

export function QuantitySelect({
  quantity,
  onRemove,
  onAdd,
}: QuantitySelectProps) {
  return (
    <QuantityContainer>
      <Minus size={14} weight="bold" onClick={onRemove} />
      <span>{quantity}</span>
      <Plus size={14} weight="bold" onClick={onAdd} />
    </QuantityContainer>
  )
}
