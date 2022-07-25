import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { HeroContainer, ItemIconContainer, ItemsContainer } from './styles'

import heroImage from '../../../../assets/hero.png'

export function Hero() {
  return (
    <HeroContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <ItemsContainer>
          <div>
            <ItemIconContainer backgroundColor="yellow-dark">
              <ShoppingCart size={16} weight="fill" />
            </ItemIconContainer>
            Compra simples e segura
          </div>
          <div>
            <ItemIconContainer backgroundColor="base-text">
              <Package size={16} weight="fill" />
            </ItemIconContainer>
            Embalagem mantém o café intacto
          </div>
          <div>
            <ItemIconContainer backgroundColor="yellow">
              <Timer size={16} weight="fill" />
            </ItemIconContainer>
            Entrega rápida e rastreada
          </div>
          <div>
            <ItemIconContainer backgroundColor="purple">
              <Coffee size={16} weight="fill" />
            </ItemIconContainer>
            O café chega fresquinho até você
          </div>
        </ItemsContainer>
      </div>
      <img
        src={heroImage}
        alt="Copo de café branco com tampa preta e logotipo escrito Coffee Delivery"
      />
    </HeroContainer>
  )
}
