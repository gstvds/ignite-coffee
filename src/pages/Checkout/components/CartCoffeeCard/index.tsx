import { Trash } from 'phosphor-react'
import {
  CartCoffeeContainer,
  DetailsContainer,
  InfoContainer,
  RemoveButton,
} from './styles'

import { QuantitySelect } from '../../../../components/QuantitySelect'
import { useCart } from '../../../../contexts/CartContext'
import { toast } from 'react-toastify'

interface CartCoffeeCardProps {
  onIncrease?: () => void
  onDecrease?: () => void
  onRemove?: () => void
  imageSource: string
  title: string
  price: number
  quantity: number
  id: string
}

export function CartCoffeeCard({
  id,
  title,
  imageSource,
  price,
  quantity,
}: CartCoffeeCardProps) {
  const { increaseCoffee, removeCoffee, removeFromCart } = useCart()

  function handleRemoveCoffee() {
    removeCoffee(id)
  }

  function handleAddCoffee() {
    increaseCoffee(id)
  }

  function handleRemoveCoffeeFromCart() {
    removeFromCart(id)
    toast.warning('Café removido do carrinho', {
      toastId: 'removed-coffee-warning',
    })
  }

  return (
    <CartCoffeeContainer>
      <InfoContainer>
        <img src={imageSource} alt="" />
        <DetailsContainer>
          <span>{title}</span>
          <div>
            <QuantitySelect
              quantity={quantity}
              onRemove={handleRemoveCoffee}
              onAdd={handleAddCoffee}
            />
            <RemoveButton onClick={handleRemoveCoffeeFromCart}>
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
