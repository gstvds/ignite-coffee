import { ShoppingCart } from 'phosphor-react'
import { QuantitySelect } from '../QuantitySelect'
import {
  ActionsContainer,
  AddToCardButton,
  CardContainer,
  CardFooter,
  PriceContainer,
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
          <QuantitySelect />
          <AddToCardButton>
            <ShoppingCart size={22} weight="fill" />
          </AddToCardButton>
        </ActionsContainer>
      </CardFooter>
    </CardContainer>
  )
}
