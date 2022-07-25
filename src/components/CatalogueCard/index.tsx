import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  ActionsContainer,
  AddToCardButton,
  CardContainer,
  CardFooter,
  PriceContainer,
  QuantityContainer,
  Tag,
  TagContainer,
} from './styles'

interface CardProps {
  title: string
  imageSource: string
  tags: string[]
  description: string
  price: number
}

export function CatalogueCard({
  imageSource,
  tags,
  title,
  description,
  price,
}: CardProps) {
  return (
    <CardContainer>
      <img src={imageSource} alt="" />
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
          <QuantityContainer>
            <Minus size={14} weight="bold" />
            <span>1</span>
            <Plus size={14} weight="bold" />
          </QuantityContainer>
          <AddToCardButton>
            <ShoppingCart size={22} weight="fill" />
          </AddToCardButton>
        </ActionsContainer>
      </CardFooter>
    </CardContainer>
  )
}
