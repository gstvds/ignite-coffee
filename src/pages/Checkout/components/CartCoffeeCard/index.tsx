import { Trash } from 'phosphor-react'
import {
  CartCoffeeContainer,
  DetailsContainer,
  InfoContainer,
  RemoveButton,
} from './styles'

import { QuantitySelect } from '../../../../components/QuantitySelect'

interface CartCoffeeCardProps {
  onIncrease?: () => void
  onDecrease?: () => void
  onRemove?: () => void
  imageSource: string
  title: string
  price: number
}

export function CartCoffeeCard({
  title,
  imageSource,
  price,
}: CartCoffeeCardProps) {
  return (
    <CartCoffeeContainer>
      <InfoContainer>
        <img src={imageSource} alt="" />
        <DetailsContainer>
          <span>{title}</span>
          <div>
            <QuantitySelect />
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </div>
        </DetailsContainer>
      </InfoContainer>
      <span>R$ {price.toFixed(2).replace('.', ',')}</span>
    </CartCoffeeContainer>
  )
}
