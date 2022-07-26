import {
  Coffees,
  CoffeesContainer,
  HeroBackground,
  HomeContainer,
  HomeContent,
} from './styles'

import { Hero } from './components/Hero'
import { CatalogueCard } from './components/CatalogueCard'

import coffees from '../../utils/coffees.json'
import * as images from '../../utils/images'

export function Home() {
  return (
    <HomeContainer>
      <HeroBackground />
      <HomeContent>
        <Hero />
        <CoffeesContainer>
          <h2>Nossos cafés</h2>
          <Coffees>
            {coffees.map((coffee) => (
              <CatalogueCard
                key={coffee.id}
                tags={coffee.tags}
                price={coffee.price}
                imageSource={images[coffee.imageSource as keyof typeof images]}
                title="Expresso Tradicional"
                description="O tradicional café feito com água quente e grãos moídos"
              />
            ))}
          </Coffees>
        </CoffeesContainer>
      </HomeContent>
    </HomeContainer>
  )
}
