import { HeroBackground, HomeContainer, HomeContent } from './styles'
import { Hero } from './components/Hero'

export function Home() {
  return (
    <HomeContainer>
      <HeroBackground />
      <HomeContent>
        <Hero />
      </HomeContent>
    </HomeContainer>
  )
}
