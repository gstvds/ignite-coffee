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
              <CatalogueCard key={coffee.id} {...coffee} />
            ))}
          </Coffees>
        </CoffeesContainer>
      </HomeContent>
    </HomeContainer>
  )
}
