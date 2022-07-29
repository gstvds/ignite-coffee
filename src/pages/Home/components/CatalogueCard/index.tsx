import { useState } from 'react'
import { ShoppingCart } from 'phosphor-react'

import {
  ActionsContainer,
  AddToCardButton,
  CardContainer,
  CardFooter,
  PriceContainer,
  Tag,
  TagContainer,
} from './styles'

import { QuantitySelect } from '../../../../components/QuantitySelect'
import { useCart } from '../../../../contexts/CartContext'

import * as images from '../../../../utils/images'
import { toast } from 'react-toastify'

interface CardProps {
  id: string
  title: string
  imageSource: string
  tags: string[]
  description: string
  price: number
}

export function CatalogueCard({
  id,
  imageSource,
  tags,
  title,
  description,
  price,
}: CardProps) {
  const { addToCart } = useCart()
  // TODO: Get quantity from cart
  const [quantity, setQuantity] = useState(0)

  function handleAddCoffee() {
    setQuantity((quantity) => (quantity += 1))
  }

  function handleRemoveCoffee() {
    if (quantity <= 0) return
    setQuantity((quantity) => (quantity -= 1))
  }

  function handleAddToCart() {
    if (quantity > 0) {
      addToCart({ id, description, imageSource, price, quantity, tags, title })
    }
    toast.success('Café adicionado no carrinho', {
      toastId: 'added-coffee-success',
    })
  }

  return (
    <CardContainer>
      <img src={images[imageSource as keyof typeof images]} alt="" />
      <TagContainer>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagContainer>
      <h1>{title}</h1>
      <p>{description}</p>
      <CardFooter>
        <PriceContainer>
          <span>R$</span>
          <h2>{price.toFixed(2).replace('.', ',')}</h2>
        </PriceContainer>
        <ActionsContainer>
          <QuantitySelect
            quantity={quantity}
            onAdd={handleAddCoffee}
            onRemove={handleRemoveCoffee}
          />
          <AddToCardButton onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </AddToCardButton>
        </ActionsContainer>
      </CardFooter>
    </CardContainer>
  )
}
